# UK Market & Business Operations Reference

**Tensile Infrastructure Ltd (pre-incorporation)**
Last updated: April 2026

This document is the definitive internal reference covering the UK market we are targeting, the structural opportunity, and how the business runs, operates, and generates profit. Treat it as a living document — update it when figures change or decisions are made.

---

## 1. The UK Market

### Digital Agencies

IBISWorld puts the number of digital advertising agencies in the UK at **7,723 as of 2026**, growing at 2% year on year. That figure covers advertising-focused agencies specifically. The broader digital services market — web, app, product, UX, and platform agencies — is considerably larger; estimates from Aqueous Digital and Capsule CRM put the total number of agencies across digital disciplines at **20,000–25,000** firms across the UK.

Revenue across digital advertising agencies alone reached **£24.7bn in 2026**, up 6.2% year on year, growing at a compound annual rate of 10.1% over the past five years. The sector is expanding, not contracting.

**The realistic target pool within that total:**

Not all agencies are viable prospects. The right profile is:

- 10–75 employees — large enough to have a meaningful client portfolio, small enough not to have a dedicated internal maintenance resource
- Has shipped at least one live digital product or platform for an external client
- Developers are primarily focused on new client work, not legacy maintenance

That realistic pool is estimated at **3,000–5,000 agencies** across the UK.

**Why agencies are a strong primary target:**

Agencies build things and move on. The sites and platforms they ship are still live, still handling real traffic, and quietly accumulating dependency drift and security exposure. Nobody on the agency's team owns that debt because it is not billable — and it is not interesting. Senior developers resent being pulled off real work to deal with it. Junior developers lack the context. The problem sits until something breaks.

At UK average rates, a senior developer costs around **£300 per day** (£60–70k salary fully loaded with employer NI at 15% above the £5,000 threshold, plus pension). Five days of maintenance work per month is £1,500 — exactly what our retainer costs. The maths are straightforward once you put them in front of the right person.

### Funded Startups

Growth List tracks **5,300+ actively funded UK startups** as of 2026. UK venture capital reached **$23.6bn in 2025**, a 35% increase year on year and the strongest year since 2021. Series B deals grew 23% year on year. The pipeline is healthy and expanding.

**The realistic target pool:**

- Seed or Series A funded — live product, real users, small engineering team
- Software product companies (SaaS, platform, API-driven) rather than hardware or deep tech
- 5–30 person engineering teams focused entirely on product growth

Series C and above are generally out of scope — at that stage, teams have the headcount for dedicated infrastructure engineers. Pre-product seed rounds are too early — there is nothing to maintain yet.

The realistic pool at any given time: **1,000–2,000 UK startups** at the right stage.

**Why startups are a strong secondary target:**

Investors fund startups to build product and grow, not to manage infrastructure. Every sprint a developer spends on dependency upgrades and production maintenance is a sprint not spent on features. A retainer makes the engineering cost of maintenance predictable, removes it from the sprint, and lets founders tell investors that infrastructure is handled. That framing resonates — particularly with founders who are watching burn rate closely.

### Combined Addressable Market

| Segment | Total firms | Realistic prospects |
|---|---|---|
| Digital agencies (10–75 people) | 20,000–25,000 | 3,000–5,000 |
| Funded startups (Seed/Series A, software) | 5,300+ tracked | 1,000–2,000 |
| **Total addressable** | | **4,000–7,000** |

At a maximum capacity of 10–15 retainer clients, we need roughly 0.2% of the addressable pool. The market is not the constraint.

### Why 2026 is a Particularly Good Time

**The IR35 small company threshold expansion** (from 6 April 2026) means the Companies Act definition of a "small company" has expanded — turnover threshold rising from £10.2m to £15m, balance sheet from £5.1m to £7.5m. An estimated 14,000 businesses have been reclassified from medium to small as a result. When a client qualifies as "small", the responsibility for determining IR35 status reverts to the PSC (us), not the client. This removes procurement friction — the client does not need to run a Status Determination Statement process before engaging us.

