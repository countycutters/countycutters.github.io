---
target: whole site (drenched green build)
total_score: 30
p0_count: 0
p1_count: 1
timestamp: 2026-07-01T19-29-42Z
slug: countycutters-github-io-index-html
---
# Design Critique — County Cutters (Drenched Green build)

Target: whole site (7 pages). Register: brand. Theme: drenched dark green + yellow accent.
Method: single-context (degraded; sub-agents not spawned per environment policy).

## Design Health Score: 30/40 (Good) — up from 26.
Consistency 4; most heuristics 3; Flexibility 2. Detector: 0 findings across all 7 pages.

## Anti-Patterns Verdict
No longer reads AI-generated — committed POV (drenched green, yellow accent, real photography, Bitter slab + Hanken). Detector clean. Second-order caution: "drench the safe light site dark" is itself a common redesign reflex; what saves it is real imagery + the two-lads voice, not the palette alone.

## What's Working
1. Committed, distinctive identity cohesive across all 7 pages (consistency = 4).
2. Real before/after photography carries the brand; dark surface makes lawn greens pop.
3. Production-grade craft: unified SVG icons, yellow focus rings, prefers-reduced-motion, robust reveals w/ no-JS fallback, shimmer retires on load.

## Priority Issues
- [P1] Dark theme fights the audience's context. Older rural customers, phone outdoors in daylight — light-on-dark is hardest to read in sun glare; "edgy" vs "reassuring local" mismatch. Fix: keep green as hero/accent but consider light/mid surface for content pages, OR commit to dark with larger body + line-height and test on a real phone outdoors. Cmd: adapt/quieter.
- [P2] Yellow over-used — 8 identical full-width service buttons + 2 full-yellow CTA bands. Accent works by scarcity. Reserve solid yellow for ONE primary action per view; make service CTAs ghost/text. Cmd: quieter.
- [P2] Inner pages photo-starved — services/quote/contact/about/reviews are flat green; thread real photos in to break the monotone and use the best asset. Cmd: layout.
- [P2] "Meet the team" is two monogram letters; undercuts the personal promise. Add real photos of Ethan & Thomas. Cmd: harden (content).
- [P3] Reviews page shows an empty shell (form, no reviews). Add warm empty state or hide list. Cmd: onboard.

## Persona Red Flags
- Margaret (older rural homeowner): dark reads "design studio" not "local lads"; sunlight legibility the biggest barrier. tel/map still help.
- Casey (mobile): OLED-friendly, thumb-reachable CTA, but 8 yellow buttons = decision noise; long quote form, no progress.
- Sam (a11y): muted #b9d3c4 clears 4.5:1 on all 3 green surfaces; yellow focus rings; reduced-motion honoured. Watch large yellow-on-green decorative text.

## Minor Observations
- Contact form lacks the quote form's completeness guard.
- Reviews mixes shared drenched form + legacy .review-form; consolidate.
- Legacy token aliases in style.css prop up reviews inline; future cleanup should port to new tokens.
- Google Maps API key still exposed in index.html — confirm referrer-restricted.
