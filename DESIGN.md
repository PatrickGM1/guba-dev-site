---
name: guba.dev
description: The site is the rack Patrick works in. Steel rails, equipment in whole rack units, printed label tape, colour-coded cables.
colors:
  rack: "#c9c9c3"
  plate: "#e4e4df"
  plate-hi: "#f6f6f2"
  plate-lo: "#a9a9a3"
  text: "#131313"
  tape: "#fbfbf8"
  tape-2: "#ececea"
  ink: "#131313"
  rail: "#1c1c1e"
  rail-ink: "#f2f2ee"
  hole: "#0a0a0b"
  jack: "#111113"
  jack-slot: "#3b3b40"
  bezel: "#1f1f23"
  bezel-hi: "#45454c"
  bezel-print: "#d8d8d3"
  sled: "#2b2b30"
  sled-hi: "#3d3d44"
  handle: "#c9c9c4"
  handle-lo: "#8f8f8a"
  strap: "#1c1c1e"
  cable-blue: "#1e63d0"
  cable-yellow: "#f2b807"
  cable-green: "#22a35a"
  cable-orange: "#f26b1d"
  led-off: "#3a3a3e"
  led-amber: "#ffb020"
  led-green: "#35e06b"
  led-ident: "#2f78d8"
  plug-body: "#f3f4f2"
  plug-edge: "#8e918e"
  contact-gold: "#d9a441"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 7.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0"
  title:
    fontFamily: "Barlow, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Barlow, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  mono:
    fontFamily: "Sometype Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
rounded:
  none: "0"
  hairline: "1px"
  chip: "2px"
  cable: "3px"
  sheet: "1.5px"
  round: "50%"
spacing:
  u: "48px"
  half-u: "24px"
  rail-w: "44px"
  ear: "30px"
  panel-inset: "clamp(40px, 5vw, 96px)"
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  tape:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.28em 0.6em 0.24em"
  tape-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.tape}"
  tape-plain:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.28em 0.6em 0.24em"
  tape-blue:
    backgroundColor: "{colors.cable-blue}"
    textColor: "#ffffff"
  tape-yellow:
    backgroundColor: "{colors.cable-yellow}"
    textColor: "{colors.ink}"
  tape-green:
    backgroundColor: "{colors.cable-green}"
    textColor: "#ffffff"
  tape-orange:
    backgroundColor: "{colors.cable-orange}"
    textColor: "#ffffff"
  panel:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "0 {spacing.panel-inset}"
    height: "{spacing.u}"
  panel-footer:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.rail-ink}"
    rounded: "{rounded.none}"
    height: "{spacing.u}"
  port:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    padding: "8px 0"
    height: "{spacing.u}"
  port-num:
    typography: "{typography.mono}"
    width: "2ch"
  jack:
    backgroundColor: "{colors.jack}"
    rounded: "{rounded.chip}"
    width: "26px"
    height: "22px"
  nav-port:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    padding: "8px 0"
  cable-flag:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "4px 8px"
  server-bezel:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.rail-ink}"
    rounded: "{rounded.none}"
    padding: "22px 44px 24px 46px"
    height: "192px"
  service-tag:
    backgroundColor: "{colors.bezel-print}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.chip}"
    padding: "3px 8px 4px"
  sled:
    backgroundColor: "{colors.sled}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0 10px 10px"
    width: "240px"
    height: "120px"
  sled-tape-hover:
    backgroundColor: "{colors.cable-yellow}"
    textColor: "{colors.ink}"
  rocker:
    backgroundColor: "{colors.jack}"
    rounded: "{rounded.chip}"
    width: "40px"
    height: "20px"
  sheet:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(24px, 4vw, 48px)"
  code-block:
    backgroundColor: "{colors.tape-2}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.sheet}"
    padding: "16px 18px"
---

# Design System: guba.dev

## Overview

**Creative North Star: "Patch Panel Labels"**

The site is the rack Patrick works in. Two dark steel rails frame every page with a rack-unit ruler and square mounting holes; everything between them is equipment bolted in whole rack units (1U = 48px). Content sits on brushed-aluminium faceplates, headings are thermal print on white label tape with scissor-cut ends, and every link is an RJ45 port with a link LED and a jacket-coloured cable that leaves toward the right rail. The cable colour code has fixed meaning and is printed as a legend on the home page: blue is personal, yellow is university, green is writing, orange is off-site.

