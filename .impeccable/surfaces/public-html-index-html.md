---
version: 1
slug: "public-html-index-html"
primary_target: "public_html/index.html"
related_targets: ["projects_html/index.html","blog_src/layouts/_default/baseof.html","blog_src/layouts/_default/list.html","blog_src/layouts/_default/single.html","blog_src/layouts/index.html","public_html/style.css"]
---

# Surface: guba.dev (home, /projects, /blog)

Scope: full visual-world replacement across home (`public_html/index.html`), projects (`projects_html/index.html`), and the Hugo blog templates (`blog_src/layouts/`). One stylesheet, `public_html/style.css`. Visitor mode: Persuade on home and projects (recruiter decides Patrick is worth a conversation and opens GitHub); Read on blog list and post.

Audience and job: recruiters mid-screening on a laptop; peers on a phone. Ten-second read: name, context, GitHub, LinkedIn, what he has built. Tone confirmed serious, not cringe; the line "Absolutely no fucking idea what I'm doing." stays verbatim.

Constraints: content and links stay factual as-is; Repair row is removed from the home page (allowed by user), Repair stays on /projects as a built project; repair.guba.dev untouched. No invented projects, claims, or bio facts. No third-party requests: fonts self-hosted under `public_html/fonts/`. JS limited to /rack.js (pads panels and servers to whole rack units; runs the LIGHTS rocker) plus a two-line head script that applies the stored cabinet before paint; everything renders without it.

## Direction contract

THESIS: The site is the rack Patrick works in: every link is a labelled port with a colour-coded cable, every section a piece of rack equipment, every heading printed label tape. It refuses the dark-mode developer portfolio (hero, muted intro, chips, hairline list) that the current site is.

OWN-WORLD: Light powder-coated rack ground (#e6e6e2) framed by two dark steel rails (#1c1c1e) with rack-unit numbers counting down in tiny mono and square mounting holes every U. Content sits on brushed-aluminium faceplates (#d4d4cf) in 1U = 48px rows; all vertical rhythm is whole rack units. Text is black thermal print on white label tape (#fbfbf8) with cut ends and a real offset shadow. Cable colour code with fixed meaning, printed as a legend: blue = personal, yellow = university, green = writing, orange = off-site links. Each link is an RJ45 port with a link LED and a jacket-coloured cable run leaving to the right rail. Two cabinets: white (default in light) and black (default under prefers-color-scheme: dark); a rocker switch labelled LIGHTS in the top strip overrides and remembers. Tape stays white in both; plate, rails, vents and bezels go dark. On /projects each project is a 2U server bolted rail to rail: black bezel, ears over the rails with one screw per corner, name on a bezel tape, hot-swap sleds (long handle with latch button, LED pair, printed label) for every place the project lives, NIC with the category cable running behind the ear; the description is printed on the bezel; every server is a fixed 4U with a 1U plate gap between machines, and the front (power button, status LEDs, USB pair, key lock, two NICs, service-tag pull-out) is scaled to the 4U face. Blog post: the sheet is taped to the plate at its top corners and a green writing-trunk loom of six runs, velcro-strapped every 2U, runs beside it from the vent above to the vent below. Type: Barlow Condensed 700 uppercase for label print (display), Barlow 400/600 for body, Sometype Mono 500 for port numbers, U numbers, dates, and code only. Browser surfaces themed: yellow-tape selection, rail-coloured scrollbar, orange focus ring.

STORY: A recruiter reads the name on the widest tape, the university on the next, the honest line beneath it, then sees three ports labelled GITHUB / LINKEDIN / INSTAGRAM with cables running off-site and clicks one. A peer scrolls past the legend into PROJECTS and BLOG ports. Both leave believing he labels things properly and runs real equipment.

FIRST VIEWPORT (1440×900): Left rail 44px with U numbers from 42 down, right rail 44px with holes only. Row 1 (1U): top strip with guba.dev on a small tape at left and PROJECTS / BLOG as two labelled ports at right. Row 2 (1U): blank vent panel, held empty. Rows 3–6 (4U): the name panel: PATRICK GHEBA on one wide tape at 6rem Barlow Condensed, left-aligned, spanning ~60% width; the right 40% of the faceplate stays unmarked. Beneath, three short tapes stacked: "Computing Science @ University of Groningen." / "Absolutely no fucking idea what I'm doing." / "Groningen, NL". Row 7 (1U): patch panel ELSEWHERE with ports 01 GITHUB, 02 LINKEDIN, 03 INSTAGRAM, orange cables running to the right rail; this is the primary action and it sits fully inside the first viewport. Row 8: vent. Rows 9–10 (2U): GO ON THEN panel with ports 04 PROJECTS (blue) and 05 BLOG (green) and one-line descriptions. Then legend strip and a 1U footer.

FORM: Patch Panel Labels — datacenter cable colour code, Brady label tape, patch-panel port maps, rack-unit rulers. Position 1 on the ordered grounded list (IMPECCABLE’S PICK card), chosen by the user over the assigned Silkscreen Board. Seed key 638ee8ba. Code-led: no image generation in this harness. Signature interaction: patch tracing. Hover or focus on any port lights its LED and reveals a cable flag mid-run naming the far end (the destination host). One authored moment: on load the port LEDs run a link-up sequence, off → amber → green, staggered 80ms, once; reduced-motion shows green static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- Whether to mention the NTT / datacenter job on the home page (fact exists only in the blog post; not added).
- Blog categories/tags pages remain Hugo-generated and unlinked.
