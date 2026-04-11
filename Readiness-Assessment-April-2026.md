# Tensile Infrastructure — Pre-Outreach Readiness Assessment

**Prepared:** 10 April 2026
**Company:** Tensile Infrastructure Limited (No. 17139591)
**Stage:** Incorporated · Ops built · Go-to-market not yet live
**Verdict:** Not ready to hit "send" on cold outreach. Five hard blockers and a handful of legal/GTM gaps stand between you and a safe first client email. Realistically you are 7–10 focused working days away from a clean launch.

---

## 1. Overall picture

You have done an unusually thorough job on the foundation and product layers. Company is registered, banking is open, the website is built and deployed (behind a coming-soon flag), and every operational document you need for the first year of trading already exists as a finished template. The IR35 posture in your contracts is genuinely good — I checked the clauses directly (see §4 below) and they would hold up under scrutiny.

Where you are exposed is at the two ends of the pipeline: the legal/insurance wrapper that protects you on first contact with a paying client, and the go-to-market machinery that actually creates those contacts. Everything in the middle is essentially shelf-ready.

You are not far away. But the items that remain are the items that, if skipped, can do real damage — reputational, financial, or regulatory. Do not skip them.

---

## 2. Status snapshot

### Done (verified)

Company and identity: Ltd company incorporated, registered office at 71-75 Shelton Street via 1st Formations, SIC 62020, logo set in eight variants, brand guidelines written.

