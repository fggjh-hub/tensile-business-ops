# Phase 4: Enforce the Anti-Creep Clause

## Context
If you start doing feature development on a retainer, you are no longer a maintenance provider; you are an incredibly cheap external development agency. Scope creep destroys the profitability of fixed-fee retainers. You must fiercely protect your boundaries. 

## Defining "The Boundary"
*   **Maintenance (Allowed):** Updating a library, fixing a database lock, fixing a responsive CSS bug on Safari, patching a security vulnerability.
*   **Feature Creep (Rejected):** Adding a new payment gateway, building a new dashboard view, migrating the entire database to a new provider.

## The 8-Hour Rule
The contract specifically limits continuous work on a single issue to 8 hours. If a client submits a "bug" that you realise is actually a massive structural rewrite requiring 3 days of work, you must pause.

## How to Reject Work (Email Templates)

### Scenario A: Explicit Feature Request
*"Hi [Name], I’ve reviewed the request for the new admin dashboard. Because our SLA guarantees rapid response times for production breaks, we strictly do not take on new feature development, as it compromises our availability. This request falls outside the retainer scope. I recommend passing this to your internal product team."*

### Scenario B: Massive "Bug"
*"Hi [Name], we've investigated the checkout bug. The root cause requires a complete refactor of the state management architecture, which will take approximately 18-24 hours of continuous development. Per our agreement, this exceeds the 8-hour cap for triage fixes. We need to classify this as a distinct project which we can quote separately, or we can provide a technical brief for your internal team to execute."*