**Rising employment costs** are making the alternative — hiring — more expensive. Employer NI is now 15% on earnings above £5,000 (increased and threshold lowered from April 2025). National Living Wage has risen significantly. The fully loaded cost of a permanent mid-senior developer is now well over £75,000 per year for most UK employers. A retainer at £18,000 per year is a compelling alternative.

**Umbrella company joint and several liability** legislation (in force 2026) makes end-clients and agencies jointly liable for unpaid PAYE and NI if an umbrella fails. This is pushing clients away from umbrella workers and toward properly structured Ltd company engagements with defined deliverables — exactly what we offer.

---

## 2. The Competition Landscape

There is no direct equivalent in the UK market that combines:
- Fixed-fee pricing
- Maintenance-only scope (no new development)
- B2B focus on agencies and funded startups
- Clear outside-IR35 Ltd structure

**What we compete against in practice:**

- **Doing nothing** — the most common alternative. Maintenance debt just accumulates.
- **Internal developer time** — the most expensive alternative at £300+/day, resented by the people doing it.
- **General freelancers** — available on Toptal, YunoJuno, etc., but they want to build things, not maintain them. Scope creep is the norm, not the exception.
- **Large IT managed service providers** — these exist (and the UK market is worth £15bn+ in 2026) but they target IT infrastructure (devices, networks, helpdesks) not application-layer software maintenance. They are not competitors in our niche.

The competitive advantage is specificity. Most developers — freelance or employed — want to build. By exclusively maintaining, we capture the work that nobody else wants and that clients genuinely need solving.

---

## 3. Running the Business

### Legal Structure

Private Limited Company registered in England and Wales via Companies House. Sole director, sole shareholder (100 ordinary shares at £1 each). SIC Code **62020** (IT consultancy) or **62030** (computer facilities management).

Incorporation fee: **£100** via GOV.UK directly. No intermediary needed.

### Registered Office

71-75 Shelton Street, Covent Garden, London, WC2H 9JQ — provided via 1st Formations All Inclusive package. Mail is scanned and forwarded digitally. Home address is not on the public register.

### IR35 Positioning

We operate **outside IR35** by design. The service is structured around outcomes and deliverables (not hours), with:

- **Right of substitution** — we can send a substitute to perform the work
- **No mutuality of obligation** — neither party is obliged to offer or accept ongoing work beyond the contracted retainer
- **Deliverables-based scope** — the retainer covers defined outputs (monthly update, dependency management, SLA response), not a time commitment
- **Anti-creep scope clause** — any request exceeding 8 continuous hours of development is automatically out of scope

For clients qualifying as small companies (turnover under £15m from April 2026), IR35 status determination is our responsibility, not theirs — which makes onboarding frictionless.

Contract templates should include all four clauses above. Qdos Contractor and Kingsbridge both offer reviewed contractor templates for UK PSCs.

### Professional Indemnity Insurance

**£1m PI insurance is mandatory before engaging any client.** With Jack (developer-focused) and Hiscox are the recommended UK brokers. Estimated cost: £800–£1,500/year depending on turnover declared. This is deductible against corporation tax as a business expense.

Do not start any paid engagement — audit or retainer — without this in place.

### Tools and Operations Stack

| Tool | Purpose | Cost | Status |
|---|---|---|---|
| Google Workspace Starter | Email, calendar, Drive | £5.20/month | Live |
| Linear | Support ticketing (inbound via support@) | Free tier | Live |
| Cal.com | Booking pages (Mon–Fri, 10AM–12PM) | Free tier | Live |
| Monzo Business | Banking | Free/£5/month | Pending incorporation |
| Xero | Accounting and invoicing | ~£16/month | Pending bank account |
| BetterStack | Uptime monitoring for retainer clients | ~£20/month | Not set up |
| Snyk | Vulnerability scanning across client repos | Free tier / paid | Not set up |
| Renovate | Automated dependency update PRs | Free (self-hosted or GitHub App) | Not set up |
| 1Password | Client credential management | ~£4/month | Not set up |
| Dropbox Sign | Contract eSignature | Free tier | Not set up |

