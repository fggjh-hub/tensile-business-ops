# Phase 2: Establish Professional Desk

## Context
You need to appear as a highly organised, robust technical agency, not a freelancer using a Gmail account. Your infrastructure must support secure, asynchronous communication and ticket tracking.

## 1. Domain & Email
*   Buy a clean `.co.uk` or `.com` domain. Use **Cloudflare** (for cost-price renewals and excellent security) or **Namecheap**.
*   Sign up for **Google Workspace Business Starter** (~£5/month). 
*   Set up two primary aliases: `hello@tensileinfrastructure.co.uk` (for sales) and `support@tensileinfrastructure.co.uk` (for clients logging issues).

## 2. Ticketing System (The Core Engine)
Retainer clients need to know their bugs are being tracked. Do not manage maintenance via email threads.

*   Set up **Linear** (fast, developer-focused) or **Jira** (corporate standard, but clunky). Linear is recommended for 2026.
*   Integrate your support email with the ticketing system. When a client emails `support@tensileinfrastructure.co.uk`, it should automatically generate a ticket in Linear.

## 3. Client Communication
*   Create a free **Slack Workspace** for your business.
*   When a client signs a retainer, do not join *their* Slack. Instead, use **Slack Connect** to bridge a private channel between their workspace and yours. 
*   *Why?* Joining their Slack makes you feel like an employee (IR35 risk) and you will be distracted by their internal company chatter. By forcing them to use a specific bridged channel (e.g., `#ext-maintenance-triage`), you maintain a B2B relationship.
