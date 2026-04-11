# Pre-Outreach App & Infrastructure Setup Checklist

Every piece of software in your stack needs to be configured securely, branded consistently, and ready for actual client traffic.

**The gate:** PI Insurance must be confirmed before the website goes live or any outreach begins. Everything else can run in parallel with getting the quote.

---

## 0. Canva Pro — Logo & Brand Assets
*Do this first. Your logo is required by Xero, Cal.com, Slack, and all document headers before you can brand anything else.*

- [x] **Create the primary wordmark:** "Tensile Infrastructure" in a clean sans-serif (Inter, DM Sans, or similar). Keep it minimal and technical — no clip art or icons needed.
- [x] **Export two colour variants:**
  - **Light variant** — navy `#0d1f3c` text on transparent/white background (for Xero invoices, PDFs, printed documents)
  - **Dark variant** — off-white `#f8f7f4` text on navy `#0d1f3c` background (for website header, Slack icon, dark contexts)
- [x] **Export formats:**
  - PNG at 2× resolution (minimum 800px wide) — for Xero, Slack, Cal.com
  - SVG — for the website and any future print use
- [x] **Save all variants** to Google Drive under `03-Admin/Brand/` once Drive is set up.

---

## 1. Cloudflare — DNS & Deployment Verification
*Your domain registrar, DNS host, and website deployment platform. Sort DNS before any email goes out.*