Estimated operational overhead at full run rate: **£80–120/month** (not including PI insurance, which is annual).

### Delivering the System Health Audit

Fixed fee: **£500**. Target delivery time: under 3 working days. Tools:

- `npm audit` / `yarn audit` / `pip-audit` — dependency vulnerability scan
- Snyk CLI (`snyk test`) — deeper CVE analysis with remediation paths
- Google Lighthouse CLI — performance and accessibility scoring
- Manual review of `package.json` / `requirements.txt` / dependency files
- Header inspection (curl or browser DevTools) — CSP, HSTS, X-Frame-Options

Deliverable: a 4-page written report using the `Audit-Report-Template.docx`, converted to PDF for delivery. Cover note from `Email-Templates/03-audit-delivery.md`.

### Delivering the Safety Retainer

Fixed fee: **£1,500/month per covered core system**. One covered core system = one named production application or service, plus its datastore and directly supporting infrastructure.

Monthly deliverables:
- Renovate or Dependabot installed in client repo — automated dependency update PRs created on Monday mornings, batching patch/minor together, major versions separate for manual review
- Snyk monitoring active on the repository
- BetterStack uptime monitoring configured
- Monthly written update report (`Monthly-Retainer-Update-Template.docx`) covering uptime, dependencies actioned, security advisories, incidents, and next month
- 8-hour response SLA for critical production breaks during business hours (Monday to Friday, 09:00–17:00 UK time)

Client onboarding uses `Client-Onboarding-Checklist.docx`. Retainer governed by `Retainer-Agreement-Template.docx`.

---

## 4. Profiting from the Business

### Revenue Model

| Product | Price | Frequency |
|---|---|---|
| System Health Audit | £500 | One-off (lead magnet → retainer upsell) |
| Safety Retainer | £1,500/month per system | Recurring MRR |
| Triage Fix | £500 per issue | Ad hoc, non-retainer clients only |

**Revenue milestones:**

| Milestone | MRR | Retainer clients |
|---|---|---|
| Month 3 | £1,500 | 1 |
| Month 6 | £3,000 | 2 |
| Month 12 | £6,000+ | 4+ |
| Sustainable ceiling | £15,000 | 10 |

At 10 retainer clients, annual retainer revenue is **£180,000**. That is roughly the operational ceiling for a sole operator maintaining quality. Above that, the SLA response time becomes difficult to honour without a second pair of hands.

**Audit conversion assumption:** aim for 50%+ of audits converting to retainers. An audit client who does not convert is still a completed £500 engagement and a potential referral source.

### Corporation Tax

- **19%** on taxable profits up to £50,000
- **25%** on taxable profits above £250,000
- **Marginal relief** applies between £50,000 and £250,000 — effective rate tapers between 19% and 25%

At early-stage revenue (under £50k profit), the 19% small profits rate applies. At full capacity (£180k revenue, ~£170k profit before salary), the marginal relief zone applies — expect an effective rate of approximately 24–25%.

All legitimate business expenses reduce taxable profit: PI insurance, accounting software, virtual office, tools, professional development, equipment used exclusively for the business.

### Optimal Profit Extraction (2026/27)

The standard approach for a UK sole director Ltd with no other employees:

**Step 1 — Salary at £12,570/year (personal allowance)**
- No employee income tax or employee NI at this level
- Employer NI: 15% on earnings above £5,000 = 15% × £7,570 = **£1,136/year** employer NI cost to the company
- Salary is deductible against corporation tax, saving approximately £2,388 in CT at 19% (partially offsetting the NI cost)
- Take-home: £12,570 gross = **£1,048/month**

**Step 2 — Remainder as dividends**
- Dividend allowance: **£500 tax-free** in 2026/27
- Basic rate dividend tax: **10.75%** on dividends within the basic rate band (up to £37,700 of total income including salary)
- Higher rate dividend tax: **35.75%** on dividends above the basic rate band
- Additional rate: **39.35%** (unlikely to apply until retainer count is very high)

