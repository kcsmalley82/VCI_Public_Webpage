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

## Pages
| File | What it is |
|---|---|
| `index.html` | Home: hero + quick payment estimate, paths, programs, calculators, why us, steps, team, FAQ |
| `loans.html` | Purchase, VA, FHA, Conventional, Refinance, Cash-Out, First-Time Buyers |
| `calculators.html` | Payment (Conv / FHA MIP / VA funding fee), Affordability, Refinance, Rent vs. Buy, Term comparison |
| `team.html` | Loan officer roster (from `SITE.team`) |
| `apply.html` | Apply options, document checklist, contact |

`assets/site.js` builds the header (mega menu) and footer and holds **every branch fact in one
`SITE` object**. `assets/calc.js` holds the mortgage math (FHA MIP table, UFMIP, VA funding-fee
tiers mirror `quote-lab.html`).

## Placeholders to fill (all in `assets/site.js` → `SITE`)
- Filled: `applyUrl` (KC's Blend link), `branchNmls` (2776190) and `licensedStates` (34 states), both from
  the social media compliance packet. `branchName` stays blank (branch naming is city-free).
- Filled 2026-11-03: `phone`, `email`, `address1`/`address2`, `hours` (Mon–Fri 9–5).
- Filled 2026-11-03: `privacyUrl`, terms, disclosures and licenses links, plus the corporate footer
  disclosures (not-a-government-agency, not your current lender, refinance finance charges, AZ license, NY notice),
  all from the villagecapital.com footer.
- `team[]` — 10 entries: name, title, NMLS #, phone, email, photo URL, optional personal apply link
- Home page client review (`index.html`, "Why work with us") — a real, approved review only
- Footer disclosure text mirrors the corporate site; VCI Compliance / Marketing still signs off before launch

## Before launch
1. Fill the placeholders, set `SITE.draft = false` (removes the banner and dashed outlines).
2. Remove `<meta name="robots" content="noindex">` from each page.
3. Compliance/marketing review of all copy (Reg Z advertising trigger terms, VA/FHA wording).
4. Decide the public URL (custom domain vs. `vci-lindonbranch.web.app/site/`).

Note: Firebase Hosting serves the repo root, so once merged and deployed these pages are reachable
at `/site/` (with the draft banner and `noindex`).
