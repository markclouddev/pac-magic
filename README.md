# PAC Magic — Phase 2 Rules Engine

This package is the first separation between the beautiful PAC Magic UX and the regulatory logic.

## What changed

The MVP now has a structured rules layer with:

- Rule IDs
- Active/inactive status
- Trigger conditions
- Result categories
- Plain-English explanations
- Source URLs
- Review flags
- Version date

## Initial rules represented

1. Recipient committee threshold concept
2. Independent-expenditure committee threshold concept
3. Major-donor threshold concept
4. County jurisdiction concept
5. City jurisdiction pathway

These are deliberately treated as **preliminary determinations**, not legal conclusions.

## Authoritative basis

The initial rules are based on current FPPC campaign-rules and committee-jurisdiction guidance. Production implementation must continuously reconcile the rules against current FPPC regulations, manuals, filing schedules, forms, local filing authorities, and legislative/regulatory changes.

## Next engineering step

Connect the questionnaire's answers to this rules layer, then create:

User profile
→ Rule evaluation
→ Committee recommendation
→ Required information
→ Review flags
→ Filing/action checklist
→ Calendar

The rules engine should remain independently updateable from the frontend.
