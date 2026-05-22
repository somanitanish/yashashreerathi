# Yashashree Rathi — Creator Media Kit Landing Page

## Problem Statement
Build a landing page replica of the provided creator media kit screenshots (Yashashree Rathi) and add a "Let's Build Together" footer/contact section with Email, Instagram, and Newsletter links. All "Get Started" / "Get in Touch" CTAs should scroll to the footer contact section.

## Architecture
- Static React (CRA + Tailwind + shadcn primitives available) single-page site
- No backend / no database required
- Sections: Header (sticky), Hero, Why Me, Audience (dark), Packages, Contact (footer)
- Fonts: Archivo Black (display) + Manrope (body)
- Brand palette: cream #FBF6F1, pink #EC1B5C, yellow #FFD500, ink #0E0E10

## Implemented (2026-05)
- Sticky header with active section highlight (IntersectionObserver) + scroll-to anchors
- Hero: Creator Media Kit 2026 pill, YASHASHREE / RATHI headline, bio, View Packages + Get in Touch CTAs, Total Reach 900K+ card, 4 stat cards (Instagram/LinkedIn/YouTube/Newsletter), decorative pink/yellow blobs
- Why Me: eyebrow + condensed display heading, 3 numbered cards (Positioning/Audience/Format), dark quote band with HYPE & IDEAL USER pink emphasis, 8 topic tag pills
- Audience: dark section, 4 persona cards with yellow icon tiles (Rocket/Wrench/Globe/Trending), white Platform Distribution card with progress bars, 4 country tiles (US/IE/GB/IN)
- Packages: 3 pricing tiers (SEED $500, GROWTH $1,500 Most Popular w/ pink border, TRUST SERIES $3,000) with checkmark feature lists, 3 extras cards (Add-Ons, Retainer, What I Don't Do)
- Contact / Footer: "LET'S BUILD TOGETHER" yellow eyebrow + "READY TO REACH THE RIGHT PEOPLE?" hero, 3 channel cards
  - Email: mailto:yashashreerathi@gmail.com
  - Instagram: https://www.instagram.com/yashashreerathi?igsh=Nmgxd3RpaXJoeGNt&utm_source=qr
  - Newsletter: https://beacons.ai/shecreatescommunity

## Backlog (P1/P2)
- Mobile hamburger nav (currently nav hides on <md, only header CTA visible)
- Subtle scroll-triggered fade animations for cards (currently only initial hero fade-up)
- Animated count-up for stat numbers
