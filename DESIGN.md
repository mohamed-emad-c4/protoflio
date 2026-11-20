---
name: Mohamed Emad, Portfolio
description: A full-stack engineer's work, drawn as an exploded product stack of glass slabs.
colors:
  ground: "#f1f5f7"
  ground-2: "#e9eef3"
  card: "#f7f9fb"
  paper-white: "#ffffff"
  ink: "#09153b"
  ink-2: "#273759"
  muted: "#5b6785"
  line: "#d5dceb"
  line-soft: "#e2e7f1"
  accent: "#0858f8"
  accent-ink: "#0645c7"
  accent-wash: "#e3ebff"
  slab-db: "#dde6ff"
  slab-api: "#dcefe2"
  slab-web: "#dfe8ff"
  slab-mobile: "#e2dffc"
  slab-edge: "#1f3a9e"
typography:
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.5vw, 80px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 5vw, 68px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.4vw, 46px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(21px, 2.4vw, 35px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.008em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.35
  chip:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 600
rounded:
  hair: "2px"
  sm: "6px"
  card: "12px"
  tile: "14px"
  dot: "50%"
spacing:
  pad: "clamp(16px, 3.6vw, 48px)"
  section: "clamp(72px, 10vw, 140px)"
  card-pad: "clamp(22px, 3.6vw, 52px)"
  stack-gap: "clamp(18px, 2vw, 28px)"
  maxw: "1360px"
  nav-h: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 30px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.paper-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 30px"
    height: "58px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-white}"
  store-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "9px 14px"
  chip:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-2}"
    typography: "{typography.chip}"
    rounded: "{rounded.sm}"
    padding: "5px 11px"
  project-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  project-glyph:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.accent}"
    rounded: "{rounded.tile}"
    size: "clamp(52px, 5.4vw, 72px)"
  contact-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-white}"
---

# Design System: Mohamed Emad, Portfolio

## Overview

**Creative North Star: "The Exploded Stack"**

The engineer is drawn as a product stack: database, API, dashboard and app as four translucent isometric glass slabs, pulled apart along dashed guides and labelled like a technical cross-section. Everything else on the page is quiet engineering paper around that drawing: a cool grey-white ground, deep navy ink, hairline rules, and one electric blue that marks the things that are his.

Density is generous and editorial rather than dashboard-like. Heavy geometric sans headlines (Manrope 800, tight negative tracking) sit over light, long-measure body copy. The stack metaphor repeats at two scales, the hero plate and a per-project mini stack, so "which layers did he build" is answered by lit versus ghosted slabs, not by prose.

Motion is slow and physical: one shared ease-out curve, a gentle float on the hero plate, and the signature lift where a project's built slabs separate on hover or focus. Nothing glows, nothing bounces.

**Key Characteristics:**
- Cool grey-white ground, navy ink, a single electric blue accent.
- Isometric glass slabs (blue, mint, blue, violet) with thin navy edges and dashed guides as the one illustrative language.
- Built layers in full colour; unbuilt layers ghosted.
- Heavy geometric sans display over light body; short blue underline rule under every major heading.
- Flat surfaces, hairline borders; depth lives in the illustration, not in UI chrome.

## Colors

A restrained cool-neutral paper palette with one saturated electric blue and four pale glass tints that exist only inside the stack illustration.

### Primary
- **Electric Blue** (accent): primary button fill, the heading underline rule, nav link hover underline, bullet dots, label anchor dots, the "at Company" highlight in experience titles, focus outline. Interactive or "this is his" marks only.
- **Pressed Blue** (accent-ink): hover state of the primary button. Never used at rest.
- **Blue Wash** (accent-wash): background of project glyph tiles; the only tinted UI surface.

### Tertiary (illustration only)
- **Database Glass** (slab-db), **API Mint** (slab-api), **Dashboard Glass** (slab-web), **App Violet** (slab-mobile): the fills of the four slab layers, bottom to top. Used in the rasters and in the legend swatch, never as UI backgrounds.
- **Slab Edge Navy** (slab-edge): the outline weight of a glass slab; appears in UI only on the legend swatch that keys the illustration.

### Neutral
- **Cool Paper** (ground): page background and the frosted nav (86% mix over blur).
- **Shaded Paper** (ground-2): alternating section band (the skills section), bounded by line-soft hairlines.
- **Card Paper** (card): project and "also built" cards, one step lighter than ground.
- **Paper White** (paper-white): chip fill, and text on blue or navy fills.
- **Deep Navy** (ink): headings, primary text, outline button stroke, the inverted contact and footer band.
- **Slate Navy** (ink-2): subhead, bullet text, chip text, callout leader lines.
- **Muted Slate** (muted): taglines, legend, meta text (place, notes, layer detail).
- **Hairline** (line) and **Soft Hairline** (line-soft): card borders, list row dividers, nav underline; soft for section band edges.

