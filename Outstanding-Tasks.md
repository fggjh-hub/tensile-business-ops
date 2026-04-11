# Tensile Infrastructure — Outstanding Tasks

**Company No.** 17139591 · **Last updated:** April 2026

---

## Do this week

**PI Insurance**
Get quotes from both, pick one, pay. This is the hard blocker — no client engagement until it's in place.
- [ ] Get quote from [With Jack](https://withjack.co.uk) — built for freelance developers, simplest process
- [ ] Get quote from [Qdos](https://www.goqdos.com/insurance/professional-indemnity) — contractor specialist, also offers IR35 cover
- [ ] Select policy, pay annually (£300–£600 expected at current turnover), file confirmation
- [ ] Save policy documents to Google Drive

**Xero** — ✓ done (11 April 2026)
- [x] Activated via Monzo Business app
- [x] Monzo Business bank feed connected
- [x] Company details entered
- [x] VAT set to: not registered
- [x] Retainer invoice template created (£1,500/month, due 1st)
- [x] Audit invoice template created (£500, due on receipt)
- [x] Stripe connected for card payments

**Flip the website live**
Once PI insurance is confirmed, the site is ready. One line of code to change.
- [ ] Open `tensile-infrastructure/src/app/page.js`
- [ ] Change `const COMING_SOON = true` to `const COMING_SOON = false`
- [ ] Commit and push to `main` — GitHub Actions will build and deploy automatically

---

## Do within 2 months (before first salary payment)

**PAYE Registration**
No rush until you're within 2 months of paying yourself. When the time comes, complete the link in your 1st Formations portal.
- [ ] Complete PAYE registration via 1st Formations link when approaching first payroll
- [ ] Wait for PAYE reference number (arrives digitally via 1st Formations mail forwarding)
- [ ] Enter PAYE reference into Xero
- [ ] Set up director's salary in Xero payroll: £12,570/year (£1,047.50/month)

---

## Skip for now

**VAT Registration** — not required until turnover reaches £90,000. Do not register early.

---

## Do before first retainer client signs

These don't need to be in place for an audit, but must be ready before a retainer starts.

- [ ] **Dropbox Sign** — eSignature for retainer agreements. Free tier is sufficient. [dropbox.com/sign](https://www.dropbox.com/sign)
- [ ] **1Password** — credential management for client repo/server access. ~£4/month. [1password.com](https://1password.com)
- [ ] **Renovate** — automated dependency update PRs. Install as GitHub/GitLab app on client repos during onboarding. [docs.renovatebot.com](https://docs.renovatebot.com)

---

## Ongoing — watch for these

- [ ] **PAYE reference number** — arriving by post to Shelton Street, forwarded digitally by 1st Formations. Check portal.
- [ ] **Confirmation Statement** — due annually from Companies House (first one due April 2027). 1st Formations company secretary service handles this.
- [ ] **Corporation Tax registration** — HMRC will write to the registered address within ~3 months of incorporation. File the CT41G notice promptly.

---

## Done ✓

- [x] Company registered — Tensile Infrastructure Limited, No. 17139591
- [x] Registered office — 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ (1st Formations)
- [x] Monzo Business account — open and active
- [x] Google Workspace — live (jack@, hello@, support@)
- [x] Linear — live, connected to support@
- [x] Cal.com — live, discovery call window Mon–Fri 10:00–12:00 UK (SLA business hours are separate, Mon–Fri 09:00–17:00)
- [x] Website built — tensileinfrastructure.co.uk (coming soon mode, ready to flip)
- [x] GitHub repos — `fggjh-hub/tensile-infrastructure` (website) and `fggjh-hub/tensile-business-ops` (docs/templates)
- [x] CI/CD — GitHub Actions auto-builds and deploys website to Cloudflare Pages on push to `main`
- [x] BetterStack — live, status page at status.tensileinfrastructure.co.uk
- [x] Snyk — live, monitoring tensile-infrastructure repo, automatic fix PRs enabled (first CVE already patched: next@16.2.2 → 16.2.3)
- [x] All operational documents created (audit runbook, report template, retainer agreement, onboarding checklist, monthly update template)
- [x] All email templates created
- [x] PAYE registration initiated via 1st Formations (reference pending)
- [x] Xero activated, Monzo feed connected, invoice templates built, Stripe connected (11 April 2026)
- [x] ICO registration submitted (10 April 2026 — awaiting confirmation)
- [x] Cal.com discovery-call window settled: Mon–Fri 10:00–12:00 UK
