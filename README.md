# Public branch website (first draft)

> **Working copy.** This repo is a temporary workspace for the public branch website so collaborators
> don't need access to the portal code. When the site is final it goes back into
> `kcsmalley82/vci-lindon-prod-deploy` under `site/` (PR #36). Edit here until then.
>
> To preview: open `index.html` in a browser (no build step), or run `python3 -m http.server` in this folder.

Static, public-facing site for the branch. Separate from the internal, auth-gated Branch Portal:
no Firebase, no `vci-common.js`, no login. Plain HTML + CSS + vanilla JS, no build step.

Brand: follows the **VCI Brand Style Guide** (Mar 2026), not the portal's blue/orange.
Red `#AD2542` (primary), Dark `#14252C`, Blue `#1B324A`, Gray `#F5F5F5`, White. Open Sans,
Times New Roman for sub-heads/pull quotes. Logos are the guide's own files. Layout follows villagecapital.com (dark top bar, white header with horizontal logo, photo hero, red uppercase buttons).

## Layout: one page
Simplified to a single page (2026-11-10, per marketing review). Everything lives in `index.html`:

| Section | Anchor |
|---|---|
| Hero + quick payment estimate | `#top` |
| Branch video | `#video` |
| Loan options (VA, FHA, Conventional; buy, refinance, cash-out) | `#loans` |
| Why work with us (team photo) | `#why` |
| How it works (4 steps) | `#process` |
| Loan officers + processing staff (from `SITE.team`) | `#team` |
| FAQ | `#faq` |
| Documents checklist | `#documents` |
| Contact | `#contact` |

The earlier multi-page draft (loans, full calculators, team and apply pages) is in git history
(commit `c97fb20`) if any of it should come back.

`assets/site.js` builds the header (anchor nav) and footer and holds **every branch fact in one
`SITE` object**. `assets/calc.js` holds the mortgage math for the quick estimator (FHA MIP table,
UFMIP and VA funding-fee tiers mirror `quote-lab.html`).

`assets/video/branch-video.mp4` is the web cut of the branch video (open house welcome removed).

## Placeholders to fill (all in `assets/site.js` → `SITE`)
- Filled: `applyUrl` (KC's Blend link), `branchNmls` (2776190) and `licensedStates` (34 states), both from
  the social media compliance packet. `branchName` stays blank (branch naming is city-free).
- Filled 2026-11-03: `phone`, `email`, `address1`/`address2`, `hours` (Mon–Fri 9–5).
- Filled 2026-11-03: `privacyUrl`, terms, disclosures and licenses links, plus the corporate footer
  disclosures (not-a-government-agency, not your current lender, refinance finance charges, AZ license, NY notice),
  all from the villagecapital.com footer.
- `team[]` — 10 entries: name, title, NMLS #, phone, email, photo URL, optional personal apply link
- Footer disclosure text mirrors the corporate site; VCI Compliance / Marketing still signs off before launch

## Before launch
1. Fill the placeholders, set `SITE.draft = false` (removes the banner and dashed outlines).
2. Remove `<meta name="robots" content="noindex">` from each page.
3. Compliance/marketing review of all copy (Reg Z advertising trigger terms, VA/FHA wording).
4. Decide the public URL (custom domain vs. `vci-lindonbranch.web.app/site/`).

Note: Firebase Hosting serves the repo root, so once merged and deployed these pages are reachable
at `/site/` (with the draft banner and `noindex`).