### Named Rules
**The One Blue Rule.** Electric Blue is the only saturated UI colour. It marks action, ownership and focus; it is never a background for a section or card.

**The Glass Stays in the Drawing Rule.** The four slab tints belong to the stack illustration and its legend. UI surfaces stay neutral paper.

## Typography

**Display Font:** Manrope (via next/font, weights 400–800) with ui-sans-serif, system-ui fallback
**Body Font:** Manrope, same family

**Character:** One geometric grotesque doing everything; hierarchy comes from weight (800 against 400) and tracking (tight negative on display), not from a second family.

### Hierarchy
- **Display** (800, clamp(44px, 5.5vw, 80px), 1.0, -0.025em): the hero name only; no wrap.
- **Headline** (800, clamp(34px, 5vw, 68px), 1.04, -0.03em, max 24ch): section titles, written as short declarative sentences ending in a full stop, and the contact headline.
- **Title** (800, clamp(28px, 3.4vw, 46px), 1.05, -0.03em): project names.
- **Title small** (800, clamp(22px, 2.2vw, 28px), -0.02em): "Also built" cards, experience roles, sub-group headings.
- **Lede** (400, clamp(21px, 2.4vw, 35px), 1.3): hero subhead in Slate Navy.
- **Body** (400, 17px desktop / 16px under 640px, 1.55): bullets and paragraphs; contact sub capped at 44ch.
- **Label** (600, 15–17px): buttons, nav links, store links, skill row terms (700, 18px).
- **Chip** (600, 13.5px; 15px in the skills list): tech tags.

### Named Rules
**The Weight Contrast Rule.** Headings are always 800 with negative tracking; running text is always 400. Mid weights (500–700) are reserved for labels and controls.

**The Underline Rule Rule.** Every hero and section heading is followed by a short blue bar (66 × 3px, 2px radius). Headings carry no label above them.

## Layout

A single centred column capped at 1360px with fluid side padding (clamp 16–48px) and a sticky 72px nav (60px under 640px). Sections breathe with clamp(72px, 10vw, 140px) vertical padding.

The hero is a two-column grid (0.86fr copy / 1.14fr stack) at least one viewport tall (620–900px). The copy column is a flex column: name, rule, subhead, CTAs, then the tech icon row pushed to the bottom with margin-top auto so it anchors low against the plate. The stack plate sits bottom-aligned on the right with absolute callouts: layer names to the right with leader line and dot, protocol tags to the left.

Projects are a vertical list of full-width cards, each a two-column grid (1.12fr text / 0.88fr mini stack, min 300px). When a real screenshot exists it runs edge to edge across the top of the card, above both columns; cards without one open directly on the project head. Store link, bullets and chips indent to align with the project name past the glyph tile. Skills and experience use a 240px term column against a fluid content column with hairline row dividers.

Breakpoints: at 1000px everything collapses to one column (hero plate max 620px, mini stack max 540px, hero tech row loses its auto anchor); at 640px buttons go full width in pairs, left callouts hide, card indents drop, and two-column lists stack.

## Elevation & Depth

The UI is flat. Depth is carried by the illustration (isometric glass slabs, exploded spacing, dashed vertical guides) and by tonal layering of paper (ground, ground-2, card). The only UI shadow is a soft, low, navy-tinted pool that appears under a project card on hover, alongside a stronger border.

### Shadow Vocabulary
- **Card hover pool** (`box-shadow: 0 24px 48px -32px rgba(9, 21, 59, 0.28)`): project card hover only, paired with the slab lift.

### Named Rules
**The Depth Lives in the Drawing Rule.** Surfaces are flat at rest. Anything that needs to read as layered is drawn as a slab, not lifted with a shadow.

## Shapes

Gently softened rectangles throughout: 6px on buttons, chips, store links and focus outlines; 12px on cards; 14px on the project glyph tile; 2px on the heading rule. Borders are 1px hairlines (1.5px on the outline button). Circles appear only as small 6–7px dots: bullet markers and leader-line anchors. Dashed 1px lines are the guide language of the stack drawing; the legend swatch is a slab rendered as a skewed (-30deg) rounded rectangle with the slab edge colour.

## Components

### Buttons
Solid, flat and confident; no glow.
- **Shape:** gently rounded (6px), 58px tall (64px large), 30px side padding, label and icon separated by 14px.
- **Primary:** Electric Blue fill, white label; hover deepens to Pressed Blue and nudges the arrow 3px right.
- **Outline:** 1.5px Deep Navy stroke, transparent; hover fills navy with white text and nudges the icon 2px down (download).
- **Active:** presses 1px down. **Focus:** 2px Electric Blue outline, 3px offset.

