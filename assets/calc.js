/* ==========================================================================
   Mortgage math for the public calculators.
   FHA MIP tiers, UFMIP and VA funding-fee tiers mirror Quote Lab
   (quote-lab.html: calcFhaMmi, calcPMT, fundingFeeType options).
   Results are estimates for illustration only.
   ========================================================================== */
(function () {
  'use strict';

  var FHA_UFMIP = 0.0175;
  var FHA_BASE_LIMIT_SPLIT = 726200; // HUD MIP tier split (base loan), same as Quote Lab

  function pmt(principal, annualRatePct, months) {
    if (!principal || principal <= 0 || !months) return 0;
    var r = (annualRatePct || 0) / 100 / 12;
    if (!r) return principal / months;
    return principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
  }

  function balanceAfter(principal, annualRatePct, months, paid) {
    var r = (annualRatePct || 0) / 100 / 12;
    if (paid >= months) return 0;
    if (!r) return principal * (1 - paid / months);
    var p = pmt(principal, annualRatePct, months);
    return principal * Math.pow(1 + r, paid) - p * (Math.pow(1 + r, paid) - 1) / r;
  }

  // FHA annual MIP (% / yr) per HUD Handbook 4000.1 App. 1.0 — same table as Quote Lab
  function fhaAnnualMip(baseLoan, ltv, termMonths) {
    var small = baseLoan <= FHA_BASE_LIMIT_SPLIT;
    if (termMonths <= 180) {
      if (small) return ltv <= 90 ? 0.15 : 0.40;
      if (ltv <= 78) return 0.15;
      if (ltv <= 90) return 0.40;
      return 0.65;
    }
    if (small) return ltv <= 95 ? 0.50 : 0.55;
    return ltv <= 95 ? 0.70 : 0.75;
  }

  // VA funding fee (%) — purchase tiers, same as Quote Lab
  function vaFundingFee(downPct, use) {
    if (use === 'exempt') return 0;
    if (downPct >= 10) return 1.25;
    if (downPct >= 5) return 1.5;
    return use === 'sub' ? 3.3 : 2.15;
  }

  // Conventional PMI: rough annual-rate estimate by LTV (actual depends on credit score)
  function convPmiRate(ltv) {
    if (ltv <= 80) return 0;
    if (ltv <= 85) return 0.30;
    if (ltv <= 90) return 0.45;
    if (ltv <= 95) return 0.65;
    return 0.90;
  }

  /**
   * o: { type:'conv'|'fha'|'va', price, down, rate, years, taxYr, insYr, hoaMo, vaUse:'first'|'sub'|'exempt' }
   */
  function payment(o) {
    var price = Math.max(0, +o.price || 0);
    var down = Math.min(Math.max(0, +o.down || 0), price);
    var months = Math.round((+o.years || 30) * 12);
    var base = price - down;
    var downPct = price ? down / price * 100 : 0;
    var ltv = price ? base / price * 100 : 0;
    var r = {
      type: o.type, price: price, down: down, downPct: downPct, baseLoan: base, ltv: ltv,
      upfront: 0, upfrontLabel: '', upfrontRate: 0, totalLoan: base, mi: 0, miLabel: '', miRate: 0,
      tax: (+o.taxYr || 0) / 12, ins: (+o.insYr || 0) / 12, hoa: +o.hoaMo || 0, warnings: []
    };
    if (o.type === 'fha') {
      r.upfrontRate = FHA_UFMIP * 100;
      r.upfront = base * FHA_UFMIP;
      r.upfrontLabel = 'Upfront MIP (1.75%, financed)';
      r.totalLoan = base + r.upfront;
      r.miRate = fhaAnnualMip(base, ltv, months);
      r.mi = r.totalLoan * r.miRate / 100 / 12;
      r.miLabel = 'FHA mortgage insurance';
      if (downPct < 3.5 && price) r.warnings.push('FHA generally requires at least 3.5% down. Your loan officer can confirm what you qualify for.');
    } else if (o.type === 'va') {
      r.upfrontRate = vaFundingFee(downPct, o.vaUse);
      r.upfront = base * r.upfrontRate / 100;
      r.upfrontLabel = 'VA funding fee (' + r.upfrontRate + '%, financed)';
      r.totalLoan = base + r.upfront;
      r.miLabel = 'Mortgage insurance';
    } else {
      r.miRate = convPmiRate(ltv);
      r.mi = base * r.miRate / 100 / 12;
      r.miLabel = 'Private mortgage insurance (est.)';
      if (downPct < 3 && price) r.warnings.push('Conventional loans generally require at least 3% down.');
    }
    r.pi = pmt(r.totalLoan, +o.rate, months);
    r.total = r.pi + r.mi + r.tax + r.ins + r.hoa;
    r.months = months;
    return r;
  }

  /** Largest price whose total housing payment fits maxPayment. taxPct = annual % of price. */
  function maxPrice(o, maxPayment) {
    if (maxPayment <= 0) return null;
    function at(price) {
      var q = Object.assign({}, o, { price: price, taxYr: price * (o.taxPct || 0) / 100 });
      if (o.downMode === 'pct') q.down = price * (o.downPct || 0) / 100;
      return payment(q);
    }
    var lo = Math.max(1, o.downMode === 'pct' ? 1 : (+o.down || 0)), hi = 10000000;
    if (at(lo).total > maxPayment) return null;
    for (var i = 0; i < 60; i++) {
      var mid = (lo + hi) / 2;
      if (at(mid).total <= maxPayment) lo = mid; else hi = mid;
    }
    return at(Math.floor(lo / 1000) * 1000);
  }

  function money(n, dec) {
    if (!isFinite(n)) return '—';
    var d = dec == null ? 0 : dec;
    var s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
    return (n < 0 ? '−$' : '$') + s;
  }
  function moneyShort(n) {
    var a = Math.abs(n);
    if (a >= 1e6) return (n < 0 ? '−' : '') + '$' + (a / 1e6).toFixed(a >= 1e7 ? 0 : 1) + 'M';
    if (a >= 1e3) return (n < 0 ? '−' : '') + '$' + Math.round(a / 1e3) + 'K';
    return money(n);
  }

  /**
   * Minimal SVG line chart. series: [{ label, color, points:[[x,y],...], dash }]
   */
  function lineChart(svg, series, opts) {
    opts = opts || {};
    var W = 420, H = 240, L = 54, R = 24, T = 14, B = 30;
    var xs = [], ys = [0];
    series.forEach(function (s) { s.points.forEach(function (p) { xs.push(p[0]); ys.push(p[1]); }); });
    var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
    var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
    if (y1 === y0) y1 = y0 + 1;
    var step = niceStep((y1 - y0) / 4);
    y1 = Math.ceil(y1 / step) * step; y0 = Math.floor(y0 / step) * step;
    function X(v) { return L + (v - x0) / ((x1 - x0) || 1) * (W - L - R); }
    function Y(v) { return T + (1 - (v - y0) / (y1 - y0)) * (H - T - B); }
    var g = '';
    for (var v = y0; v <= y1 + 1e-6; v += step) {
      g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v) + '" y2="' + Y(v) + '" stroke="rgba(20,37,44,.12)"/>' +
           '<text x="' + (L - 8) + '" y="' + (Y(v) + 4) + '" text-anchor="end" font-size="13" fill="rgba(20,37,44,.74)">' + moneyShort(v) + '</text>';
    }
    var ticks = opts.xTicks || 5;
    for (var i = 0; i <= ticks; i++) {
      var xv = x0 + (x1 - x0) * i / ticks;
      g += '<text x="' + X(xv) + '" y="' + (H - 12) + '" text-anchor="middle" font-size="13" fill="rgba(20,37,44,.74)">' + (opts.xFormat ? opts.xFormat(xv) : Math.round(xv)) + '</text>';
    }
    if (y0 < 0) g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(0) + '" y2="' + Y(0) + '" stroke="rgba(20,37,44,.4)"/>';
    series.forEach(function (s) {
      var d = s.points.map(function (p, k) { return (k ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' ');
      g += '<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="2.5" stroke-linejoin="round"' + (s.dash ? ' stroke-dasharray="6 5"' : '') + '/>';
      var last = s.points[s.points.length - 1];
      g += '<circle cx="' + X(last[0]) + '" cy="' + Y(last[1]) + '" r="4" fill="' + s.color + '"/>';
    });
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = g;
  }
  function niceStep(raw) {
    if (raw <= 0) return 1;
    var p = Math.pow(10, Math.floor(Math.log10(raw)));
    var n = raw / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
  }

  window.MTG = {
    pmt: pmt, balanceAfter: balanceAfter, payment: payment, maxPrice: maxPrice,
    fhaAnnualMip: fhaAnnualMip, vaFundingFee: vaFundingFee, convPmiRate: convPmiRate,
    money: money, moneyShort: moneyShort, lineChart: lineChart
  };
})();
