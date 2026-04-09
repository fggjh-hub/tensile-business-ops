# Session Context — Tensile Infrastructure

Read this before starting any work in this workspace. It captures the decisions, standards, and current state established across prior sessions so you can continue without re-litigating things already settled.

---

## The Business

**Tensile Infrastructure Limited** is a UK Ltd company providing software maintenance services to digital agencies and funded startups. The core philosophy is narrow and deliberate: we maintain existing software, we do not build new things.

Two services only:
- **System Health Audit** — £500 fixed. Codebase review delivered as a 4-page written report within 72 hours.
- **Safety Retainer** — £1,500/month per covered core system. Dependency upgrades, security patching, uptime monitoring, monthly reporting, and an 8-hour response SLA for critical production breaks during business hours (Monday to Friday, 09:00–17:00 UK time). Out-of-hours incidents are not covered.

A **covered core system** means one named production application or service, plus the datastore and infrastructure directly supporting it. Separate apps, admin portals, marketing sites, APIs, worker services, and mobile apps are separate systems unless explicitly listed and billed.

The sales funnel is: Audit → upsell to Retainer. The Audit is the lead magnet.

**Owner:** JW (`j.wilding97@gmail.com`)
**Contact email:** `hello@tensileinfrastructure.co.uk`
**Domain:** `tensileinfrastructure.co.uk`

For full business detail, read: `Business-Plan.md`, `Extra-Context.md`, `UK-Market-and-Operations-Reference.md`, `Action-Plan-2026.md`

---

## Company Registration

**Status: Incorporated** ✓

| Detail | Value |
|--------|-------|
| Legal name | Tensile Infrastructure Limited |
| Company number | 17139591 |
| Registered address | 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ |
| Registered agent | 1st Formations (company secretary, mail forwarding) |
| SIC code | 62020 — IT Consultancy |
| Incorporated | April 2026 |
| Director | Jack Wilding |
| Shares | 100 ordinary shares @ £1 each, 100% held by director |
| Confirmation Statement due | April 2027 (1st Formations handles) |

**Pending from HMRC:**
- PAYE reference number (arriving via 1st Formations portal — check periodically)
- CT41G Corporation Tax notice (arrives ~3 months post-incorporation)

---

## The Website

**Location:** `tensile-infrastructure/` — Next.js 16 App Router, static export (`output: 'export'`).
**Key files:** `src/app/page.js`, `src/app/page.module.css`, `src/app/globals.css`, `src/app/layout.js`
**Deployment:** Cloudflare Pages via GitHub Actions CI/CD. Pushes to `main` on GitHub trigger: `npm ci` → `npm run build` → `wrangler pages deploy ./out`. Workflow file: `.github/workflows/deploy.yml`.
**Repository:** `github.com/fggjh-hub/tensile-infrastructure` (private)

**Coming soon toggle:** `const COMING_SOON` in `page.js` — set to `true` to show coming soon, `false` for the full site. Currently showing coming soon.

**Design:** Light theme. Warm off-white (`#f8f7f4`) base, white cards with a 1px border, deep navy (`#0d1f3c`) accent used sparingly for buttons and the footer section only.

**Page structure (top to bottom):**
1. Sticky nav — logo, Services & Pricing, Get in touch
2. Hero — left-aligned, single column
3. Trust bar — UK Ltd · £1m PI Insured · Outside IR35 · Fixed fees · No new development
4. Problem section — two-column, prose only
5. How it works — two numbered steps (01 Audit, 02 Retainer)
6. Services — two cards side by side
7. Footer CTA — dark navy background, the one dark element on the page
8. Footer — logo, nav links, legal (Company No. 17139591)

**What must happen before go-live:**
- PI insurance confirmed (hard blocker)
- Privacy notice (`/privacy` route) built and linked in footer
- Change `COMING_SOON = false`, commit and push to `main` (GitHub Actions handles build and deploy automatically)

---

## Design Standards

These were established through iteration and should be treated as fixed decisions, not suggestions.

**Never use:**
- `text-transform: uppercase` with `letter-spacing` — the single most reliable AI design tell
- Glassmorphism (`backdrop-filter: blur`, semi-transparent surfaces, glowing borders)
- Gradient text (`-webkit-background-clip: text`)
- Pulsing or glowing button animations
- Pill/badge elements above hero headings (the "eyebrow label" pattern)
- Icon background boxes (coloured rounded squares behind SVG icons) — use plain SVGs only
- Cyan or teal as an accent colour
- Radial gradient background blobs
- Three equal cards in a symmetrical grid as the default layout choice

**Typography:**
- No `text-transform: uppercase` on labels or section markers
- No aggressive `letter-spacing` — 0 or `-0.025em` on headings only
- Section labels are plain, small, sentence-case, regular weight

**Layout:**
- Hero is left-aligned, not centred
- The dark footer CTA section is the only dark element on an otherwise light page

---

## Copy Standards

**Voice:** Direct, calm, written by a senior developer who doesn't need to impress anyone. Not startup-y, not corporate.

**Never use:**
- "Proactive", "Actionable", "Low-friction", "Ruthless [anything]"
- "Comprehensive diagnostic" — clinical/AI phrasing
- "Context-switch" as a verb in client-facing copy
- "We exist for exactly this gap" — recognisable AI sentence construction
- "Delivered silently while your team ships" — startup speak
- "Discovery decks" — agency jargon
- Any CTA phrasing nobody would say out loud (e.g. "Book a triage call")
- "Verified Outside IR35" — "Verified" sounds like a badge, not a fact

