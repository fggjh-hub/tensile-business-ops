# Phase 2: Define Triage Process

## Context
You will sell standalone "Triage Fixes" to clients who aren't ready for a retainer but have an urgent bug. You must define internally exactly how you handle these, or you will end up working for free.

## The Triage Workflow (Step-by-Step)

1.  **Intake:** Client emails `support@tensileinfrastructure.co.uk` detailing the bug. (All interactions are strictly asynchronous).
2.  **SLA Acknowledgment:** You reply within 24 hours. *"Received. Our team is asynchronously reviewing the issue to determine scope."* (At this point, you do not write any code).
3.  **The Investigation (Max 30 mins):** You look at the codebase to verify if it is indeed a bug, and estimate the difficulty. 
    *   *If it's a feature request disguised as a bug:* "This requires a structural change to the checkout flow, which falls outside our bug-fix remit."
    *   *If it's a valid bug:* Proceed to Quote.
4.  **The Quote:** Reply to the client: *"We have isolated the likely cause. We can resolve this and deploy the fix for a fixed fee of £450. Fix guaranteed within 48 hours of approval. Please confirm to proceed."*
5.  **Execution:** Once confirmed, you branch, fix, test, and issue the PR.
6.  **Billing:** Invoice issued immediately upon PR merge, via FreeAgent.

## Why Flat Pricing?
Never charge hourly for bug fixes. If you are an expert and fix a complex database lock in 15 minutes, charging hourly punishes you for your efficiency. By charging a flat fee (£450), the client pays for the *resolution of the headache*, and you maintain an incredibly high effective hourly rate.
