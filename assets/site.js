/* ==========================================================================
   Public branch site — shared header, footer, mega menu, and branch config.
   Every branch-specific fact lives in SITE below. Anything still in
   [square brackets] is a placeholder and is outlined while SITE.draft is true.
   ========================================================================== */
(function () {
  'use strict';

  var SITE = {
    draft: true, // set false at launch: removes the banner and placeholder outlines

    // ---- Branch identity (city-free per branch naming rule) ----
    branchName: '',              // city-free; leave blank unless a non-city branch name is approved
    branchNmls: '2776190',       // from the social media compliance packet (2026-10-06)
    licensedStates: 'AL, AR, AZ, CA, CO, FL, ID, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, NJ, NM, NV, OH, OK, OR, PA, SC, TN, TX, UT, VA, WI, WV',
    phone: '(385) 606-0511',     // phone + address from the Realtor Intro Email Campaign doc (KC 2026-11-03)
    phoneHref: 'tel:+13856060511',
    email: 'VCIProvoContact@villagecapital.com',
    address1: '4778 N 300 W, Suite 100',
    address2: 'Provo, UT 84604',
    hours: 'Mon–Fri 9am–5pm',

    // ---- Apply ----
    applyUrl: 'https://apply.villagecapital.com/signup?referrerId=kcsmalley%40villagecapital.com&loanType=MORTGAGE', // KC's Blend link (main Apply buttons, per KC 2026-11-02)
    applyNewTab: true,

    // ---- Company / compliance ----
    company: 'Village Capital & Investment LLC',
    companyNmls: '3317',
    nmlsConsumerAccess: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/3317',
    licensesUrl: 'https://villagecapital.com/licenses/',
    disclosuresUrl: 'https://villagecapital.com/resources/disclosures/',
    termsUrl: 'https://villagecapital.com/terms-of-use/',
    corporateUrl: 'https://villagecapital.com/',
    privacyUrl: 'https://villagecapital.com/privacy-policy', // corporate links + footer disclosures from villagecapital.com footer (2026-11-03)

    // ---- Team. group 'lo' = loan officers (NMLS, Apply button); 'staff' = processing/operations.
    // Staff titles confirmed by KC 2026-11-02.
    // Phone/email/NMLS from portal user profiles (2026-11-02). LO applyUrl = Blend link pattern with referrerId=<LO email>.
    // Headshots: 600x600 JPGs in site/assets/team/.
    team: [
      { name: 'KC Smalley', title: 'Branch Manager', group: 'lo', nmls: '296801', phone: '(801) 948-2548', email: 'kcsmalley@villagecapital.com', photo: '', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=kcsmalley%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Cammon Cooper', title: 'Loan Officer', group: 'lo', nmls: '2627062', phone: '(801) 948-2771', email: 'cacooper@villagecapital.com', photo: '', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=cacooper%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Courtney Curtis', title: 'Loan Officer', group: 'lo', nmls: '2816950', phone: '(801) 541-4639', email: 'cocurtis@villagecapital.com', photo: 'assets/team/courtney-curtis.jpg', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=cocurtis%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Benji Frandsen', title: 'Loan Officer', group: 'lo', nmls: '2584242', phone: '(801) 948-3643', email: 'befrandsen@villagecapital.com', photo: '', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=befrandsen%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Drake Knowles', title: 'Loan Officer', group: 'lo', nmls: '2361685', phone: '(801) 948-2610', email: 'drknowles@villagecapital.com', photo: '', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=drknowles%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Sean Morgan', title: 'Loan Officer', group: 'lo', nmls: '2061604', phone: '(801) 930-8129', email: 'semorgan@villagecapital.com', photo: 'assets/team/sean-morgan.jpg', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=semorgan%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Ricky Nelson', title: 'Loan Officer', group: 'lo', nmls: '964955', phone: '(801) 948-0159', email: 'rinelson@villagecapital.com', photo: 'assets/team/ricky-nelson.jpg', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=rinelson%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Amber Talbot', title: 'Loan Officer', group: 'lo', nmls: '2769035', phone: '(801) 895-3479', email: 'amtalbot@villagecapital.com', photo: '', applyUrl: 'https://apply.villagecapital.com/signup?referrerId=amtalbot%40villagecapital.com&loanType=MORTGAGE', bio: '', specialties: [] },
      { name: 'Lindsay Smalley', title: 'Office Manager / Sr. Processor', group: 'staff', nmls: '', phone: '', email: 'lismalley@villagecapital.com', photo: 'assets/team/lindsay-smalley.jpg', applyUrl: '', bio: '', specialties: [] },
      { name: 'Candace Taylor', title: 'Processing Manager', group: 'staff', nmls: '', phone: '(801) 948-3618', email: 'cataylor@villagecapital.com', photo: 'assets/team/candace-taylor.jpg', applyUrl: '', bio: '', specialties: [] },
      { name: 'Ally Knudsen', title: 'Loan Processor', group: 'staff', nmls: '', phone: '', email: 'alknudsen@villagecapital.com', photo: 'assets/team/ally-knudsen.jpg', applyUrl: '', bio: '', specialties: [] },
      { name: 'Jadyn Smalley', title: 'Redisclosure Specialist', group: 'staff', nmls: '', phone: '', email: 'jasmalley@villagecapital.com', photo: 'assets/team/jadyn-smalley.jpg', applyUrl: '', bio: '', specialties: [] },
      { name: 'Robert Beguhl', title: 'Underwriting Submissions', group: 'staff', nmls: '', phone: '(801) 948-3542', email: 'robeguhl@villagecapital.com', photo: 'assets/team/robert-beguhl.jpg', applyUrl: '', bio: '', specialties: [] },
      { name: 'Samantha DeRouchie', title: 'Loan Intake & Setup', group: 'staff', nmls: '', phone: '', email: 'saderouchie@villagecapital.com', photo: 'assets/team/samantha-derouchie.jpg', applyUrl: '', bio: '', specialties: [] }
    ]
  };
  window.SITE = SITE;

  function isPh(v) { return typeof v === 'string' && /^\[.*\]$|\[.*\]/.test(v); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function val(key) {
    var v = SITE[key];
    return isPh(v) ? '<span class="ph">' + esc(v) + '</span>' : esc(v);
  }
  window.SITE_HELPERS = { esc: esc, isPh: isPh, val: val };

  // ---------- Icons (thin line style to match the brand icon set) ----------
  var P = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.7-4.4L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14.7 4.4L21 15"/><path d="M21 20v-5h-5"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h4"/>',
    wallet: '<path d="M4 7h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h11"/><path d="M16 13.5h.01"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9"/><path d="M17 6l3 3"/><path d="M15 8l2 2"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16l4-5 3 3 5-6"/>',
    scale: '<path d="M12 4v16"/><path d="M5 20h14"/><path d="M4 8h16"/><path d="M6 8l-3 6a3 3 0 0 0 6 0z"/><path d="M18 8l-3 6a3 3 0 0 0 6 0z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    people: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2A5 5 0 0 1 21 19"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    phone: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.5"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/>',
    handshake: '<path d="M3 12l4-4 3 1 3-2 3 1 5 4"/><path d="M7 8l-4 4 5 5 2-1 2 2 2-1 2 1 4-4"/><path d="M10 16l2-2M12 18l2-2"/>',
    laptop: '<rect x="5" y="5" width="14" height="10" rx="1"/><path d="M3 19h18"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>'
  };
  function icon(name, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + (P[name] || '') + '</svg>';
  }
  window.SITE_ICON = icon;

  // ---------- Apply link ----------
  function applyAttrs() {
    if (!SITE.applyUrl) return 'href="apply.html"';
    return 'href="' + esc(SITE.applyUrl) + '"' + (SITE.applyNewTab ? ' target="_blank" rel="noopener"' : '');
  }
  window.SITE_APPLY_ATTRS = applyAttrs;
  function phoneHref() { return SITE.phoneHref || (isPh(SITE.phone) ? 'apply.html#contact' : 'tel:' + SITE.phone.replace(/[^\d+]/g, '')); }

  // ---------- Header with mega menu ----------
  var MENUS = [
    {
      id: 'buy', label: 'Buy a Home',
      cols: [
        { h: 'Purchase loans', items: [
          ['loans.html#va', 'VA Home Loans', 'For veterans, service members and eligible surviving spouses'],
          ['loans.html#fha', 'FHA Home Loans', 'Flexible credit guidelines and a low down payment'],
          ['loans.html#conventional', 'Conventional Loans', 'Fixed and adjustable options for many buyers']
        ] },
        { h: 'Plan your purchase', items: [
          ['calculators.html#affordability', 'How Much Can I Afford?', 'Turn income and debts into a price range'],
          ['calculators.html#payment', 'Mortgage Payment Calculator', 'Taxes, insurance and mortgage insurance included'],
          ['calculators.html#rent-vs-buy', 'Rent vs. Buy', 'Compare the cost of renting with owning']
        ] },
        { h: 'Get started', items: [
          ['apply.html', 'Get Pre-Approved', 'Know your budget before you shop'],
          ['loans.html#first-time', 'First-Time Buyers', 'How the process works, step by step'],
          ['team.html', 'Find a Loan Officer', 'Work with someone who knows your file']
        ] }
      ],
      promo: { cls: '', h: 'Know your number before you shop.', p: 'A pre-approval shows sellers you are ready, and shows you what fits your budget.', cta: 'Get Pre-Approved', href: 'apply.html' }
    },
    {
      id: 'refi', label: 'Refinance',
      cols: [
        { h: 'Refinance programs', items: [
          ['loans.html#va-irrrl', 'VA IRRRL (VA Streamline)', 'Lower the rate on an existing VA loan'],
          ['loans.html#fha-streamline', 'FHA Streamline', 'Reduced paperwork for current FHA loans'],
          ['loans.html#cash-out', 'Cash-Out Refinance', 'Turn home equity into cash for your goals']
        ] },
        { h: 'Your goals', items: [
          ['loans.html#refinance', 'Lower My Payment', 'See if a new rate or term saves money'],
          ['loans.html#cash-out', 'Consolidate Debt', 'Roll higher-interest balances into one payment'],
          ['loans.html#refinance', 'Shorten My Term', 'Pay your home off sooner']
        ] },
        { h: 'Run the numbers', items: [
          ['calculators.html#refinance', 'Refinance Calculator', 'Monthly savings and break-even point'],
          ['calculators.html#term', 'Loan Term Comparison', '15 vs. 30 years, side by side'],
          ['team.html', 'Talk to a Loan Officer', 'Get a no-obligation review']
        ] }
      ],
      promo: { cls: 'red', h: 'Could a refinance lower your payment?', p: 'Enter your current loan and a new rate to see your savings and break-even point.', cta: 'Try the Refinance Calculator', href: 'calculators.html#refinance' }
    },
    {
      id: 'tools', label: 'Calculators',
      cols: [
        { h: 'Buying', items: [
          ['calculators.html#payment', 'Mortgage Payment', 'Principal, interest, taxes, insurance and MI'],
          ['calculators.html#affordability', 'Affordability', 'What price range fits your income'],
          ['calculators.html#loan-amount', 'Loan Amount Estimator', 'Start from the payment you want'],
          ['calculators.html#rent-vs-buy', 'Rent vs. Buy', 'Long-run cost of renting vs. owning']
        ] },
        { h: 'Planning & refinancing', items: [
          ['calculators.html#budget', 'Budget Calculator', 'See what your budget leaves for housing'],
          ['calculators.html#refinance', 'Refinance Savings', 'Payment change and break-even'],
          ['calculators.html#term', 'Loan Term Comparison', 'Payment and interest by term']
        ] },
        { h: 'By program', items: [
          ['calculators.html#payment?type=va', 'VA Payment', 'Includes the VA funding fee'],
          ['calculators.html#payment?type=fha', 'FHA Payment', 'Includes upfront and annual MIP'],
          ['calculators.html#payment?type=conv', 'Conventional Payment', 'Includes estimated PMI']
        ] }
      ],
      promo: { cls: 'blue', h: 'Every calculator, one place.', p: 'Estimates update as you type. When the numbers look right, a loan officer can make them real.', cta: 'Open Calculators', href: 'calculators.html' }
    },
    {
      id: 'about', label: 'About Us',
      cols: [
        { h: 'Our branch', items: [
          ['team.html', 'Meet the Team', 'Our loan officers and branch staff'],
          ['index.html#why', 'Why Work With Us', 'How we take care of you'],
          ['index.html#process', 'How It Works', 'From application to closing']
        ] },
        { h: 'Help', items: [
          ['index.html#faq', 'Frequently Asked Questions', 'Quick answers to common questions'],
          ['apply.html#contact', 'Contact Us', 'Call, email or visit'],
          ['apply.html#documents', 'What You Will Need', 'Documents to have ready']
        ] },
        { h: 'Village Capital', items: [
          [SITE.corporateUrl, 'Village Capital & Investment', 'Our company site'],
          [SITE.licensesUrl, 'Licensing', 'State licenses and disclosures'],
          [SITE.nmlsConsumerAccess, 'NMLS Consumer Access', 'Verify our license (NMLS #' + SITE.companyNmls + ')']
        ] }
      ],
      promo: { cls: '', h: 'Real people, start to finish.', p: 'Your loan officer stays with you from the first call to the closing table.', cta: 'Meet the Team', href: 'team.html' }
    }
  ];

  function megaHtml(m) {
    var cols = m.cols.map(function (c) {
      return '<div class="mega-col"><h3>' + esc(c.h) + '</h3><ul>' + c.items.map(function (it) {
        var ext = /^https?:/.test(it[0]);
        return '<li><a href="' + esc(it[0]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><strong>' + esc(it[1]) + '</strong><span>' + esc(it[2]) + '</span></a></li>';
      }).join('') + '</ul></div>';
    }).join('');
    var pr = m.promo;
    var promo = '<div class="mega-promo ' + pr.cls + '"><div><h3>' + esc(pr.h) + '</h3></div><p>' + esc(pr.p) + '</p><a class="btn btn-white" href="' + esc(pr.href) + '">' + esc(pr.cta) + '</a></div>';
    return '<div class="mega" id="mega-' + m.id + '"><div class="wrap mega-inner">' + cols + promo + '</div></div>';
  }

  function headerHtml() {
    var items = MENUS.map(function (m) {
      return '<li class="nav-item"><button class="nav-trigger" type="button" aria-expanded="false" aria-controls="mega-' + m.id + '">' + esc(m.label) + icon('chevron') + '</button>' + megaHtml(m) + '</li>';
    }).join('');
    return '' +
      (SITE.draft ? '<div class="draft-banner"><strong>Draft preview.</strong> Pending compliance review. Not for public use yet.</div>' : '') +
      '<div class="topbar"><div class="wrap topbar-inner">' +
        '<a href="' + esc(phoneHref()) + '">' + icon('phone') + '<span>' + val('phone') + '</span></a>' +
        '<a href="' + (isPh(SITE.email) ? 'apply.html#contact' : 'mailto:' + esc(SITE.email)) + '">' + icon('mail') + '<span>' + val('email') + '</span></a>' +
        '<span class="topbar-nmls">NMLS #' + esc(SITE.companyNmls) + ' · Branch NMLS #' + esc(SITE.branchNmls) + '</span>' +
      '</div></div>' +
      '<header class="site-header" id="top"><div class="wrap header-inner">' +
        '<a class="brand" href="index.html" aria-label="Village Capital & Investment home"><img src="assets/vci-logo-horizontal.png" alt="Village Capital & Investment LLC" width="1100" height="148"></a>' +
        '<nav class="main-nav" id="main-nav" aria-label="Main"><ul class="nav-list">' + items +
          '<li class="nav-item"><a class="nav-link" href="team.html">Meet the Team</a></li>' +
        '</ul></nav>' +
        '<div class="header-actions">' +
          '<a class="header-phone" href="' + esc(phoneHref()) + '"><small>Call us</small><span>' + val('phone') + '</span></a>' +
          '<a class="btn btn-primary" ' + applyAttrs() + '>Apply Now</a>' +
        '</div>' +
        '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
        '</button>' +
      '</div></header>';
  }

  function eho() {
    // Equal Housing Opportunity mark (house with equal sign)
    return '<div class="eho" role="img" aria-label="Equal Housing Opportunity">' +
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M6 22L24 7l18 15"/><path d="M11 18v23h26V18"/><path d="M17 26h14M17 33h14" stroke-width="3.4"/></svg>' +
      'EQUAL HOUSING OPPORTUNITY</div>';
  }

  function footerHtml() {
    var year = new Date().getFullYear();
    return '<footer class="site-footer">' +
      '<div class="wrap footer-top">' +
        '<div>' +
          '<img class="footer-logo" src="assets/vci-logo-on-dark.png" alt="Village Capital & Investment LLC" width="190" height="108">' +
          '<p>' + (SITE.branchName ? val('branchName') + ' · ' : '') + 'Branch NMLS #' + val('branchNmls') + '</p>' +
          '<p>Helping families buy, refinance and build equity with VA, FHA and Conventional home loans.</p>' +
        '</div>' +
        '<div><h3>Loans</h3><ul>' +
          '<li><a href="loans.html#va">VA Home Loans</a></li>' +
          '<li><a href="loans.html#fha">FHA Home Loans</a></li>' +
          '<li><a href="loans.html#conventional">Conventional Loans</a></li>' +
          '<li><a href="loans.html#refinance">Refinance</a></li>' +
          '<li><a href="loans.html#cash-out">Cash-Out Refinance</a></li>' +
        '</ul></div>' +
        '<div><h3>Tools</h3><ul>' +
          '<li><a href="calculators.html#payment">Mortgage Payment</a></li>' +
          '<li><a href="calculators.html#affordability">Affordability</a></li>' +
          '<li><a href="calculators.html#refinance">Refinance Savings</a></li>' +
          '<li><a href="calculators.html#rent-vs-buy">Rent vs. Buy</a></li>' +
          '<li><a href="calculators.html#term">Loan Term Comparison</a></li>' +
          '<li><a href="calculators.html#loan-amount">Loan Amount Estimator</a></li>' +
          '<li><a href="calculators.html#budget">Budget Calculator</a></li>' +
        '</ul></div>' +
        '<div class="footer-contact"><h3>Contact</h3>' +
          '<p><a href="' + esc(phoneHref()) + '">' + val('phone') + '</a></p>' +
          '<p>' + (isPh(SITE.email) ? val('email') : '<a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + '</a>') + '</p>' +
          '<p>' + val('address1') + '<br>' + val('address2') + '</p>' +
          '<p>' + val('hours') + '</p>' +
          '<p style="margin-top:14px"><a class="btn btn-primary" ' + applyAttrs() + '>Apply Now</a></p>' +
        '</div>' +
      '</div>' +
      '<div class="wrap footer-legal"><div class="legal-row">' + eho() + '<div>' +
        '<p><strong style="color:var(--white)">' + esc(SITE.company) + ' · NMLS #' + esc(SITE.companyNmls) + '</strong>. ' +
          'Branch NMLS #' + esc(SITE.branchNmls) + '. Equal Housing Opportunity. <a href="' + esc(SITE.nmlsConsumerAccess) + '" target="_blank" rel="noopener">NMLS Consumer Access</a> · ' +
          '<a href="' + esc(SITE.licensesUrl) + '" target="_blank" rel="noopener">State Licensing</a></p>' +
        '<p>Licensed to lend in: ' + esc(SITE.licensedStates) + '.</p>' +
        '<p>This is not a commitment to lend or an offer to extend credit. All loans are subject to credit approval, underwriting guidelines, property eligibility and program availability. ' +
          'Rates, terms and programs are subject to change without notice. Calculator results are estimates for illustration only. ' +
          'VA loans require eligibility as determined by the U.S. Department of Veterans Affairs.</p>' +
        '<p>The products or services described in this website do not originate from the Federal Housing Administration (FHA), the U.S. Department of Veterans Affairs (VA) or any other government agency. ' +
          esc(SITE.company) + ' is not affiliated with your current lender, and any loan information presented was not obtained from your current lender. ' +
          'Refinancing may result in higher total finance charges over the life of the loan.</p>' +
        '<p>' + esc(SITE.company) + ' NMLS ID: ' + esc(SITE.companyNmls) + '. Arizona Mortgage Banker License No. 0909593.</p>' +
        '<p>This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation activity or loan applications for properties located in the State of New York can be facilitated through this site.</p>' +
        '<div class="legal-links"><span>&copy; ' + year + ' ' + esc(SITE.company) + '</span>' +
          (isPh(SITE.privacyUrl) ? '<span class="ph">' + esc(SITE.privacyUrl) + '</span>' : '<a href="' + esc(SITE.privacyUrl) + '" target="_blank" rel="noopener">Privacy Policy</a>') +
          '<a href="' + esc(SITE.termsUrl) + '" target="_blank" rel="noopener">Terms of Use</a>' +
          '<a href="' + esc(SITE.disclosuresUrl) + '" target="_blank" rel="noopener">Disclosures</a>' +
          '<a href="' + esc(SITE.licensesUrl) + '" target="_blank" rel="noopener">Licenses</a>' +
          '<a href="' + esc(SITE.corporateUrl) + '" target="_blank" rel="noopener">villagecapital.com</a></div>' +
      '</div></div></div>' +
    '</footer>';
  }

  // ---------- Behaviour ----------
  function closeAll(except) {
    document.querySelectorAll('.nav-trigger[aria-expanded="true"]').forEach(function (b) {
      if (b === except) return;
      b.setAttribute('aria-expanded', 'false');
      var m = document.getElementById(b.getAttribute('aria-controls'));
      if (m) m.classList.remove('open');
    });
  }
  function setOpen(btn, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var m = document.getElementById(btn.getAttribute('aria-controls'));
    if (m) m.classList.toggle('open', open);
  }

  function wire() {
    var desktop = window.matchMedia('(min-width: 961px)');
    var canHover = window.matchMedia('(hover: hover)');
    var hoverTimer;

    document.querySelectorAll('.nav-trigger').forEach(function (btn) {
      var item = btn.parentElement;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        closeAll(btn);
        setOpen(btn, open);
      });
      item.addEventListener('mouseenter', function () {
        if (!desktop.matches || !canHover.matches) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(function () { closeAll(btn); setOpen(btn, true); }, 80);
      });
      item.addEventListener('mouseleave', function () {
        if (!desktop.matches || !canHover.matches) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(function () { setOpen(btn, false); }, 160);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var open = document.querySelector('.nav-trigger[aria-expanded="true"]');
      if (open) { setOpen(open, false); open.focus(); }
      else if (document.querySelector('.main-nav.open')) toggleMenu(false);
    });
    document.addEventListener('click', function (e) {
      if (desktop.matches && !e.target.closest('.nav-item')) closeAll();
    });

    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('main-nav');
    function toggleMenu(open) {
      if (open) nav.style.top = Math.max(0, document.querySelector('.site-header').getBoundingClientRect().bottom) + 'px';
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
      document.body.style.overflow = open ? 'hidden' : '';
    }
    toggle.addEventListener('click', function () { toggleMenu(!nav.classList.contains('open')); });
    // Close menus after following an in-page link
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { closeAll(); if (!desktop.matches) toggleMenu(false); }
    });
    desktop.addEventListener && desktop.addEventListener('change', function () { toggleMenu(false); closeAll(); });

    var header = document.querySelector('.site-header');
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 4); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function fillConfig() {
    // <span data-site="phone"></span> → value (with placeholder outline)
    document.querySelectorAll('[data-site]').forEach(function (el) { el.innerHTML = val(el.getAttribute('data-site')); });
    document.querySelectorAll('[data-apply]').forEach(function (a) {
      if (SITE.applyUrl) {
        a.setAttribute('href', SITE.applyUrl);
        if (SITE.applyNewTab) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
      }
    });
    document.querySelectorAll('[data-icon]').forEach(function (el) { el.innerHTML = icon(el.getAttribute('data-icon')); });
    document.querySelectorAll('[data-team]').forEach(function (el) {
      var group = el.getAttribute('data-team-group') || 'lo';
      var list = SITE.team.filter(function (m) { return (m.group || 'lo') === group; });
      var n = parseInt(el.getAttribute('data-team'), 10) || list.length;
      if (el.hasAttribute('data-team-photos-first')) list = list.filter(function (m) { return m.photo; }).concat(list.filter(function (m) { return !m.photo; }));
      var full = el.hasAttribute('data-team-full');
      el.innerHTML = list.slice(0, n).map(function (lo) { return teamCard(lo, full); }).join('');
    });
  }

  function phSpan(v, fallback) {
    if (!v) return '<span class="ph">' + esc(fallback) + '</span>';
    return isPh(v) ? '<span class="ph">' + esc(v) + '</span>' : esc(v);
  }
  function teamCard(lo, full) {
    var isStaff = lo.group === 'staff';
    var initials = isPh(lo.name) && !/^\w/.test(lo.name) ? '' : lo.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
    var photo = lo.photo
      ? '<img src="' + esc(lo.photo) + '" alt="' + esc(lo.name) + '" loading="lazy">'
      : (initials ? esc(initials) : '<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' + P.people + '</svg>');
    var phone = lo.phone ? '<a href="tel:' + esc(lo.phone.replace(/[^\d+]/g, '')) + '">' + esc(lo.phone) + '</a>' : (isStaff ? '' : phSpan('', '[Phone]'));
    var email = lo.email ? '<a href="mailto:' + esc(lo.email) + '">' + esc(lo.email) + '</a>' : phSpan('', '[Email]');
    var apply = lo.applyUrl
      ? '<a class="btn btn-primary" href="' + esc(lo.applyUrl) + '" target="_blank" rel="noopener">Apply</a>'
      : '<a class="btn btn-primary" ' + applyAttrs() + '>Apply</a>';
    var contact = lo.email ? '<a class="btn btn-outline" href="mailto:' + esc(lo.email) + '">Email</a>'
      : lo.phone ? '<a class="btn btn-outline" href="tel:' + esc(lo.phone.replace(/[^\d+]/g, '')) + '">Call</a>'
      : '<a class="btn btn-outline" href="apply.html#contact">Contact</a>';
    return '<article class="lo-card"><div class="lo-photo">' + photo + '</div><div class="lo-body">' +
      '<h3>' + phSpan(lo.name) + '</h3><div class="lo-title">' + phSpan(lo.title) + '</div>' +
      (isStaff ? '' : '<div class="lo-nmls">NMLS ' + phSpan(lo.nmls, '[NMLS #]') + '</div>') +
      '<div class="lo-contact">' + phone + email + '</div>' +
      (full && !isStaff ? '<p class="lo-bio">' + phSpan(lo.bio, '[Short bio: background, years in lending, what clients like about working with them]') + '</p>' +
        '<ul class="lo-tags">' + (lo.specialties && lo.specialties.length ? lo.specialties.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') : '<li><span class="ph">[Specialties, e.g. VA, First-time buyers]</span></li>') + '</ul>' : '') +
      '</div>' +
      '<div class="lo-actions">' + (isStaff ? '' : apply) + contact + '</div></article>';
  }

  function init() {
    if (SITE.draft) document.body.classList.add('is-draft');
    var h = document.querySelector('[data-site-header]');
    var f = document.querySelector('[data-site-footer]');
    if (h) h.outerHTML = headerHtml();
    if (f) f.outerHTML = footerHtml();
    fillConfig();
    wire();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
