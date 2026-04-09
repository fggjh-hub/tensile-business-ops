# Legacy Client Mock

This repository simulates a stale client project from roughly 2021/2022. It intentionally includes severely outdated dependencies with known CVEs (like Prototype Pollution and SSRF).

## How to test your System Health Audit runbook
1. Ensure you have the Snyk CLI installed `npm install -g snyk`.
2. Run `npm install` inside this directory. You will immediately see the built-in red warnings from `npm audit`.
3. Run `snyk test` to generate a heavily detailed security report.
4. Open the `Audit-Report-Template.docx` template.
5. Copy the worst offenders from the Snyk output (it will flag Lodash and Axios as High/Critical) and practice translating the raw terminal output into professional, calm client language inside your Audit PDF.

## How to use the Renovate Config
The included `renovate.json` is configured precisely for your £1,500/month per covered core system retainer model:
- **Noise Reduction:** All `patch` and `minor` updates are heavily grouped into a single consolidated PR.
- **Batched Scheduling:** The updates only trigger strictly on Monday mornings, freeing you from continuous Slack notifications during the week.
- **Safety First:** Breaking `major` updates are explicitly kept separate and require manual code review before merging, adhering strictly to the SLA terms.
