# Nivara Motion

Lovable Prompt — Nivara Technologies (Dark Bento, Cinematic Motion — v4)

Paste this whole thing into Lovable. Reference for layout/UI style: a personal designer-portfolio site with a dark theme, red accent, rounded bento-style cards, a floating pill navbar, rotating service cards, and a floating "speak to me" contact pill. Reference for animation quality (scroll choreography, easing, motion polish): krissm.vercel.app. This build should combine both — the bento/card UI energy of the first with the cinematic motion craft of the second. Do NOT default to plain static cards with simple fade-ins — every card and section should feel alive.

Build a highly animated, dark, bento-grid style single-page website for Nivara Technologies, a web development studio that designs and builds premium websites and web applications for clients.

Visual System — DARK THEME

Background: near-black (#0A0A0B / #0D0D0F), NOT the light/ivory theme from earlier drafts — this is a full reversal back to dark.

Cards: slightly lifted dark gray/charcoal surfaces (#161618 or similar) with soft rounded corners (~20-24px radius), subtle border (1px solid rgba(255,255,255,0.06)) and soft shadow — true bento-grid feel, cards of varying sizes tiled together, not a uniform grid.

Text: off-white (#F5F5F2) for headlines, muted gray (#9A9A9E) for body/secondary text.

Accent color: vivid crimson/red (#E5383B-ish) used for highlighted words in headlines, CTA buttons, active/selected card borders, and small icon badges — used boldly but not everywhere (accent should pop against the dark cards, not flood them).

Typography: bold, condensed/tight sans-serif for headlines (big, confident, tech-forward — not the serif-display style from earlier drafts), clean sans for body copy.

Rounded pill shapes throughout: nav bar, buttons, tags/chips inside cards, the floating contact button.

Layout Reference (bento cards)

Cards are NOT all the same size — mix large feature cards with smaller supporting cards in an asymmetric grid, like a bento box. Some cards contain rotating/carousel content (see Services below), some are static stat cards, some are icon-badge cards.

Cards should feel tactile: hover lift (translateY(-6px), shadow deepens), subtle 3D tilt following cursor position on desktop (a light rotateX/rotateY transform tied to mouse position within the card, capped to a small angle so it feels subtle, not gimmicky).

Animation Requirements (still the priority — bento cards get equal motion craft, not less than the cinematic version)

Framer Motion for card-level animation: staggered entrance (staggerChildren ~100-120ms between cards) as each bento section scrolls into view, hover lift + tilt as above, layout animations where card content changes (e.g. carousel cards).

GSAP + ScrollTrigger for section-level choreography: pinned hero or feature moments where relevant, scrub-tied reveals for any section that benefits from scroll-linked motion (e.g. a headline that builds word-by-word as the user scrolls into the hero).

Lenis for smooth/inertia scrolling site-wide, wired into ScrollTrigger.

Rotating/carousel cards (see Services) auto-cycle their content every ~3-4s with a crossfade + slight scale, pausable on hover, and can also be advanced by small in-card dot indicators.

Floating pill navbar and floating contact pill both have entrance animations (slide/fade in after hero loads) and subtle idle motion is NOT needed — keep them stable once in place, only animate on hover/scroll-state changes (e.g. background/blur intensifies on scroll).

Magnetic hover effect on all primary buttons (button translates slightly toward cursor within a bounded radius).

Respect prefers-reduced-motion: keep opacity/position transitions, disable tilt/parallax/magnetic effects.

Hero — No Human Mascot

The reference video uses a 3D human avatar/mascot — skip that for Nivara (a dev studio reads more credible with an abstract/brand mark than a cartoon person). Instead:

Use an animated abstract centerpiece: a glowing geometric orb/shape, an animated gradient blob, or an abstract 3D object (e.g. a slowly rotating wireframe cube/sphere with the accent color) that pulses or drifts subtly (continuous slow rotation/float loop, ease: none, looping).

Headline: bold, tight, big — an accent-colored word or two within it (e.g. "We build websites that feel inevitable" with "websites" in crimson). Builds in via word-stagger as the page/section loads.

Subtext: one line on what Nivara does.

Primary CTA button (pill-shaped, crimson) — magnetic hover.

No fake trust-stat row (no "99+ happy clients" — you don't have that yet). Instead, small badge chips under the headline: "Cloud-native builds", "React & TypeScript", "Deployed on Cloudflare" — honest, capability-based trust signals instead of client-count claims.

Site Sections

Floating Pill Navbar — fixed, floating (not full-width bar — a centered rounded pill container with padding), logo "NIVARA" left, nav links (Services, Process, Inquire) center/right, crimson CTA pill button ("Let's Talk") on the far right. Background blur/opacity increases slightly on scroll.

Hero — as detailed above.

What We Help You Build (Services) — bento grid of service cards. Make one larger "featured" card a rotating carousel (auto-cycles through 3-4 service descriptions with icon + short copy, like the reference's rotating "Digital Design" card), surrounded by smaller static cards for the remaining offerings (Web Design, Web Development, E-commerce, Ongoing Support). Each card: icon badge (crimson accent), title, 1-2 line description, small tag chips.

Stack / Tools Row — a horizontal bento card row showing the technologies Nivara builds with as icon chips (React, TypeScript, Tailwind, Supabase, Cloudflare) — visually similar to the reference's "Tools that I use" row.

Method / Process — bento cards laid out as a sequence (Discover → Design → Build → Launch → Support), each a small card with a step number, title, short description; connecting line or subtle directional cue between them, animated in as the user scrolls.

Testimonials — "Hear what our clients have to say" style header, card-based quote layout (can be a single large card or a small carousel), placeholder testimonial clearly marked [REPLACE WITH REAL REVIEW] since none exist yet.

Floating Contact Pill — persistent floating pill button (bottom-right or bottom-center, like the reference's "Speak to me"), always visible after the hero, icon + short label ("Let's talk"). Clicking opens the lead-capture modal.

Inquire Modal (Lead Capture) — triggered by the floating pill or the nav CTA:

Fields: Name, Phone Number, acknowledgment checkbox ("I agree to be contacted by Nivara Technologies about my project").

Validation: required name, phone format check, checkbox required.

Submit → store in Supabase table leads (name, phone, acknowledged, created_at).

Success state: replaces form content with a confirmation message + checkmark draw-in animation, not a plain alert.

Modal: scale+fade entrance (0.95→1, opacity 0→1), backdrop blur fades in slightly slower, focus-trapped, Esc/backdrop-click to close.

Footer — logo, nav repeat, social links, "Nivara Technologies · © [year]". Simple entrance fade, no heavy animation needed here.

Explicitly Excluded

No projects/portfolio/"Latest Work" section.

No literal 3D human avatar/mascot (use the abstract animated centerpiece instead).

No fake client-count or "happy clients" stat.

Technical Requirements

React + TypeScript + Vite + Tailwind CSS, static build, deploys to Cloudflare Pages.

Framer Motion, GSAP + ScrollTrigger, Lenis as specified above.

Supabase for the leads table as specified.

Fully responsive — on mobile, simplify card tilt/parallax to straightforward staggered fade+slide, keep the rotating carousel card and the floating contact pill (repositioned to not block content).

Semantic HTML, correct heading hierarchy, alt text, keyboard-accessible modal and nav.

Basic SEO: meta title/description, Open Graph tags, favicon.

Optimize any imagery/animated assets for fast load.

Content to Be Provided Separately

Nivara logo/wordmark

Final hero headline/tagline wording

Confirm accent red shade (or provide an alternate brand color if crimson isn't right)

Real testimonial(s) once available

Build as one scrollable page. Prioritize: (1) the hero's animated centerpiece + headline build, (2) the rotating services card, (3) card hover/tilt polish across the bento grid — these three are what will make it feel premium rather than templated.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/19ca7f41-3f5f-4334-bfe1-735559916567).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
