# Phase 2: Hold the Line on the Two-Product Menu

## Context
The business has two products and only two: the £500 System Health Audit and the £1,500/month Safety Retainer (per covered core system). Ad-hoc bug-fixing, hourly work, and "just this one thing" engagements are explicitly not offered. This document exists to define how you handle the inevitable inbound request for work that doesn't fit either product, so that you never drift back into fire-fighting.

## The inbound-request workflow

1.  **Intake.** Prospect emails `hello@tensileinfrastructure.co.uk` or `support@tensileinfrastructure.co.uk` describing a one-off bug, outage, or "quick favour".
2.  **Acknowledgement within 24 hours.** Reply: *"Thanks for reaching out. Before I can help, I need to explain how we work. We offer two things: a fixed-price System Health Audit (£500, 3-day turnaround) and an ongoing Safety Retainer (£1,500/month per covered core system). We don't take on standalone bug fixes, hourly work, or one-off engagements — that's a deliberate choice so we can focus on long-term maintenance relationships."*
3.  **Route the prospect.** Pick one of three responses:
    *   **If the reported issue suggests broader drift** (old dependencies, no monitoring, recurring bugs, no CI): offer the Audit. *"If what you're describing is a symptom of a system that hasn't had proper maintenance for a while, the Audit is the right starting point. You get a written report within 3 working days that tells you exactly where you stand and what to do. If it turns out there's ongoing work, we can discuss a retainer at that point — no obligation either way."*
    *   **If they want ongoing coverage immediately**: skip the Audit and go straight to the retainer conversation. This is rare but it happens with sophisticated buyers.
    *   **If it is genuinely a one-off ticket they want fixed in isolation**: decline politely. *"Thanks — that's not something we take on, but happy to point you towards someone who does."* Do not negotiate. Do not offer a "small engagement". Do not break the model.
4.  **Never quote hourly.** If anyone asks what your hourly rate is, the answer is "we don't work hourly". This protects both your margin and your Outside IR35 positioning (hourly engagements with client direction and control look a lot like disguised employment).

## Why this matters

Every time you take on ad-hoc work, three things happen:

1.  Your effective hourly rate collapses. A £500 flat fix that turns out to be a six-hour state-management nightmare pays you £83/hour — below your break-even. The Audit has the same risk but at least produces a reusable document and a qualified retainer lead.
2.  You train the client to see you as on-call labour rather than a retained professional service. Retainer conversions from ad-hoc customers are significantly worse than retainer conversions from Audit customers.
3.  Your IR35 defence weakens. A pattern of discrete, client-directed tasks with no substitution and no control is exactly the pattern HMRC looks for. Holding the line on productised services with written scope keeps the paper trail clean.

## The one exception

If an existing retainer client asks for work that falls outside the Monthly Cap on their covered core system, the retainer agreement (clause 2.4) already handles it: you may, at your sole discretion, agree to a separate written statement of work at your then-current rate before any work begins. That is not ad-hoc work — it is contracted additional scope for an existing customer, with a paper trail. Different thing entirely.