### Chips
- **Style:** Paper White fill, 1px Hairline border, Slate Navy 600 text, 6px radius. Static tags, no states.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Card Paper on Cool Paper.
- **Shadow Strategy:** none at rest; card hover pool on project cards only (see Elevation).
- **Border:** 1px Hairline, darkening on hover.
- **Internal Padding:** clamp(22px, 3.6vw, 52px) for projects; clamp(20px, 2.6vw, 34px) for secondary cards.

### Project Screenshot Band
A real, user-supplied screenshot at the top of a project card, filling the full card width. It cancels the card padding with negative margins equal to it, keeps the card's 12px radius on the top corners only, sits on Shaded Paper and ends in a 1px Hairline bottom border. The image keeps its natural height; it is never cropped to a fixed ratio. On card hover it scales to 1.015 over 0.8s on the shared ease, alongside the card hover pool and the slab lift. Optional by design: a project without a real screenshot simply has no band.

### Navigation
Frosted Cool Paper bar with a hairline bottom border. Left: the "//." wordmark (800, 30px, -0.06em; italic blue slashes, navy dot). Right: four 600-weight links; hover draws a 2px blue underline from the left on the shared ease. Under 640px links shrink to 14.5px and tighten.

### Store Link
Small outlined pill-rect (1px Slate Navy, 7px radius, 15px 600) with the Play mark and an up-right arrow; hover inverts to navy. Only for real public store links.

### Built List
Slate Navy body bullets with a 7px Electric Blue dot marker. Used for "what I built" in projects, secondary cards and experience.

### Icons
Single outline family: 24px grid, currentColor stroke 1.7–1.8, round caps and joins. Brand marks that are natively filled are redrawn as outlines so a row never mixes fill and stroke.

### Exploded Stack (signature)
The hero plate: one raster of four isometric glass slabs, feathered into the ground on all edges by mask so no rectangle shows, floating 8px over 9s. Right callouts are two lines beside a navy leader and dot: the layer name (Database, Backend, Dashboard, Mobile) bold in Deep Navy, with the technologies beneath in 500 weight Slate Navy, smaller than the name and joined by middle dots. Left callouts are single-line cross-cutting concerns (500, Slate Navy) and hide under 640px.

### Mini Stack (signature)
Per-project figure built from four slab rasters cut from the same sheet, stacked at 20% offsets between two dashed guides, with layer name and detail labels to the right. Built layers render in full colour with a blue anchor dot; unbuilt layers are ghosted (grayscale, reduced contrast, 0.32 opacity) with a dash in place of detail, and their labels and leaders drop to a pale grey. Ghost labels are still text and must stay legible; express "not built" through the slab fade and the dash, not by washing the label below 4.5:1. On project hover or focus-within, the built slabs lift apart (9px per step from the centre, 0.6s on the shared ease), echoing the hero stack.

### Motion
One curve, `cubic-bezier(0.22, 1, 0.36, 1)`, for every eased transition. Hero copy and plate rise 16px in on load with 60–80ms staggers; sections reveal 18px up over 0.8s on scroll. Reduced-motion disables all animation and transition.

## Do's and Don'ts

### Do:
- **Do** show ownership by lighting and ghosting slabs: full colour for built, grayscale at 0.32 opacity for not built.
- **Do** keep Electric Blue for actions, ownership marks, the heading rule and focus; everything else is navy on paper.
- **Do** follow every major heading with the 66 × 3px blue rule and nothing above it.
- **Do** use Manrope 800 with negative tracking for headings and 400 for running text.
- **Do** keep primary buttons as flat Electric Blue fills that deepen to Pressed Blue on hover.
- **Do** draw new illustrative depth as glass slabs with navy edges and dashed guides, cut from the same plate language.
- **Do** keep icons to the single outline stroke style, redrawing filled brand marks as outlines.
- **Do** use the shared ease `cubic-bezier(0.22, 1, 0.36, 1)` and respect reduced motion.
- **Do** show a project screenshot as a full-bleed band at the top of its card, at the image's natural height, only when a real screenshot exists.

### Don't:
- **Don't** put a kicker, eyebrow or uppercase label above section headings.
- **Don't** add glow, coloured shadows or gradients to buttons.
- **Don't** use the slab tints as UI section or card backgrounds.
- **Don't** lift cards with shadows at rest; the only UI shadow is the soft hover pool under a project card.
- **Don't** show a hard rectangular edge around the stack plate; feather it into the ground.
- **Don't** invent links, logos, metrics or screenshots for work that has no public evidence.