**Do use:**
- Short sentences. Plain words.
- Prices mentioned naturally in prose, not as separate styled elements
- "We should talk" over "Book a call"
- "Drop us a line" over "Reach out"
- Copy that assumes the reader has been paying attention

---

## Infrastructure & Tooling Status

| Tool | Purpose | Status |
|------|---------|--------|
| Google Workspace | Email, calendar, Drive | Live — jack@, hello@, support@ |
| Cloudflare | DNS, domain, Pages hosting | Live — SPF/DKIM/DMARC configured |
| Linear | Support ticketing | Live — support@ connected |
| Cal.com | Booking pages | Live — Mon–Fri 10:00–12:00 |
| Monzo Business | Business banking | Live |
| Xero | Accounting and invoicing | Not yet activated (use Monzo 6-month offer) |
| Dropbox Sign | Contract eSignature | Not set up |
| 1Password | Credential management | Not set up |
| BetterStack | Uptime monitoring | Live — status page at status.tensileinfrastructure.co.uk |
| Snyk | Vulnerability scanning | Live — connected to GitHub repo, monitoring tensile-infrastructure |
| Renovate | Dependency update PRs | Not set up |
| GitHub | Source control & CI/CD | Live — tensile-infrastructure (website) and tensile-business-ops (docs/templates) repos |

**Devices:**
- Mac: dedicated Chrome profile for Tensile (signed in as jack@)
- iPhone: Gmail + Google Calendar, jack@ only, Work Focus configured
- iPad: dedicated home screen page with Tensile apps, Work Focus configured

---

## Brand Assets

All logo files are in the workspace root. Left-aligned wordmark, clean sans-serif.

| File | Use |
|------|-----|
| `TI - Light Transparent Logo.png` | Xero invoices, Cal.com, document headers, email signatures |
| `TI - Dark Logo.png` | Slack workspace icon, dark backgrounds |
| `TI - LIGHT Transparent SVG.svg` | Website (`/public/logo.svg`) |
| `TI - DARK SVG.svg` / `TI - LIGHT SVG.svg` | Print, future use |

Brand colours: `#0d1f3c` (navy), `#f8f7f4` (off-white/cream)

---

## Operational Documents

All created and filed in the workspace root. Do not recreate — edit in place.

| Document | Purpose |
|----------|---------|
| `Audit-Process-Runbook.docx` | Internal 5-page runbook — full audit process, tool matrix, severity classification, report writing guide |
| `Audit-Report-Template.docx` | 4-page client-facing audit report template |
| `Monthly-Retainer-Update-Template.docx` | 2-page monthly client update template |
| `Client-Onboarding-Checklist.docx` | 2-page internal retainer client onboarding checklist |
| `Retainer-Agreement-Template.docx` | 3-page B2B retainer services agreement — Company No. 17139591, Shelton Street address |

---

## Email Templates

Filed in `Email-Templates/`. Plain text, ready to adapt per client.

| File | Use |
|------|-----|
| `01-cold-outreach.md` | First contact with a target agency or startup |
| `02-warm-outreach.md` | Follow-up or referral-based first contact |
| `03-audit-delivery.md` | Cover note sent with audit report |
| `04-post-audit-followup.md` | Follow-up to audit client who hasn't converted |
| `05-retainer-onboarding-confirmation.md` | Sent when retainer client is fully onboarded |
| `06-monthly-update-cover-note.md` | Email body when sending monthly retainer update |

---

## Workspace File Map

```
RetainerBusiness/
├── CONTEXT.md                              ← this file — read first every session
├── AI-SESSION-CONTEXT.md                   ← portable context for any AI on any device
├── Business-Plan.md                        ← full business plan
├── Extra-Context.md                        ← IR35 / tax / 2026 UK market context
├── UK-Market-and-Operations-Reference.md   ← UK market sizing, operations, profit strategy
├── Action-Plan-2026.md                     ← phased 12-month execution plan
├── Outstanding-Tasks.md                    ← current to-do list by timeline
├── App-Specific-Setup-Checklist.md         ← per-app setup checklist (pre-launch)
├── TI - Light Logo.png / TI - Light Transparent Logo.png
├── TI - Dark Logo.png / TI - Dark Transparent Logo.png
├── TI - LIGHT SVG.svg / TI - LIGHT Transparent SVG.svg
├── TI - DARK SVG.svg / TI - DARK Transparent SVG.svg
├── Audit-Process-Runbook.docx
├── Audit-Report-Template.docx
├── Monthly-Retainer-Update-Template.docx
├── Client-Onboarding-Checklist.docx
├── Retainer-Agreement-Template.docx
├── Email-Templates/                        ← 01–06 email templates
├── Action-Plan-Stage-Docs/                 ← detailed docs per action plan phase
├── .gitignore                              ← excludes tensile-infrastructure/, node_modules/, tmp/, .DS_Store
├── legacy-client-mock/                     ← Harbour Digital mock audit (demo purposes)
└── tensile-infrastructure/                 ← website (Next.js 16 App Router) — own Git repo
    ├── .github/workflows/deploy.yml        ← CI/CD: build + deploy to Cloudflare Pages on push to main
    ├── public/logo.svg                     ← TI light transparent SVG (for website use)
    └── src/app/
        ├── page.js                         ← all page content, COMING_SOON toggle
        ├── page.module.css                 ← all component styles
        ├── globals.css                     ← base styles and CSS variables
        └── layout.js                       ← root layout, metadata, lang=en-GB
```