Financial infrastructure: Monzo Business account open and active. Xero chosen (activation pending via Monzo's six-month offer).

Digital operations: Google Workspace live across jack@, hello@ and support@; Cloudflare DNS with SPF, DKIM and DMARC configured; Linear wired to support@ for auto-ticketing; Cal.com booking live; BetterStack status page at status.tensileinfrastructure.co.uk; Snyk monitoring the marketing site with automatic fix PRs (already patched one CVE — next@16.2.2 → 16.2.3, which is itself a usable proof point).

Website: Next.js 16 static export, deployed to Cloudflare Pages via GitHub Actions CI/CD on push to `main`. Sits behind a single `COMING_SOON` flag in `src/app/page.js`. Copy, pricing and trust bar are finished.

Product and delivery: audit runbook, 4-page audit report template, monthly retainer update template, client onboarding checklist, incident post-mortem template, offboarding checklist, and a full mock audit (Harbour Digital) sitting in `legacy-client-mock/`. You have also already done at least one real dry-run of the full audit workflow.

Contracts: Retainer Agreement Template, Audit Engagement Letter, Data Processing Agreement, and Schedule A amendment form all drafted. I have read the two primary contracts in full and they are strong — see §4.

Email templates: all six (cold, warm, audit delivery, post-audit follow-up, retainer onboarding, monthly update cover) are written.

PAYE registration initiated via 1st Formations (reference pending, not yet blocking).

### Not done (the real to-do list)

Hard legal/compliance blockers:

1. **£1m Professional Indemnity insurance is not in place.** This is your single biggest blocker. Two compounding reasons: (a) your own Audit Engagement Letter at clause 8 warrants in writing that you carry £1m PI — signing that letter without a live policy is a misrepresentation the client could use to void the engagement or sue on; (b) the marketing site's trust bar already states "£1m Professional Indemnity Insured", so flipping `COMING_SOON = false` before the policy exists publishes the same misrepresentation. Get quotes from With Jack and Qdos this week, pick one, pay annually, file the certificate. Expected cost £300–£600/year.
2. **ICO data controller registration has not been completed.** Under UK GDPR you must register with the Information Commissioner's Office before you process personal data — and cold outreach to named individuals at target agencies is processing personal data. Fee is £40/year for a micro-business. It takes ten minutes online at ico.org.uk. Failing to register before sending cold email is a statutory offence and also kills your legitimate-interest basis if a recipient complains.
3. **No Privacy Policy and no Cookie Policy published on the website.** Both are legally required before you collect any visitor data or send outbound that points back to a domain you control. The privacy policy also needs to name you as controller, reference your ICO number, and explain your legitimate-interest basis for B2B outreach. Add `/privacy` and `/cookies` routes to the Next.js site before you flip the coming-soon flag.
4. **No accountant engaged.** You do not need one to send an email, but HMRC's CT41G notice is going to arrive at Shelton Street within roughly three months of incorporation, dividend extraction planning needs to start before the end of your first accounting period, and late Corporation Tax filing penalties have just doubled (April 2026 rules). Engage a proactive UK Ltd-focused accountant now — Crunch, Mazuma, or a local independent who knows Xero. Expected cost £70–£130/month.
5. **No signed confirmation that the Retainer Agreement and Audit Engagement Letter have been independently reviewed for IR35.** You asked me to verify this and I have (see §4). The clauses are solid as drafted, but for belt-and-braces I would still push the Retainer Agreement through Qdos Contractor's contract review service (roughly £100–£150, ~5 business days). It gives you a written opinion you can wave at a cautious client's procurement team, which materially shortens agency onboarding.

Operational blockers you will need before the first retainer client signs (not before the first email, but very close behind):

Dropbox Sign account (free tier is fine) for eSignatures on the retainer. 1Password (~£4/month) for storing client repo and deployment credentials — do not keep client secrets in the browser, even temporarily, once money is changing hands. Renovate is installed per-client during onboarding, so that just needs a rehearsed install runbook.

Go-to-market assets (the entire outreach layer is still to build):

6. **Target hit-list of 100+ UK agencies does not exist.** No spreadsheet, no names, no verified emails, no personalised opening lines. This is the single biggest piece of remaining work in terms of hours. Budget a full working day.
7. **Cold sending infrastructure is not set up.** Sending cold outreach from your primary `tensileinfrastructure.co.uk` Google Workspace inbox is a bad idea — one spam complaint puts your only business email domain at deliverability risk. Standard practice is to buy a similar-looking secondary domain (`tensile-infra.co.uk` or `tensile-maintenance.co.uk`), point it at Google Workspace or an outreach tool like Instantly/Smartlead, configure SPF/DKIM/DMARC, and warm it for 2–4 weeks before sending real traffic. You currently have none of this.
8. **No outreach tool.** Lemlist, Instantly and Smartlead are the common options. Pick one, load the warmed sending address, and wire in the target list and the sequence copy.
9. **YunoJuno profile has not been created.** This is your second distribution channel and is genuinely high-intent. A one-afternoon job to write the headline, bio, skills, and two before/after case studies.
10. **Public case studies do not exist.** The Harbour Digital mock audit report in `legacy-client-mock/` is excellent raw material — genericise it into a one-page case study with made-up-but-plausible outcome metrics and a clearly labelled "illustrative" footer. Add a second case study drawn from a legacy-rescue project from your previous senior dev career, with the client's name anonymised. You need at least two of these live — one on the website, both on YunoJuno, and the PDF versions linked in the Day 8 cold email follow-up.
11. **Xero is chosen but not yet activated.** No invoice templates, no bank feed. You cannot take the £500 audit fee from the first client until this is done. It is a 30-minute job via the Monzo Business app offer.

Small but notable inconsistencies I spotted:

Cal.com booking hours are listed as Mon–Fri 09:00–17:00 in `Outstanding-Tasks.md` but Mon–Fri 10:00–12:00 in `AI-SESSION-CONTEXT.md`. Pick one and reconcile. If you are serious about protecting focus time, the 10:00–12:00 window is far better — first calls land in a predictable slot and the rest of the day stays clean for audit work.

The Retainer Agreement at clause 4.5 says fees are "exclusive of VAT, charged at the prevailing rate". That is correct and harmless while you are under the £90k threshold (VAT is 0% / not charged because you are not registered), but a procurement-sensitive client may query it. Keep a one-sentence explanation in your head: "We are not VAT-registered — turnover is below the threshold — so VAT is not added to these fees at present."

---

## 3. Critical-path plan to first cold email

This is the sequence I would run. Total elapsed time 7–10 working days if you do not context-switch.

**Days 1–2 — Legal wrapper.** Get two PI quotes (With Jack, Qdos), pick one, pay annually, save certificate. Register with the ICO (10 minutes, £40). Draft Privacy Policy and Cookie Policy, add `/privacy` and `/cookies` routes to the Next.js site, deploy. Open accounts with Dropbox Sign and 1Password. Submit the Retainer Agreement Template to Qdos for IR35 review (a 5-day clock starts here, runs in parallel with everything below).

**Day 3 — Financial plumbing.** Activate Xero via Monzo Business, connect bank feed, build the retainer and audit invoice templates, load company details. Engage an accountant and book the kick-off call.

**Days 4–5 — Case studies and YunoJuno.** Genericise the Harbour Digital mock into a one-page case study (clearly marked illustrative). Write a second case study from a previous real rescue project (name anonymised). Build out the YunoJuno profile with "Legacy Code Rescue" positioning, both case studies, and the correct skill tags. Add a /case-studies section to the marketing site or link the PDFs.

**Day 6 — Sending infrastructure.** Register a secondary outreach domain. Point it at Google Workspace or an outreach tool. Configure SPF, DKIM, DMARC. Start automated warm-up (Mailreach, Warmup Inbox, or the built-in warm-up on Instantly/Smartlead). The warm-up runs in the background for the next 2–3 weeks — that is genuinely the only item that will hold you up beyond the 7–10 day window, so start it as early as you can, even before the rest of this list if you want.

**Day 7 — Target list.** Build the Google Sheet to the columns your Pre-Incorporation doc specifies (Company, Website, MD, LinkedIn, Email, Personalised Opening Line). Use Sales Navigator, Apollo or Hunter, and do the personalised opener row by row. Stop at 100 names. Quality over volume.

**Day 8 — Website goes live.** Only once PI certificate is in hand and privacy/cookie policies are deployed: flip `const COMING_SOON = true` to `false` in `src/app/page.js`, commit, push to `main`, verify the GitHub Action builds and deploys, then smoke-test the live site from an incognito window.

**Day 9 — Sequence loaded, sending held.** Load the target list and the cold email sequence into the outreach tool. Do not start sending yet — the warmed domain is still warming. Do a final proofread of the Day 0 / Day 3 / Day 8 copy against the live landing page, and confirm the "complimentary quick-scan" offer in the email matches exactly what the landing page promises.

**Day 10 onwards — Start sending.** Once the new sending domain has hit its warm-up targets (typically 2–3 weeks after Day 6), begin sending at a modest cadence — 15–20 emails per day, ramping over two weeks. Do not send 100 on day one.

---

## 4. IR35 contract review (as you requested)

I read the full `Retainer-Agreement-Template.docx` and `Audit-Engagement-Letter.docx`. Here is what I found against the four HMRC IR35 status tests.

**Right of substitution.** Retainer clause 9.3 gives the Provider a qualified, unfettered right to supply a substitute at its own cost, with client refusal only on narrow objective grounds (competence, security clearance, conflict of interest) and requiring written reasons. This is the strongest substitution clause format HMRC will accept and is noticeably better than the generic Qdos boilerplate because it actively restricts the client's ability to reject a substitute. The Audit Engagement Letter clause 9 mirrors this but goes further — "without the Client's prior approval". Good.

**Mutuality of obligation.** Retainer clause 9.4 is explicit and unusually strong: the client has no obligation to offer work beyond the monthly cap, the provider has no obligation to accept additional work, and periods between scheduled tasks do not constitute paid downtime. Combined with clause 2 (the eight-hour monthly active-work cap per covered system) this creates a genuine deliverables-based structure rather than a retained-availability structure. Good.

**Direction and control.** Retainer clause 9.5 reserves manner, method, location and timing of performance to the Provider, carving out only three narrow client rights: outcomes/SLAs, deployment coordination, and security/access policies. Those three carve-outs are exactly what HMRC expects for a senior technical services engagement and do not create status risk. The explicit "the Client shall not direct the Provider's working hours, day-to-day activities, or methods of work" is a valuable belt-and-braces sentence.

**Financial independence and tax indemnity.** Retainer clause 9.7 gives the Client an indemnity against any PAYE/NIC assessments caused by your tax affairs — this is the right way round and what the Client's procurement team will look for. The matching clause in the Audit Engagement Letter runs the indemnity the other way (Client indemnifies Provider against an incorrect status determination), which is also correct for a fixed-fee one-off engagement. Both are well drafted.

**Other IR35-positive structural features present in the Retainer:** rolling monthly term with 30-day notice (not a minimum committed term), CPI-capped annual price review (businesses price-review; employees do not), monthly active-work cap with out-of-scope work subject to separate SOW (genuine scoped deliverables), anti-solicitation clause not drafted as exclusivity, non-exclusive IP licence back to the client (Provider retains its tools/runbooks — businesses own methodology, employees do not).

**What is missing that I would still add:** a "no integration" clause stating the Provider is not part of the Client's organisation, will not be listed on its staff directory, will not attend internal all-hands as a team member, will not be assigned internal performance reviews, will not use Client-branded email signatures, and will not represent itself as an employee of the Client. This is the "in business on your own account" test (the fifth, informal HMRC test) and it is the one first-time agency procurement teams often still ask about.

**My recommendation on the IR35 question:** the clauses you have are genuinely compliant as drafted. You do not need to rewrite anything. I would still pay Qdos Contractor ~£100–£150 for a written review of the Retainer Agreement before the first signature — not because I think they will find material holes, but because having their written opinion on file converts a tense procurement conversation into a three-minute formality. Treat it as cheap insurance against delayed sales cycles, not as a correction of the contract.

---

## 5. Risk register for the first six months

**Highest: misrepresentation risk from the live site.** The trust bar currently claims "£1m Professional Indemnity Insured". Keep `COMING_SOON = true` until the policy is bought. This is the single hardest guard-rail — if you accidentally ship the live site before the policy is in force, you have a documented written misrepresentation on every page.

**High: single-client concentration risk.** Your Month-3 target is three audits and one retainer. A single retainer is 100% of MRR at that point. Before taking the first retainer signature, mentally rehearse what you do if they give notice in month two: do you have three conversations already in flight that could become the next retainer? If no, you need a continuous top-of-funnel — not just an initial blast — so build the outreach process as a weekly habit from Week 1, not a one-off campaign.

**High: deliverability risk from cold outreach on the primary domain.** Already covered above — use a secondary warmed domain.

**Medium: Monzo Business perception with larger agency procurement.** Some 50-person agencies' finance teams are more comfortable seeing a traditional high-street bank on an invoice. Not a blocker, but if you hit friction at the finance stage once you are past Month 4 and can afford slightly more admin, consider opening a secondary Starling Business account for show.

**Medium: CT41G response window.** HMRC will write to Shelton Street. 1st Formations will forward digitally. Watch the 1st Formations inbox once a week and action any HMRC letter within 72 hours. Penalties for missing CT registration have doubled this month.

**Medium: SLA edge cases.** Your contracts correctly scope the 8-hour SLA to business hours Mon–Fri. The first time a client asks "what if our site goes down on a Saturday?", you need a one-sentence answer ready. Draft it now and paste it into the onboarding document: "Out-of-hours coverage is explicitly excluded — we will pick up any incident first thing Monday morning. If 24/7 cover is essential for your system, we are not the right fit and I would be happy to refer you to a managed-ops provider who specialises in it."

**Low but worth noting: anti-creep enforcement.** The Retainer contract has the monthly cap and the out-of-scope clause. The real test is whether you enforce it in Week 3 of a new client when they are lovely and you want to say yes. Agree with yourself now that every additional ask beyond the cap gets routed through a one-line email: "Happy to pick that up — sending a small SOW across separately." If you cannot hold that line, the whole business model quietly converts back into hourly contracting within six months.

---

## 6. What I would do first thing tomorrow

If I were you and I had one hour tomorrow morning, I would spend it doing exactly this, in order, and nothing else:

Open withjack.co.uk and goqdos.com in two tabs and get both PI quotes submitted before lunch. Then open ico.org.uk/register, pay the £40 data controller fee, and save the reference number into `AI-SESSION-CONTEXT.md`. Those two actions, totalling maybe 40 minutes, unblock more downstream work than any other hour you will spend this month.

Everything else on the list can wait until the PI certificate is in your inbox.

---

*This assessment was produced against the RetainerBusiness workspace as at 10 April 2026 and cross-checked against the incorporated retainer and audit contracts. Revisit this document each Friday until the first retainer signature and tick items off inline.*