Density is that of a well-labelled cabinet: flat, physical, and busy with small hardware (screws, LEDs, vents, boots, latches) while the text itself stays sparse and large. Depth is mechanical, never atmospheric: a tape sits a millimetre proud of its plate, a bezel is recessed behind its ears, a cable has a highlight on top and a shade underneath. Two cabinets exist, white (default in light) and black (default under a dark OS scheme); the plate, rails, vents and bezels change, the tape stays white in both, because printed label tape is white in every cabinet. The build refuses the dark-mode developer portfolio: no hero, no muted intro paragraph, no chip row, no hairline card list.

Motion is one authored moment plus one response. On load the port LEDs run a link-up sequence (off, amber, green, staggered 80ms, once). Hover or focus on a port blinks its activity LED and reveals a cable flag naming the far end. Reduced motion shows green LEDs static and no flag transition.

**Key Characteristics:**
- Whole-rack-unit vertical rhythm (48px), enforced by CSS heights and padded to the boundary by `rack.js`.
- Text is print on tape or print on the bezel; nothing is set directly on the faceplate except port tails, descriptions and the legend.
- Four cable colours with fixed semantic meaning, never decorative.
- Hardware is drawn in CSS from gradients and pseudo-elements; no raster imagery, no icon fonts. Inline SVG only for brand marks on cable labels.
- Every page renders without JavaScript; the rocker and the U-snap are progressive enhancement.

## Colors

A powder-coated white cabinet with black steel rails, grey aluminium plates, white tape, and four saturated cable jackets; the black cabinet swaps the metal for near-black and leaves tape and cables untouched.

### Primary
- **Cable Orange** (`cable-orange`): off-site links. The default `--cable` on a port, the focus ring on every focusable element (2px solid, 3px offset), and the tape colour it implies for off-site headings. Orange is the most-clicked path (GitHub, LinkedIn) and the only cable colour in the first viewport's patch panel.
- **Cable Blue** (`cable-blue`): personal work. Personal project servers, the PROJECTS port on home, link underlines in blog prose (2px, 3px offset).
- **Cable Yellow** (`cable-yellow`): university work. University servers and the UNIVERSITY heading tape. Doubles as the text-selection highlight, the footer link hover, and the sled tape hover; yellow is the only cable colour whose tape carries dark ink instead of white.
- **Cable Green** (`cable-green`): writing. The BLOG port, the POSTS heading tape, blog-list ports, and the six-run loom beside a post.

### Secondary
- **Link Green** (`led-green`) and **Link Amber** (`led-amber`): LED states only, always with a matching 4–5px glow. Green is link-up; amber is the transient state in the link-up and the blink in the activity animation. Never used for text or surfaces.
- **Ident Blue** (`led-ident`): the identify/status LED on bezels and sleds, a fixed literal in the stylesheet, not a custom property.
- **Contact Gold** (`contact-gold`): the eight gold contacts at the tip of an RJ45 plug, drawn as a 1px repeating gradient.

### Neutral
- **Cabinet** (`rack`): the page ground behind the bay; visible only above and below the rails' equipment and in the scrollbar track. Black cabinet: `#0b0b0c`.
- **Faceplate** (`plate`) with **Plate Highlight** (`plate-hi`) and **Plate Shade** (`plate-lo`): every panel's surface, brushed with a 1px-in-3px vertical hairline, lit from the top edge and shaded on the bottom edge. `plate-lo` is also the only divider colour (port rows, sheet date rule, table rules, blockquote bar). Black cabinet: `#2c2c31` / `#3f3f45` / `#0b0b0c`.
- **Print** (`text`): body text on the faceplate. Black cabinet: `#ecece8`.
- **Tape** (`tape`) and **Ink** (`ink`): label tape and its thermal print, the blog sheet and its type. Identical in both cabinets. **Tape 2** (`tape-2`) is the greyer stock for code on the sheet.
- **Rail** (`rail`), **Rail Edge** (`rail-edge`), **Rail Ink** (`rail-ink`), **Hole** (`hole`): the steel frame, its inset edge line, the U numbers, and the mounting holes. The footer is a blanking panel in rail steel. Black cabinet: `#050506` / `#45454c` / unchanged / `#2a2a2e`.
- **Jack** (`jack`) and **Jack Slot** (`jack-slot`): every RJ45 socket, USB socket, and the rocker housing. Black cabinet: `#0a0a0b` / `#303035`.
- **Bezel** (`bezel`), **Bezel Highlight** (`bezel-hi`), **Bezel Print** (`bezel-print`): the 4U server front, its top lip, and the light grey ink used for descriptions printed on it and for the service tag stock. Black cabinet: `#17171a` / `#34343a`.
- **Sled** (`sled`), **Sled Highlight** (`sled-hi`), **Handle** (`handle`), **Handle Shade** (`handle-lo`): hot-swap drive sleds and their aluminium handle bar. Black cabinet sled: `#222226` / `#36363c`.
- **Strap** (`strap`): velcro straps across the loom. Black cabinet: `#3d3d44`.
- **Plug Body** (`plug-body`) and **Plug Edge** (`plug-edge`): the clear RJ45 plug and its outline.

