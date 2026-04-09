# Phase 2: Productise the System Health Audit

## Context
The System Health Audit is your "Tripwire" offer. It is low-priced (£400-£600) to remove purchase friction, but it proves your value and sets up the long-term retainer. It must be highly standardised so you can execute it in under 3 hours, keeping your effective hourly rate high.

## The Toolkit (Automating the Audit)
Do not spend hours manually reading code. Use automated tooling.
1.  **Dependencies:** Run `npm audit` or `yarn audit`. Use **Depcheck** to find unused dependencies.
2.  **Security:** Run the **Snyk CLI** against their repository to flag known vulnerabilities in their stack.
3.  **Frontend Performance:** Run **Google Lighthouse** (via Chrome DevTools or CLI) on their production URLs.
4.  **Accessibility & Best Practices:** Use axe-core or standard Lighthouse metrics.

## The Report Structure (The Deliverable)
Create a beautiful, branded PDF template in Notion or Figma. It should have 4 sections:

1.  **Executive Summary:** A strictly non-technical paragraph for the Agency Owner/CEO explaining the current risk level of the application (Red/Amber/Green).
2.  **The Red Flags (Critical):** Immediate security vulnerabilities or broken user flows discovered.
3.  **The Tech Debt (Warnings):** Outdated packages (e.g., React version is 3 years out of date), performance bottlenecks, bloat.
4.  **The Action Plan:** A prioritised list of what needs fixing.

## The Upsell Mechanic
At the end of the report, you explicitly state:
*"You can pass this report to your internal team to execute. Alternatively, if you want this system kept in shape month to month, our Safety Retainer is £1,500/month per covered core system. That covers dependency updates, security patching, monitoring, monthly reporting, and critical break/fix response."*
