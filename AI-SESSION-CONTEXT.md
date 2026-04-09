# Tensile Infrastructure — AI Session Context

Paste this file at the start of any AI conversation (Claude, Gemini, ChatGPT, etc.) to give the model full context on this business without having to re-explain from scratch. Keep it up to date as the business evolves.

**Last updated:** April 2026

---

## Who I Am

I'm Jack Wilding (JW), sole director and owner of **Tensile Infrastructure Limited**, a UK Ltd company I'm building to provide software maintenance services to digital agencies and funded startups across the UK. I am based in Lancashire.

My background is as a senior software developer. This business is deliberately narrow — I maintain existing software, I do not build new features or take on new development work.

---

## The Business

**Company:** Tensile Infrastructure Limited
**Company Number:** 17139591
**Registered Address:** 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ (1st Formations virtual office)
**Incorporated:** April 2026
**SIC Code:** 62020 — IT Consultancy
**Website:** tensileinfrastructure.co.uk (currently showing coming soon page)
**Contact:** hello@tensileinfrastructure.co.uk
**Booking:** cal.com/tensileinfrastructure (Mon–Fri 10:00–12:00)

**Target clients:** UK digital agencies (typically 5–50 staff) and funded startups with existing backend systems that need ongoing maintenance but don't want to use their developers for it.

---

## Services — Two Only

### 1. System Health Audit — £500 (fixed)
A full review of one codebase delivered as a written report within 72 hours. Covers: dependency currency, known CVEs, runtime health, build/deploy pipeline, secret management, code quality signals. This is the lead magnet — most clients start here before converting to a retainer.

### 2. Safety Retainer — £1,500/month (fixed, per covered system)
Ongoing maintenance of one named production system. Includes:
- Dependency upgrades and security patching
- Uptime monitoring (BetterStack)
- Vulnerability monitoring (Snyk)
- Automated dependency update PRs (Renovate)
- Monthly written update (2-page report)
- **8-hour response SLA for critical production breaks, during business hours only (Monday to Friday, 09:00–17:00 UK time). Out-of-hours incidents are not covered.**

A **covered core system** = one named production application/service plus its datastore and directly supporting infrastructure. Separate admin portals, marketing sites, APIs, worker services, and mobile apps are separate systems, separately billed.

---

## Sales Funnel

Audit → upsell to Retainer. Cold outreach → discovery call → audit → monthly retainer. The audit report itself is the pitch deck. A good audit finding is the best retainer upsell.

**Positioning:** We save agencies from using their own developers on maintenance. A senior UK developer costs ~£300/day fully loaded. Five days of maintenance per month costs roughly what the retainer costs — except our clients keep their developers focused on building.

---

## Key Business Decisions (Settled — Do Not Re-Litigate)

- **No new development, ever.** This is a hard constraint, not a preference.
- **Fixed fees only.** No hourly billing, no day rates.
- **Outside IR35** — structured as a deliverables-based B2B contract, not labour substitution. UK small company exemption applies to most target clients (reclassified from April 2026).
- **No VAT registration** until turnover hits £90,000.
- **Director salary strategy:** £12,570/year (at personal allowance), extract remaining profit as dividends.
- **One covered system per retainer.** Additional systems are additional retainers.
- **SLA applies during business hours only** (09:00–17:00 Mon–Fri). This is explicit in all contracts and templates.

---

## Financial Structure

- **Bank:** Monzo Business
- **Accounting:** Xero (6-month free trial via Monzo — not yet activated)
- **Corporation Tax:** 19% on profits up to £50k (small profits rate). No marginal relief needed at current projected scale.
- **Profit extraction:** Director salary £12,570/year + dividends from retained profit. Employer pension contributions from the Ltd company are the most tax-efficient extraction above this.
- **Dividend tax from April 2026:** Basic rate 10.75%, higher rate 35.75%, £500 tax-free allowance.
- **PAYE:** Registration initiated via 1st Formations — reference pending. Not needed until first salary payment.

---

## Current Setup Status

**Done:**
- Company registered (No. 17139591)
- Registered office (71-75 Shelton Street, 1st Formations)
- Monzo Business account open and active
- Google Workspace live (jack@, hello@, support@tensileinfrastructure.co.uk)
- Cloudflare DNS configured (MX, SPF, DKIM, DMARC)
- Linear set up and connected to support@ for auto ticket creation
- Cal.com live, Mon–Fri 10:00–12:00 booking slots
- Website built (Next.js 16, static export, Cloudflare Pages) — in coming soon mode
- GitHub repos set up: `fggjh-hub/tensile-infrastructure` (website) and `fggjh-hub/tensile-business-ops` (docs/templates), both private
- CI/CD pipeline live: GitHub Actions auto-builds and deploys to Cloudflare Pages on push to `main`
- BetterStack live with public status page at status.tensileinfrastructure.co.uk
- Snyk live and monitoring the tensile-infrastructure repo — GitHub integration enabled, automatic fix PRs active
- All operational documents created (see Document Inventory below)
- All email templates created
- Logo created (wordmark, 8 variants — PNG/SVG, light/dark, solid/transparent)

