# Audit Delivery Email — Harbour Digital Ltd

**Send from:** jack@tensileinfrastructure.co.uk
**To:** [Contact name]@harbourdigital.co.uk
**Subject:** System Health Audit — Client Portal API — 6 April 2026
**Attach:** Harbour-Digital-Audit-Report.docx (convert to PDF before sending)

---

Hi [Name],

The audit report for the Client Portal API is attached.

There are nine high-severity findings across three packages — lodash, axios, and express — all of which have patches available. The most urgent is lodash: the version in use has code injection vulnerabilities that allow arbitrary JavaScript execution, and that needs addressing before anything else. The good news is that three version bumps (lodash to 4.18.1, axios to 0.30.3, express to 4.22.0) resolve the majority of the findings in one go. The report has the full detail and a prioritised list of what to do in what order.

Let me know if anything needs clarifying.

Jack
Tensile Infrastructure
hello@tensileinfrastructure.co.uk