### Named Rules
**The Legend Rule.** Cable colours mean what the legend says (blue personal, yellow university, green writing, orange off-site) and nothing else. A new link picks its colour by where it goes, never by taste.

**The White Tape Rule.** Tape and ink do not change between cabinets. Only metal changes: rack, plate, rails, holes, jacks, bezels, sleds, straps.

**The Coloured Ink Rule.** Coloured tape carries white print, except yellow, which carries black ink. Hovered tape inverts to black tape with white print.

## Typography

**Display Font:** Barlow Condensed 700 (with Arial Narrow, sans-serif); self-hosted at 600 and 700
**Body Font:** Barlow 400 / 500 / 600 (with Segoe UI, Helvetica, Arial, sans-serif); self-hosted
**Label/Mono Font:** Sometype Mono variable, used at 500 (with ui-monospace, SF Mono, Menlo, Consolas)

**Character:** Condensed, upper-case label print for anything that would be on tape or stamped on a bezel; a plain, slightly narrow grotesque for what a person says; a mono for what a machine prints (port numbers, U numbers, dates, addresses, code). No italic anywhere.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7.6vw, 6rem), 0.95): the page name on the widest tape in the name panel (PATRICK GHEBA, PROJECTS, BLOG). Upper-case, tight negative tracking, balanced wrap, tape padding reduced to 0.12em/0.22em so the print fills the strip.
- **Headline** (700, clamp(2rem, 5vw, 3rem), 0.98): a blog post title on the sheet. Upper-case, no tracking. Post `h2` is the same voice at 1.5rem / 1.05; post `h3` drops to Barlow 600 at 1.125rem.
- **Title** (500, 1.125rem, 1.3): `tape.plain`, the lines under the display tape and the name tape on a server bezel. Sentence case, no tracking; the only tape that wraps.
- **Body** (400, 1rem, 1.5): faceplate text and cable labels. Blog prose runs at 1.0625rem / 1.6 in a 72ch sheet; port and bezel descriptions at 0.9375rem, capped at 62ch and 56ch. Port tails and footer rows use 500 at 0.875rem.
- **Label** (700, 0.875rem, 1.1, 0.01em, UPPERCASE): panel heading tape. The same tape at 0.8125rem in the nav, 0.75rem on the legend and rocker, 0.9375rem on the wordmark. Legend terms use Barlow Condensed 600 at 0.8125rem / 0.02em.
- **Mono** (500, 0.8125rem, tabular numerals): port numbers, sled bay counters, dates in tails, sled URLs. 0.75rem for cable flags and `time` in tails; 0.6875rem for the service tag; 10px for the rail's U numbers. Code is Sometype Mono 400–500 at 0.875em inline and 0.875rem / 1.55 in blocks.

### Named Rules
**The Print Rule.** Barlow Condensed appears only upper-case and only on tape, bezel headings, or legend terms; it never sets a sentence. Sometype Mono appears only where a machine would print: numbers, dates, addresses, code.

**The Sentence Tape Rule.** Any tape longer than a label (the honest line, a project tagline) switches to `tape.plain`: Barlow 500, sentence case, wrapping allowed.

## Layout

