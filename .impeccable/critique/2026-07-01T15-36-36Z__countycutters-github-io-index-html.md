---
target: countycutters.github.io site
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-01T15-36-36Z
slug: countycutters-github-io-index-html
---
# Design Critique — County Cutters

Register: brand (local-service marketing site). No PRODUCT.md — context inferred from code.
Method: single-context (degraded; sub-agents not spawned per environment policy).

## Design Health Score: 26/40 (Acceptable)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good form states; gallery shimmer animates forever over loaded images |
| 2 | Match System / Real World | 3 | Friendly language; emoji service icons feel improvised |
| 3 | User Control and Freedom | 3 | Lightbox + mobile menu escape cleanly |
| 4 | Consistency and Standards | 3 | Consistent layout; icon language mixed (emoji + glyph + SVG) |
| 5 | Error Prevention | 2 | Quote form submittable with zero services; native-only validation |
| 6 | Recognition Rather Than Recall | 3 | Visible nav, labelled fields, active states |
| 7 | Flexibility and Efficiency | 2 | Single rigid path |
| 8 | Aesthetic and Minimalist Design | 2 | Green gradients + glow blobs everywhere; identical card grids |
| 9 | Error Recovery | 2 | Generic one-sentence form error |
| 10 | Help and Documentation | 3 | FAQ, info box, "What Happens Next" steps |

## Anti-Patterns Verdict
Reads AI/template-generated. Tells: system font stack for everything (no brand type); emoji service icons (🌱✂️🚗); 135deg green gradient + radial glow on every hero/CTA/icon; 8 identical card-grid variants; category-cliche hero copy "Transform Your Outdoor Space".

Detector (9 findings, exit 2): side-tab border-left:4px on .info-box/.error-message (style.css:1891,1921; contact.html:265; reviews.html:337,365) — absolute ban. single-font (contact.html:63, reviews.html:89). broken-image empty src gallery.html:501 (JS-populated lightbox = false positive for breakage, but empty src="" still wasteful). layout-transition width on nav underline (style.css:209, minor).

No browser overlay run in this environment.

## What's Working
1. Real before/after work photos exist and gallery uses them well (thumbnail->lightbox webp).
2. Quote form thoughtfully built: 5 sections, native input types, async submit with loading/success/error, preserves data on error.
3. A11y fundamentals present: aria-label on menu/logo, :focus-visible outline, labelled fields, .sr-only.

## Priority Issues
- [P1] No typographic voice — system font + emoji icons. Fix: two-family pairing (avoid Inter/DM Sans/Poppins) + one consistent SVG icon set. Cmd: typeset.
- [P1] Zero photography on home page despite real work photos in images/. Hero is a green gradient. Fix: real photo hero + section imagery. Cmd: bolder.
- [P1] Brand green #00a651 on white ~3.2:1 fails 4.5:1 as body text (links, prices, Q: markers, checkmarks). Fix: use primary-dark #00813f (~5:1) for green text; keep bright green for fills/large numbers only. Cmd: colorize.
- [P2] Visual monoculture — one 135deg gradient + glow on every hero/CTA/icon. Fix: reserve gradient for 1-2 moments; imagery + flat color carry the rest. Cmd: quieter.
- [P2] No prefers-reduced-motion anywhere; shimmer skeleton animates infinitely over already-loaded images. Fix: reduced-motion block; stop shimmer on img load. Cmd: animate.

## Persona Red Flags
- Jordan (first-timer): 7 nav items with 3 competing CTAs (Quotes/Contact/Leave a Review); emoji icons undersell the work.
- Casey (mobile, primary audience): long 5-section quote form with no progress indicator; low green contrast worst in outdoor daylight.
- Margaret (rural Norfolk homeowner): tel links + service-area map deliver "local & real"; emoji/gradient polish risks reading impersonal vs the warm "Ethan and Thomas" testimonial voice.

## Minor Observations
- Quote form allows submit with no service selected.
- Star ratings are literal text with no aria-label.
- Duplicated inline scripts on every page — extract to main.js.
- Google Maps API key hard-coded (index.html:374) — verify referrer-restricted or risk billing abuse.
- Testimonial amber stars #fbbf24 on white ~1.7:1, very faint.
- .error-message raw #c00/#fee with side-stripe — bring into brand system.