- [ ] **SPF record:** Verify `v=spf1 include:_spf.google.com ~all` is present as a TXT record on `tensileinfrastructure.co.uk`. Check at [mxtoolbox.com/spf](https://mxtoolbox.com/spf.aspx).
- [ ] **DKIM:** In Google Workspace Admin → Apps → Gmail → Authenticate email, generate the DKIM key. Add the resulting TXT record to Cloudflare DNS. Verify propagation at [mxtoolbox.com/dkim](https://mxtoolbox.com/dkim.aspx).
- [ ] **DMARC:** Add a TXT record for `_dmarc.tensileinfrastructure.co.uk` with value: `v=DMARC1; p=quarantine; rua=mailto:jack@tensileinfrastructure.co.uk`. Check at [mxtoolbox.com/dmarc](https://mxtoolbox.com/dmarc.aspx).
- [ ] **MX records:** Confirm Google Workspace MX records are correctly set (email is live so these should be fine — just verify once as part of this pass).
- [ ] **Custom domain binding:** Confirm `tensileinfrastructure.co.uk` is bound to the Cloudflare Pages project (not only the `*.pages.dev` subdomain).
- [ ] **CI/CD pre-flight:** Before the final website flip, push a test commit to `main` and confirm GitHub Actions builds and deploys successfully (check the Actions tab on GitHub).

---

## 2. Xero & Financials
*Your accounting and invoicing engine.*

- [ ] **Activate the account:** Use the 6-month free trial link via your Monzo Business app (better value than going to Xero directly).
- [ ] **Connect bank feed:** Link your Monzo Business account so transactions sync automatically.
- [ ] **Company profile — set all of the following:**
  - Full company name: Tensile Infrastructure Limited
  - Company Number: 17139591
  - Registered Address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
- [ ] **VAT status:** Explicitly set to "Not Registered" (until turnover hits £90,000).
- [ ] **Branding:** Upload the light variant of your logo (navy on white/transparent PNG). Generate a test invoice PDF and verify it renders cleanly.
- [ ] **Invoice line items — create both:**
  - **System Health Audit** — £500.00, no VAT, payment due on receipt (or 7 days).
  - **Safety Retainer** — £1,500.00/month per covered core system, no VAT, recurring, due on the 1st of the month.
- [ ] **Payment details:** Add your Monzo Business sort code and account number to the invoice footer template.
- [ ] **Test run:** Generate a draft invoice to yourself. Download the PDF. Verify logo, payment details, and all line items look professional before anything goes to a real client.

---

## 3. Google Workspace
*Your communication and storage hub.*

- [ ] **Email signatures:** Configure for `jack@`, `hello@`, and `support@`. Each should include: full name, Director, Tensile Infrastructure Limited, Company No. 17139591.
- [ ] **DKIM activation:** Done in Google Admin first (see Cloudflare section), then the TXT record is added in Cloudflare DNS.
- [ ] **Mail filters/aliases:** Verify emails to `hello@` and `support@` arrive correctly and clear spam filters. Send a test from a personal Gmail to each address.
- [ ] **Google Drive folder structure — create these:**
  - `01-Clients/` — create a subfolder per client when they sign
  - `02-Templates/` — upload your final `.docx` templates here for easy duplication
  - `03-Admin/` — legal, insurance, Companies House correspondence, brand assets
  - `04-Finance/` — receipts, Xero PDF exports, Monzo statements
- [ ] **Upload workspace documents to Drive — copy these into `02-Templates/`:**
  - `Retainer-Agreement-Template.docx`
  - `Client-Onboarding-Checklist.docx`
  - `Monthly-Retainer-Update-Template.docx`
- [ ] **Upload admin documents to `03-Admin/`:**
  - `Outstanding-Tasks.md`
  - `App-Specific-Setup-Checklist.md`
  - `UK-Market-and-Operations-Reference.md`
  - `Business-Plan.md`
- [ ] **Notification schedule:** Set mobile and tablet Work Focus to isolate Google Workspace notifications to 09:00–17:00 Mon–Fri.

---

## 4. 1st Formations / Companies House
*Your registered agent and company secretary. Mostly watch-and-wait from here.*

- [ ] **PAYE registration:** Complete the PAYE link in your 1st Formations portal within 2 months of your first planned salary payment. No immediate rush.
- [ ] **VAT registration:** Skip entirely — not required until turnover reaches £90,000.
- [ ] **Watch for PAYE reference number:** Arrives digitally via 1st Formations mail forwarding once HMRC processes the registration. Check the portal periodically.
- [ ] **Watch for CT41G:** HMRC Corporation Tax registration notice arrives at the registered address within ~3 months of incorporation. File it promptly.
- [ ] **Confirmation Statement:** Due annually (first one due April 2027). 1st Formations company secretary service handles this.
- [ ] **Save all correspondence** from 1st Formations and Companies House to Google Drive under `03-Admin/Companies-House/`.

---

## 5. With Jack / Qdos — PI Insurance
*Hard blocker. Nothing goes live and no outreach begins until this certificate is in hand.*

- [ ] **Get a quote from [With Jack](https://withjack.co.uk)** — built specifically for freelance developers, fastest process.
- [ ] **Get a quote from [Qdos](https://www.goqdos.com/insurance/professional-indemnity)** — contractor specialist, also offers IR35 cover for later.
- [ ] **Select a policy:** £1m PI cover. Expected annual cost: £300–£600 at current projected turnover.
- [ ] **Pay annually** (better value than monthly).
- [ ] **Save the PDF certificate** to Google Drive under `03-Admin/Insurance/`.
- [ ] **Note the renewal date** in Google Calendar with a 30-day advance reminder.

---

## 6. Cal.com
*Your booking and meeting intake platform.*

- [x] **Calendar integration:** Connected to `jack@tensileinfrastructure.co.uk` Google Calendar.
- [x] **Availability:** Restricted to Mon–Fri 10:00–12:00.
- [ ] **Meeting buffers:** Add a 15-minute buffer before and after each meeting.
- [ ] **Event types — create both:**
  - **Discovery / Intro** — 30 minutes. Add intake question: "Briefly, what does your current backend or infrastructure stack look like?"
  - **Audit Review** — 20 minutes.
- [ ] **Branding:** Upload company logo. Set brand colours to match the website (`#f8f7f4` background / `#0d1f3c` text).
- [ ] **Test run:** Book a dummy appointment using your personal email. Verify the confirmation email and calendar invite both look professional.

---

## 7. Linear
*Your support desk and ticketing pipeline.*

- [ ] **Email integration:** Confirm `support@tensileinfrastructure.co.uk` is mapped so inbound emails automatically create Linear issues.
- [ ] **Workflow states:** Configure board columns: `Inbox` → `In Progress` → `Blocked (Client)` → `Done`.
- [ ] **Issue template:** Create a default internal template for conducting audits (steps: access review, Snyk scan, dependency check, runtime health check, report draft).
- [ ] **Notifications:** Restrict email/push notifications to business hours only.
- [ ] **Test run:** Send an email from your personal Gmail to `support@tensileinfrastructure.co.uk`. Confirm it appears in the Linear Inbox queue within a few minutes.

---

## 8. Slack
*Your internal comms hub and future client portal.*

- [ ] **Workspace name:** Set to Tensile Infrastructure.
- [ ] **Workspace icon:** Upload the dark variant of the company logo.
- [ ] **Channels — create these:**
  - `#general`
  - `#active-incidents` — for tracking SLA-level production breaks
  - `#inbound-tickets` — connect Linear integration to surface new tickets here automatically
- [ ] **Slack Connect:** Confirm your plan permits external guests or Slack Connect channels (this is how you loop agency clients in later without giving them a full workspace seat).
- [ ] **Notification schedule:** Set Slack to silent outside 09:00–17:00 Mon–Fri.

---

## 9. Dropbox Sign
*eSignature for retainer agreements. Required before any retainer client signs — not needed for audits.*

- [ ] **Create account** at [dropbox.com/sign](https://www.dropbox.com/sign). Free tier (3 sends/month) is sufficient to start.
- [ ] **Upload the Retainer Agreement Template** from `02-Templates/` in Google Drive.
- [ ] **Configure signature fields:** Client name, client title, client company, date, signature. Your own director signature and date fields should also be pre-positioned.
- [ ] **Test run:** Send the template to your personal email address. Complete a dummy signing to verify the full workflow before you need it for a real client.

---

## 10. 1Password
*Credential management for all service logins and future client access.*

- [ ] **Create account** at [1password.com](https://1password.com). Individual plan (~£36/year).
- [ ] **Create two vaults:**
  - `Tensile — Internal` — your own service logins (Xero, Cloudflare, Linear, Slack, etc.)
  - `Tensile — Clients` — client-specific credentials, one entry per client as they onboard
- [ ] **Browser extension:** Install in your primary browser.
- [ ] **Emergency kit:** Download and store the PDF Emergency Kit somewhere safe and offline.
- [ ] **Migration:** Move any existing business-related passwords out of browser autofill and into 1Password.

---

## 11. BetterStack ✓
*Uptime monitoring and incident alerting for client systems.*

- [x] **Account created** at [betterstack.com](https://betterstack.com).
- [x] **Status page live** at [status.tensileinfrastructure.co.uk](https://status.tensileinfrastructure.co.uk).
- [ ] **Alert contact:** Set your primary alert email to `support@tensileinfrastructure.co.uk` (which feeds into Linear's Inbox queue).
- [ ] **Monitor template:** Prepare a standard HTTP monitor config to replicate per client during onboarding — URL, 1-minute check interval, alert on 2 consecutive failures.
- [ ] **Slack integration:** Connect BetterStack alerts to `#active-incidents` in Slack.
- [ ] **Note:** Do not create client monitors until a retainer is signed and you have their system access.

---

## 12. Snyk ✓
*Dependency vulnerability scanning. Connected and monitoring the Tensile website.*

- [x] **Account created** at [snyk.io](https://snyk.io).
- [x] **GitHub authorisation:** Snyk connected to `fggjh-hub` GitHub account.
- [x] **Tensile website imported:** `fggjh-hub/tensile-infrastructure` monitored. First CVE (CVE-2026-23869 in next@16.2.2) detected and patched automatically via Snyk fix PR → merged → auto-deployed.
- [x] **Automatic fix PRs enabled.**
- [ ] **Connect client repos** during onboarding once an audit or retainer is agreed and access is authorised.

---

## 13. Renovate
*Automated dependency update pull requests. Install on client repos during onboarding.*

- [ ] **Install the Renovate GitHub App** at [github.com/apps/renovate](https://github.com/apps/renovate). Free for public and private repos.
- [ ] **Prepare a standard `renovate.json` config** to drop into client repos during onboarding:
  ```json
  {
    "extends": ["config:base"],
    "schedule": ["every weekend"],
    "prConcurrentLimit": 3,
    "automerge": false
  }
  ```
- [ ] **Note:** Install on client repos during onboarding only, not before.

---

## 14. LinkedIn & YunoJuno — Outreach Profiles
*Your lead generation presence. Sort after PI insurance is confirmed.*

- [ ] **LinkedIn headline:** Update to something like: "Legacy Code & Infrastructure Stability — keeping production running for digital agencies and funded startups."
- [ ] **LinkedIn bio:** Focus strictly on infrastructure stability and maintenance. Remove or de-emphasise any feature development or full-stack positioning.
- [ ] **YunoJuno profile:** Mirror the same positioning if you intend to use it.
- [ ] **Gmail Templates:** Copy the finalised `Email-Templates/` drafts into Gmail Templates (or a text expander such as Raycast Snippets) so they can be sent instantly without copy-pasting.
- [ ] **Domain warm-up:** Do not send bulk outreach on day one. Start with 5–10 targeted emails per day and ramp gradually to protect sender reputation.

---

## 15. Website — Privacy Notice
*Required under UK GDPR before going live. Cal.com captures name and email at booking.*

- [ ] **Add a `/privacy` route** to the Next.js app with a plain-English notice covering:
  - What data is collected (name and email via the Cal.com booking form)
  - How it is used (scheduling only — not sold or shared with third parties)
  - How to request deletion (email `hello@tensileinfrastructure.co.uk`)
- [ ] **Add a "Privacy" link** in the website footer, alongside the company number.

---

## 16. The Final Website Flip
*Dropping the curtain. Do not proceed until PI Insurance certificate is saved and the privacy notice is live.*

- [ ] **PI Insurance confirmed** — PDF certificate is saved to Google Drive. *(If not, stop here.)*
- [ ] **Privacy notice** — `/privacy` page is built and linked in the footer.
- [ ] **Code change:** Open `tensile-infrastructure/src/app/page.js`, change `const COMING_SOON = true` to `const COMING_SOON = false`.
- [ ] **Deploy:** Commit and push to `main` — GitHub Actions CI/CD handles build and deployment to Cloudflare Pages automatically.
- [ ] **Live QA:**
  - Visit `tensileinfrastructure.co.uk` — confirm the full site loads, not the coming soon page.
  - Click every "Get in touch" / "Book a call" button and verify Cal.com opens correctly.
  - Confirm footer shows "Company No. 17139591" and the registered address.
  - Confirm the `/privacy` link in the footer works.
  - Test on mobile (Safari iOS and Chrome Android if possible).