The page is a three-column grid: a 44px rail, a fluid bay, a 44px rail (`rail-w`), `min-height: 100vh`. The left rail carries a mono U ruler counting down from 48, right-aligned 5px from the bay; the right rail carries holes only. Holes repeat every 16px (three per U, 7px square) in both rails.

The bay is a vertical stack of equipment, each piece a whole number of rack units: 1U top strip, 1U vent, 4U name panel, 1U or 2U patch panels, 1U legend, 1U footer blanking panel. Vents separate every panel and are the only empty rows; a half vent (24px) exists but is unused on the shipped pages. Panels inset their content by `panel-inset` (clamp(40px, 5vw, 96px)); mounting screws sit 12px in from each edge, centred on 1U panels and 24px from the top on tall ones. `rack.js` measures every `.panel`, `.server` and `.bezel` after fonts load and on resize, and pads the bottom to the next 48px boundary so panel edges land on the ruler.

The name panel is a 3fr / 2fr grid with the right column intentionally empty; tape lines beneath the display tape stack with 12px gaps and start 28px below. Ports are a three-column grid (number, jack, cable) with 16px column gap, 8px vertical padding and a 1U minimum row height; a port's description sits on a second row indented 22px. The cable runs from 16px behind the jack out through the panel's ear, stopping 18px short of the rail. Servers bleed to the rail edges (negative `panel-inset` margin), stand a fixed 4U tall, and are stacked with a 1U plate gap; their ears are 30px wide.

Blog list uses the same ports. A post is a 72ch sheet in a `minmax(0, 72ch) 1fr` grid with a 112px loom absolutely positioned to its right, running from 2U above the sheet to 3U below it so it appears to enter from the vent above and leave through the vent below. Straps repeat every 2U.

Spacing steps observed and reused: 8, 10, 12, 16, 18, 22, 24, 28, 36, 40, 48. All section heights resolve to multiples of 48.

**Responsive (max-width 720px):** rails narrow to 22px and lose the ruler; panel inset drops to 20px and screws shrink to 8px; the name grid collapses to one column and the name panel's vertical padding to 32px; port tails, cable flags and server IO blocks are hidden; the nav jack becomes a 12px round LED bezel; bezels become auto-height with a 4U minimum and their front row goes horizontal; sleds go full width at 88px; the loom is removed and the sheet takes the full bay.

## Elevation & Depth

Depth is machined, not lit. There is no ambient shadow vocabulary and no tonal layering scheme; every surface is flat colour with a one-pixel highlight on its top edge and a one-pixel shade on its bottom edge, the way an extruded or stamped part catches overhead light. The few real shadows are contact shadows under physical objects: tape, the sheet, a plug, a bezel, a handle.

### Shadow Vocabulary
- **Tape lift** (`filter: drop-shadow(0 1px 1px rgba(0,0,0,.22)) drop-shadow(0 3px 6px rgba(0,0,0,.14))`): every `.tape`. A filter, not a box-shadow, so the shadow follows the scissor-cut clip path.
- **Sheet lift** (`--tape-shadow`: `0 1px 1px rgba(0,0,0,.22), 0 3px 8px rgba(0,0,0,.14)`; black cabinet `.6` / `.45`): the blog sheet on the plate.
- **Plate edge** (`inset 0 1px 0 plate-hi, inset 0 -1px 0 plate-lo`): every panel. The footer uses `rail-edge` and `#000`.
- **Bezel seat** (`inset 0 1px 0 bezel-hi, inset 0 -1px 0 #000, 0 2px 4px rgba(0,0,0,.45)`): the server front, recessed behind its ears.
- **Jack lip** (`inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.35)`): every RJ45 socket and the rocker housing.
- **Cable jacket** (`inset 0 -2px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.25)`): every cable run and legend swatch; the loom rotates it 90° (`inset -2px 0 0` / `inset 1px 0 0`).
- **LED glow** (`0 0 5px <led colour>`; 4px on ident LEDs): the only glow in the system; off LEDs carry `inset 0 0 0 1px rgba(0,0,0,.5)` instead.
- **Screw** (`0 1px 1px rgba(0,0,0,.35)`): panel mounting screws.

### Named Rules
**The Edge-Light Rule.** A surface shows its thickness with one highlight pixel on top and one shade pixel below. No surface floats on a blurred shadow except tape, the sheet, and the plug, which are objects lying on a surface.

