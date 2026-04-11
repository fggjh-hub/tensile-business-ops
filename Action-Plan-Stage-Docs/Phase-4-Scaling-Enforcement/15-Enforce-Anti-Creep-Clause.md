# Phase 4: Enforce the Anti-Creep Clause

## Context
If you start doing feature development on a retainer, you are no longer a maintenance provider; you are an incredibly cheap external development agency. Scope creep destroys the profitability of fixed-fee retainers. You must fiercely protect your boundaries. 

## Defining "The Boundary"
*   **Maintenance (Allowed):** Updating a library, fixing a database lock, fixing a responsive CSS bug on Safari, patching a security vulnerability.
*   **Feature Creep (Rejected):** Adding a new payment gateway, building a new dashboard view, migrating the entire database to a new provider.

## The Monthly Cap
Clause 2 of the Retainer Agreement caps active work at eight (8) hours per covered core system per calendar month. Passive monitoring, automated scans, and the monthly update do not count against the cap; everything else does. Unused hours do not roll over. If a client submits a "bug" that you realise is actually a multi-day structural rewrite, you must pause and invoke clause 2.4, which requires a separate written statement of work at your then-current rate before any work begins.

## How to Reject Work (Email Templates)

### Scenario A: Explicit Feature Request
*"Hi [Name], I’ve reviewed the request for the new admin dashboard. Because our SLA guarantees rapid response times for production breaks, we strictly do not take on new feature development, as it compromises our availability. This request falls outside the retainer scope. I recommend passing this to your internal product team."*

### Scenario B: Massive "Bug"
*"Hi [Name], we've investigated the checkout bug. The root cause requires a complete refactor of the state management architecture, which will take approximately 18–24 hours of development. Per clause 2 of our retainer agreement, the Monthly Cap is eight hours of active work per covered core system per calendar month, and this work clearly exceeds that. Under clause 2.4, we can quote this as a separate written statement of work at our current rate before any work begins, or alternatively we can provide a technical brief for your internal team to execute. Let me know which you'd prefer."*
