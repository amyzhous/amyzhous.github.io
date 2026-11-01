## 04. Self-Serve Billing

Monetization and permissions · Approximately 2-minute read

Billing should be the shortest case. It has one excellent central tension and doesn't need to be inflated into a broad transformation story.

# Access shouldn't wait for a billing decision.

**Designing provisional access for teams that need to move quickly without losing control over paid seats.**

**44 firms used self-serve seat management · 245 seat-change events recorded**

**Role:** Product design for member access, billing approval, and related user states within a larger cross-functional initiative.

[HERO — Provisional-access employee state paired with the billing-admin approval experience.]

## The person adding a teammate wasn't always the person paying.

Previously, expanding a team's paid seats required help from Part3 staff. That could interrupt onboarding just as a firm was growing its use of the product.

But self-serve purchasing introduced another complication. An organization administrator might be responsible for adding people while a principal or billing administrator controlled spending.

Making those two people complete the same action wasn't realistic.

## Two reasonable approaches, one important tradeoff

An approval-first model protected spending control but left the new member waiting.

The alternative was to grant the requested access immediately and give the billing administrator a limited window to approve it.

The team adopted the second approach, with a seven-day approval period and a fallback to Viewer access if approval didn't arrive.

[STATIC — Approve-first versus provision-first comparison, showing the consequences for the employee and the billing administrator.]

## Making temporary access understandable

The experience needed to work for both sides.

A new member had to know their access was temporary without feeling blocked from starting work. The billing administrator needed to understand the pending request and what approving it meant.

The design also had to account for requests that expired without a decision.

[HERO ANIMATION — Provisional access → Pending request → Billing-admin approval → Confirmed access.]

[STATIC — Approved versus expired states, including the Viewer fallback.]

## What changed

The broader self-serve billing system recorded **44 firms taking seat actions and 245 seat-change events** by the October 2026 audit.

Approvals were more common than direct seat purchases. That was an important finding: much of the customer need was about approving access that someone else had already requested, not simply buying additional seats.

The usage figures cover the wider self-serve seat-management system, not the isolated effect of the provisional-access design.

The design challenge was balancing two legitimate needs: letting people get to work and giving organizations control over spending. Provisional access gave those needs separate paths without treating either as an afterthought.

Why this works: One clear product decision, two different user roles, a meaningful edge case, and real system-level usage evidence.

The source material attributes the overarching billing specification and engineering leadership to Corey, so the draft deliberately doesn't claim you originated provision-first. Before publishing, the role description should be matched to the design decisions you can personally substantiate.
