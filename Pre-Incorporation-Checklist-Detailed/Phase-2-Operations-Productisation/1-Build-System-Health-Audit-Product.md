# Pre-Incorporation: Build System Health Audit Product

## The Objective
You want to be fully ready to execute an audit the day after you incorporate. You should not be figuring out formatting or report structure while a paying client waits.

## Step 1: The Technical Dry-Run
Create a dummy project or fork an old application you wrote a year ago.
Run these specific tools and save their outputs:
1.  **Dependencies:** Run `npm audit --json > audit.json`. Learn how to read the JSON output to easily extract the High and Critical vulnerabilities.
2.  **Snyk CLI:** Install Snyk globally (`npm i -g snyk`). Run `snyk test`. Get familiar with the remediation advice it provides.
3.  **Lighthouse:** Open Google Chrome DevTools, go to the Lighthouse tab, and run a report on your dummy site. Focus purely on "Performance" and "Best Practices."

## Step 2: The Report Template (Figma/Notion)
Before you have a company, you can design the deliverable. 
Design a branded 4-page template:
*   **Page 1 (Executive Summary):** Visual Traffic Light system. Is the codebase Red (Critical Risk), Amber (Warnings), or Green (Healthy)?
*   **Page 2 (Security Vulnerabilities):** A table mapping the CVEs (Common Vulnerabilities and Exposures) found by Snyk and `npm audit`. Use terms like "Remote Code Execution risk in `lodash` version 4.17.15."
*   **Page 3 (Performance & Tech Debt):** Highlight slow Time-To-Interactive (TTI) or bloated bundle sizes.
*   **Page 4 (Action Plan):** The upsell page. Detail the 5 immediate steps required to fix the issues, and explicitly place the £1,500/month per covered core system "Safety Retainer" alternative at the bottom.

## Step 3: Time-Boxing
Simulate an engagement. Fork an open-source project, set a timer for 2.5 hours, run all the tools, and populate your exact template. Keep practicing this until the process is completely seamless.