**To do this week (hard blockers before going live):**
- PI insurance: get quotes from With Jack (withjack.co.uk) and Qdos (goqdos.com), select £1m PI policy, pay annually (expected £300–£600)
- Xero: activate via Monzo Business app 6-month offer, connect bank feed, set up invoice templates
- Flip website live: change COMING_SOON flag in page.js, commit and push to `main` (CI/CD handles the rest)

**To do before first retainer client signs:**
- Dropbox Sign (eSignature for retainer agreements)
- 1Password (credential management)
- Renovate (dependency PRs — install per client repo during onboarding)

**To do within 2 months:**
- PAYE registration (via 1st Formations link — do within 2 months of first salary payment)

**Ongoing watch items:**
- PAYE reference number (arriving digitally via 1st Formations portal)
- CT41G Corporation Tax notice from HMRC (~3 months post-incorporation)
- Confirmation Statement (due April 2027, handled by 1st Formations)

---

## Document Inventory

All documents exist as finished, ready-to-use templates.

| Document | Description |
|----------|-------------|
| Audit-Process-Runbook.docx | Internal 5-page runbook — full audit process, tool matrix, severity classification |
| Audit-Report-Template.docx | 4-page client-facing audit report template |
| Monthly-Retainer-Update-Template.docx | 2-page monthly update template for retainer clients |
| Client-Onboarding-Checklist.docx | 2-page internal onboarding checklist for new retainer clients |
| Retainer-Agreement-Template.docx | 3-page B2B retainer contract (includes IR35, liability, exclusions, Schedule A) |
| Email Templates 01–06 | Cold outreach, warm outreach, audit delivery, post-audit follow-up, retainer confirmation, monthly update cover note |

---

## Brand & Voice

**Colours:** Navy `#0d1f3c`, off-white/cream `#f8f7f4`
**Logo:** Left-aligned wordmark "Tensile Infrastructure" in clean sans-serif. 8 variants available (PNG/SVG, light/dark, solid/transparent).

**Voice:** Direct, calm, written by a senior developer who doesn't need to impress anyone. Not startup-y, not corporate.

**Never use in copy:** "Proactive", "Actionable", "Low-friction", "Ruthless", "Comprehensive diagnostic", "Context-switch" (as verb in client copy), "Discovery decks", CTA phrasing nobody would say out loud.

**Always:** Short sentences. Plain words. Prices mentioned naturally. Assume the reader has been paying attention.

---

## Tech Stack (Website)

- **Framework:** Next.js 16 App Router, static export
- **Styling:** CSS Modules (component-scoped)
- **Hosting:** Cloudflare Pages (auto-deployed via GitHub Actions CI/CD on push to `main`)
- **Repository:** `github.com/fggjh-hub/tensile-infrastructure` (private)
- **CI/CD:** `.github/workflows/deploy.yml` — `npm ci` → `npm run build` → `wrangler pages deploy ./out`
- **Coming soon toggle:** Single constant `const COMING_SOON` in `page.js` — `true` = coming soon, `false` = live site

---

## Operational Rules

- Business hours: Monday to Friday, 09:00–17:00 UK time
- SLA: 8-hour response for critical production breaks **during business hours only**. Out-of-hours incidents are explicitly not covered in contracts and all client-facing documents.
- IR35 status: Outside IR35. All retainer agreements are structured as deliverables-based B2B contracts.
- Client communication: email via hello@ and support@ (which feeds Linear). No personal email for business.
- All credentials to be stored in 1Password (not set up yet — use browser autofill as interim only).

---

## What to Avoid Suggesting

- New development services or scope creep into feature work
- Hourly billing or day rates
- VAT registration before £90k threshold
- Registering as a sole trader (already a Ltd company)
- Any IR35-risky contract language (time-based, substitution-prohibited, day rate)
- Targeting large enterprises (IR35 compliance burden, slow procurement)

---

## Google Drive Structure (for reference)

```
My Drive/
├── Templates/                    ← .docx templates for client work
├── Clients/
│   └── _Template/                ← copy per client when they sign
│       ├── Agreement/
│       ├── Audit/
│       ├── Monthly Updates/
│       └── Working Notes/
├── Admin/
│   ├── Agreements/               ← signed retainer agreements
│   ├── Insurance/                ← PI certificate when confirmed
│   └── Invoices/                 ← issued invoices
├── Branding/
│   └── Logos/                    ← all 8 logo variants
└── Business Registration Docs/   ← Companies House, 1st Formations docs
```


----
Xero payment advice

Account name: Tensile Infrastructure Limited
Sort code: your Monzo Business sort code
Account number: your Monzo Business account number