**The Glow Is An LED Rule.** Luminous colour appears only as an LED's glow. No glowing text, no glowing borders, no accent halos.

## Shapes

Rectilinear and stamped. Tape has no radius at all; its ends are scissor-cut with a clip-path polygon that leans each end a hair off square (top-right down 0.06em, bottom-right in 0.1em, bottom-left in 0.08em), never mirrored. Sockets, sleds, straps, handles, service tags and USB ports are 2px-radius rectangles; cables and legend swatches are 3px-radius pills the thickness of a cable (6px, 9px in the loom and NIC lead); the sheet and code blocks are 1.5px, the nearest thing to sharp a piece of paper can be. Fully round shapes are reserved for turned parts: screw heads, the power button, the key lock, LEDs. The RJ45 plug is asymmetric (1px at the boot, 3px at the tip) with a skewed latch on top. Borders are rare: the plug's 1px `plug-edge` outline and the sheet's tape strips are the only visible strokes; all other separation is a 1px `plate-lo` rule or an edge-light pair.

## Components

### Label Tape
White tape, black thermal print. Condensed upper-case at label size; scissor-cut ends; tape lift shadow; never wraps unless `plain`.
- **Shape:** clipped polygon, no radius.
- **Sizes:** display (page name), 1.125rem (name lines, bezel name), 0.875rem (panel heading), 0.8125rem (nav), 0.75rem (legend, rocker, cable flag).
- **Colour variants:** blue, green, orange with white print; yellow with black ink. Used only for headings that belong to a category (UNIVERSITY, POSTS).
- **Plain variant:** Barlow 500, sentence case, wraps.
- **Hover (when inside a link or button):** inverts to black tape with white print. On a sled the tape goes yellow instead.

