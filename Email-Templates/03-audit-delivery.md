# Audit Delivery Cover Note

**Use:** The email body when delivering the completed System Health Audit report. The report is attached as a PDF.

**Send from:** jack@tensileinfrastructure.co.uk
**Subject:** System Health Audit — [Client/System name] — [Date]

---

## Template — Clean audit (no Critical findings)

Hi [Name],

The audit report for [system/codebase name] is attached.

[2–3 sentence plain-English summary of the headline findings. E.g. "Overall the codebase is in reasonable shape. The main things to address are two high-severity dependency vulnerabilities with patches available, and a missing Content Security Policy header. Performance is solid — Lighthouse scores are strong across the board."]

Everything is detailed in the report with recommendations on what to fix first. Let me know if anything needs clarifying.

Jack
Tensile Infrastructure
hello@tensileinfrastructure.co.uk

---

## Template — Audit with Critical findings (already flagged)

Hi [Name],

The audit report for [system/codebase name] is attached.

As I mentioned when I flagged [the issue] earlier this week, the most pressing item is [brief restatement — one sentence]. The report covers this in full, along with the remaining findings ordered by priority.

[One sentence on the overall picture beyond the critical issue. E.g. "Outside of that, the codebase is in decent shape — the dependency health is manageable and performance is good."]

Let me know if you have questions once you've had a chance to read through it.

Jack
Tensile Infrastructure
hello@tensileinfrastructure.co.uk

---

## Template — Audit with no significant findings

Hi [Name],

The audit report for [system/codebase name] is attached.

Good news: nothing alarming. [One sentence on what was found — e.g. "There are a handful of minor dependency updates worth making and one performance improvement worth considering, but no security vulnerabilities and no urgent action required."] The report has the detail and a prioritised list of recommendations.

Jack
Tensile Infrastructure
hello@tensileinfrastructure.co.uk

---

## Notes

- Subject line format is fixed: System Health Audit — [name] — [date]. Makes it easy to find later.
- The cover note should be 3–5 sentences. The report does the heavy lifting.
- Never attach raw tool output. The report is the deliverable.
- If a Critical finding was identified during the audit, it must have been flagged by email immediately — do not save it for the report. The delivery email then references that prior communication.
- Send between 09:00–16:00 on a working day. Not Friday afternoon.
- BCC jack@ for your own records if not already threaded.
