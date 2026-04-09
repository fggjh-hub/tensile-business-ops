# Phase 3: Sell the First Audits

## Context
When an agency replies to your cold email expressing interest, your goal is *not* to immediately pitch a £1,500/month per covered core system retainer. That requires too much trust. Your goal is to sell the System Health Audit (£400-£600).

## The Discovery Call
When you jump on a 15-minute intro call, frame the audit correctly. 

### The Pitch: The Safety Net
*"Your developers are fantastic at building new products fast. That’s what they should be doing. The System Health Audit isn't designed to critique their code; it's a safety net. For £500, we parachute in, run deep security and dependency scans tools, and produce a 3-page triage report. You can then hand that report right back to your developers to fix, or, if ongoing maintenance makes sense, keep that system covered on retainer. It acts as a perfect quality-assurance checkpoint for your clients."*

### Objection Handling
*   *"Can't we just do an audit ourselves?"* 
    *   **Response:** *"Yes, but tracking down CVEs (Common Vulnerabilities and Exposures) in an `npm` tree takes hours of engineering time that you can't easily bill for. Pay us the £500, and your developers can spend that time building billable features."*
*   *"We already have internal QA."*
    *   **Response:** *"Great. We are purely focused on infrastructure. We look at package obsolescence and server load, which standard UI QA usually misses."*

## Closing the Audit
Once they agree, immediately send a Stripe Payment Link for the audit fee, and a request for read-only access to their GitHub/GitLab repository. Do not start work until the invoice is paid and access is secured.