**Step 3 — Employer pension contributions**
Employer contributions made directly from the company into a personal pension are:
- Fully deductible against corporation tax (saving 19–25% depending on profit level)
- Not subject to NI
- Not subject to dividend or income tax at point of contribution
- Subject to annual allowance (currently £60,000/year)

This is the single most tax-efficient extraction method above the basic rate threshold. At 19% CT, every £1,000 contributed costs the company **£810 net** and builds pension pot at full face value.

**Illustrative take-home at different revenue levels:**

| Annual revenue | Retainers | Est. take-home (salary + dividends) |
|---|---|---|
| £36,000 | 2 | ~£28,000 |
| £72,000 | 4 | ~£52,000 |
| £108,000 | 6 | ~£72,000 |
| £180,000 | 10 | ~£100,000+ |

These are estimates after all taxes (corporation tax, employer NI, dividend tax) assuming salary at £12,570, expenses at ~£5,000/year, and all remaining profit extracted as basic-rate dividends. Pension contributions would reduce personal tax further at higher income levels.

**Work with an accountant.** Xero has an accountant marketplace; many offer fixed monthly fees for Ltd company directors in the £80–150/month range. Worth the cost — the tax optimisation alone pays for it.

### Banking and Accounting

- **Bank:** Monzo Business (chosen — free tier or £5/month for Pro)
- **Accounting:** Xero (chosen — integrates with Monzo, handles recurring retainer invoices, VAT if applicable, payroll for salary)
- **VAT:** Not applicable until turnover exceeds £90,000 (current threshold). At full capacity (10 retainers = £180k), VAT registration will be required. This adds administrative overhead but is recoverable from VAT-registered clients (which most agencies and startups will be).

---

## 5. Key Risks

**IR35 reclassification** — mitigated by contract clauses, outcome-based delivery, and the small company exemption now applying to a broader set of clients. Annual IR35 contract review is good practice.

**Client scope creep** — the anti-creep clause in the retainer agreement addresses this contractually. The harder part is enforcing it consistently. The answer to every feature request is the same: "That is outside the retainer scope. Happy to discuss a separate engagement, but we don't take on new development." Say it calmly and often.

**Single-client dependency** — if one client represents more than 40% of MRR, the business is exposed. Diversify retainer clients across different sectors and codebases.

**SLA breach** — the 8-hour response SLA applies during business hours only (Monday to Friday, 09:00–17:00 UK time). Out-of-hours incidents are not covered. This is explicit in the retainer agreement and onboarding confirmation. The practical risk is a production break reported at, say, 16:45 on a Friday — the clock runs into Monday morning. Clients should understand this at onboarding, not at the point of an incident.

**Reputation** — the business model depends entirely on trust. Agencies are handing over access to live client systems. One serious incident handled poorly ends the business. PI insurance covers financial liability; operational care prevents the incident in the first place.

---

## 6. Sales Funnel Summary

```
Cold outreach / referral / inbound (website)
        ↓
System Health Audit (£500, 72-hour turnaround)
        ↓
Audit delivery call (20 minutes, walk through findings)
        ↓
Safety Retainer proposal (£1,500/month, one covered core system)
        ↓
Contract signed → onboarding checklist → first monthly update
        ↓
Referral to next client
```

The audit is the critical step. It demonstrates competence with zero commitment from the client and makes the retainer conversation straightforward — the findings are the pitch.

---

*Sources: IBISWorld (digital agencies UK 2026) · Growth List (funded UK startups 2026) · Kingsbridge / ContractorUK (IR35 threshold changes 2026) · Glassdoor / Indeed (UK senior developer salaries, March 2026) · HMRC / GOV.UK (IR35 guidance) · Grand View Research (UK managed services market) · Expandys (UK employer costs 2026) · HMRC (corporation tax rates, dividend tax rates 2026/27)*