### Port (the link)
The whole row is the link: a two-digit mono number, an RJ45 jack with a 5px LED, and a 6px cable run carrying the label tape and ending in a loose RJ45 plug pointed at the far end.
- **Cable colour:** `--cable` from the legend; orange by default, `.blue`, `.yellow`, `.green` override.
- **Jack:** 26×22px `jack` block with a 12×5px `jack-slot`, LED top-right; a 14×10px strain-relief boot (cable colour at 78% brightness) where the cable leaves it.
- **Label:** tape at 1rem, optional 14px inline brand SVG. **Tail:** optional 0.875rem Barlow 500 chip in plate colour riding the cable (a date in mono for posts). **Description:** optional second row at 0.9375rem, max 62ch.
- **Plug:** 34×16px, plug-body gradient, plug-edge outline, gold contacts at the tip, skewed latch on top, boot in cable colour.
- **Hover / Focus:** label tape inverts; the cable flag (mono 0.75rem tape, the far end's host) fades in 44px from the right end and slides up 4px (0.16s opacity, 0.22s `cubic-bezier(0.16,1,0.3,1)`); the jack LED runs `act` (green/amber, 0.5s, 2 steps, infinite). Focus ring 2px `cable-orange`, 3px offset.
- **Rows:** separated by a 1px `plate-lo` rule; 1U minimum each.
- **Narrow:** tail and flag hidden, cable shortened, description spans the full row.

### Navigation
The top strip is a 1U panel: wordmark tape at left (0.9375rem), two nav ports and the LIGHTS rocker at right, 18px apart.
- **Nav port:** 20×16px jack with a 4px LED and a 0.8125rem tape; 8px vertical padding for a 44px target. Hover inverts the tape and lights the LED green; `aria-current="page"` keeps the LED lit.
- **Rocker:** a 40×20px jack-coloured housing with two 15px paddles; the pressed paddle is darker and squashed to 85% height (0.15s). Left paddle = white cabinet, right = black. `aria-pressed` mirrors the cabinet and the label reads "Switch to the black/white cabinet". Stores `cabinet` in localStorage; the OS scheme wins when nothing is stored.
- **Narrow:** nav jack becomes a 12px round LED bezel; tapes drop to 0.75rem / 0.6875rem.

### Server (project)
A 4U machine bolted rail to rail on `/projects`, bleeding past the panel inset to the rails.
- **Bezel:** `bezel` with a 6px dot texture, bezel seat shadow, `rail-ink` type; 30px ears at each side in `#2c2c31` with one pan-head screw in each corner.
- **Front column:** 36px round power button (open-ring glyph drawn with borders) above three 8px LEDs: link (up), ident (blue), spare (off).
- **Identity:** name on a 1.125rem tape, a 0.9375rem tail, a description printed in `bezel-print` at 0.9375rem, max 56ch.
- **Sleds:** 240×120px `sled` blocks with a 4px dot texture, a full-width aluminium handle with a latch button, a link LED and an ident LED at top-right, a mono bay counter stamped bottom-right, and a plain tape (Barlow 500 0.9375rem, or mono 0.8125rem for a URL) with a 15px brand SVG. Each sled is a link; hover turns its tape yellow and blinks its link LED.
- **IO block:** two USB sockets, a round key lock, two 44×36px NICs; the first is patched with the server's category cable (9px lead) running behind the ear, the second is unpopulated. Hidden below 720px.
- **Service tag:** a mono 0.6875rem pull-out in `bezel-print` at bottom-left carrying the port number.
- **Stacking:** 1U of plate between machines; category colour via `.server.blue` / `.server.yellow`.

### Sheet (blog post)
A 72ch printed sheet on the plate, held by two translucent tape strips at its top corners (64×20px, rotated −4° and 3°). `tape` background, `ink` text, 1.5px radius, sheet lift shadow, `clamp(24px, 4vw, 48px)` padding. Title in headline tape voice, date in mono under a `plate-lo` rule, then prose at 1.0625rem / 1.6. Links underline in `cable-blue` (2px, 3px offset) and turn blue on hover; code sits on `tape-2`; blockquotes carry a 1px `plate-lo` bar. The green loom (six 9px runs, alternate runs at 92% brightness, strapped every 2U) runs beside it.

### Legend
A 1U panel: LEGEND tape at 0.75rem followed by four term/definition pairs; each term is a 22×6px cable swatch, a condensed upper-case colour name, and a Barlow 500 definition. Wraps with 10px × 22px gaps.

### Footer
A 1U blanking panel in `rail` steel with `rail-ink` print at 0.875rem / 500, dark screws, copyright at left, "Groningen" at right. Links hover to `cable-yellow`.

### LEDs
7px round; off is `led-off` with an inset ring. `.led.up` is green with a 5px glow; on load it runs `linkup` (off → amber → green, 0.6s, `cubic-bezier(0.16,1,0.3,1)`) delayed `0.25s + --i × 80ms`, once. Under `prefers-reduced-motion: reduce` every transition and animation is off and LEDs render green static.

## Do's and Don'ts

### Do:
- **Do** keep every section a whole number of rack units (multiples of 48px) and separate panels with a 1U vent; let `rack.js` snap what CSS cannot.
- **Do** put every heading on tape and every link on a port with a cable whose colour follows the legend.
- **Do** draw new hardware in CSS with the edge-light pair (1px highlight top, 1px shade bottom) and the existing jack, LED, cable and screw primitives.
- **Do** keep tape white and ink black in both cabinets; theme only metal (`rack`, `plate`, `rail`, `hole`, `jack`, `bezel`, `sled`, `strap`).
- **Do** use Barlow Condensed 700 upper-case for label print, Barlow 400/500 for sentences, Sometype Mono 500 for numbers, dates, addresses and code.
- **Do** use the orange focus ring (2px solid, 3px offset) on anything focusable and keep nav targets at 44px.
- **Do** give any new LED the link-up sequence with a `--i` stagger, and honour `prefers-reduced-motion` by rendering the lit state static.

### Don't:
- **Don't** assign a cable colour for contrast or decoration; blue, yellow, green and orange each mean one thing.
- **Don't** set text directly on the faceplate where tape or bezel print would carry it; the faceplate carries only tails, descriptions and the legend.
- **Don't** add a radius above 3px, a blurred ambient shadow, a glow that is not an LED, or a gradient that is not a machined part (screw, handle, plug, power button).
- **Don't** use hard offset shadows; tape and the sheet lift with a soft two-layer drop shadow.
- **Don't** introduce icon fonts, raster hardware imagery, or SVG beyond brand marks on cable labels; hardware is CSS.
- **Don't** use Barlow Condensed in sentence case or for body copy, and don't set Sometype Mono for prose.
- **Don't** load third-party fonts or scripts; everything is served from the site root.
