Design a complete, multi-page website for **Ascenda** (ascenda.ai) — an AI workflow automation company for small and growing businesses. The site has 8 distinct pages/tabs delivered as separate Figma frames at 1440px wide desktop. Also include a mobile version (390px wide) for the Home page.

---

## Brand Identity

**Company name:** Ascenda
**Tagline:** Scale with AI-powered execution, not bloated headcount.
**Brand metaphor:** A modern exoskeleton for the company — sharp, tech-forward, high-performance, futuristic. Think Spider-Man suit, not slow consulting firm.
**Tone:** Confident, direct, no fluff. Speaks to founders and operators, not tech teams.

**Logo:** Three overlapping ellipses rotated at 0°, 60°, and 120° — like a 3D orbital ring system. Drawn in the brand orange. Next to the word "Ascenda" in the nav.

**Colors:**
- Background dark: `#0f0f1e`
- Background section: `#1A1A2E`
- Accent / brand orange: `#E85D2A`
- Text primary: `#FFFFFF`
- Text muted: `#888888`
- Text dim: `#666666`
- Card background: `rgba(255,255,255,0.03)` on dark, `#FFFFFF` on light sections
- Light section background: `#F5F5F7`
- Border subtle: `rgba(255,255,255,0.06)`

**Typography:**
- Font family: **Sora** (Google Fonts)
- Hero H1: 60px / weight 600 / tight letter-spacing
- Section H2: 40px / weight 600
- Card titles: 16–18px / weight 500
- Body: 14–15px / weight 300–400
- Labels/tags: 10–11px / weight 600 / letter-spacing 0.12em / ALL CAPS

**Buttons:**
- Primary: filled `#E85D2A`, white text, 8px border radius, 14px 36px padding
- Hover state: brightness +15%, 1px lift
- Secondary: transparent, 1px border `rgba(255,255,255,0.15)`, white text

**Card style:**
- `rgba(255,255,255,0.03)` background
- `1px solid rgba(255,255,255,0.06)` border
- 14px border radius
- Hover: border-color shifts to `rgba(232,93,42,0.3)`, 4px lift

---

## Site Structure — 8 Pages / Tabs

Design each as a separate Figma frame labeled with the page name.

---

### PAGE 1 — Home

**Nav (fixed, 1440px wide):**
- Left: Logo (three-ellipse SVG in orange) + "Ascenda" in orange, 17px Sora weight 400
- Right: Links — About | Solutions | Process | Team | Contact — then primary CTA button "Book a Discovery Session"
- Background: `rgba(15,15,30,0.85)` with blur, 1px bottom border subtle

**Hero section (full viewport height, centered):**
- Background: `#1A1A2E`
- Centered large SVG logo (three overlapping ellipses, 150×150px) with orange glow radial gradient behind it — soft diffuse glow at 40px blur
- H1: "Scale execution, not headcount." — 60px Sora 600, white, centered, line break after comma
- Subheadline: "Ascenda helps growing companies scale smarter by using AI to reduce manual work, improve workflows, and unlock more efficient execution — acting as the operating layer that helps teams do more with fewer errors, less friction, and better use of human talent." — 19px, color #888, max-width 580px, centered
- Primary CTA button centered: "Book a Free Discovery Call"
- Stats bar below CTA (separated by a subtle top border): three columns — "Starting at $2,500 / Full implementation" | "~3 mo / Average break-even point" | "80%+ / Of repetitive tasks can be automated" — stat number in white 32px bold, label in #555 12px below
- Subtle gradient fade at bottom of hero into next section

**About / Mission section (light background #F5F5F7):**
- Section label: "WHAT ASCENDA IS" — orange, 11px caps
- H2: "The AI operating layer for growing businesses."
- Pull quote (italic, large, muted): "Help companies use AI to operate more efficiently and scale more intelligently."
- Body copy: "Ascenda exists to help businesses scale in the AI era without relying on inefficient growth through headcount alone. Think of it as the suit that amplifies what your team can do — more speed, fewer errors, stronger execution. Not a software company, not a tool vendor. A sharp, versatile operating partner."
- 4 value pillars below in a grid (white cards with 1px border, hover orange border):
  - "Faster execution" — Workflows move at machine speed. Tasks that took hours happen in seconds.
  - "Fewer errors" — Human error disappears from repetitive processes. Same task, every time, perfectly.
  - "Better visibility" — Automated reporting means you always know what is happening, without asking anyone.
  - "Stronger follow-through" — Nothing falls through the cracks. Leads, tasks, reminders — all automatic.

**Who it is for (ICP) section (dark `#1A1A2E`):**
- Section label: "WHO WE WORK WITH" — orange
- H2: "Built for founders and operators who feel the drag."
- 3 cards in a row:
  - Tag: PRIMARY FIT | Title: "Founder-led businesses with traction" | Body: You have proven the model. Now every new client means more manual coordination and you can feel the friction compounding.
  - Tag: PRIMARY FIT | Title: "Human-capital-intensive operations" | Body: Headcount keeps rising because workflows are still manual. You are hiring people to do things AI should already be doing.
  - Tag: WHO MAKES THE CALL | Title: "Founder, CEO, or operations leader" | Body: The person who feels operational drag most acutely — and has the authority to fix it.

**Pain points section (dark `#0f0f1e`):**
- H2: "Where manual work is slowing your business down"
- Subhead: muted body text
- 4 cards in 2×2 grid, orange title, muted body:
  - "Delayed Response" — Leads and requests sit too long. Speed drops, opportunities fade.
  - "Work Falling Through the Cracks" — Follow-up depends on memory. Tasks get missed.
  - "Repetitive Work" — Skilled people stuck doing things that should already be automated.
  - "Team Overload" — More growth means more coordination, more exceptions, more drag.

**ROI / Math section (dark `#1A1A2E`):**
- H2: "The math is simple."
- Subhead: "Every manual task has a real cost. Automation replaces that cost with savings and speed."
- Two-column layout:
  - Left: headline "Replace a manual task. Keep the result." + 2 paragraphs about break-even at 2–3 months
  - Right: dark card with orange top border (2px), labeled "Real example — Admin and Follow-up Role":
    - Row: "Current monthly salary" → "-$1,800" (red)
    - Row: "Ascenda implementation (amortized 6 mo)" → "-$583" (red)
    - Orange total box: "Monthly savings after automation" → "+$1,217" in large orange
    - Italic note below: "Based on a $3,500 implementation. After month 6, full salary recovered every month — permanently."

**Software-agnostic banner (dark `#0f0f1e`, border top and bottom):**
- Two-column: left has label "OUR APPROACH" + H3 "We work on top of what you already have." Right has body copy explaining software-agnostic positioning — no ripping out tools, builds on CRM / email / WhatsApp / spreadsheets.

**Solutions / Services section (light `#F5F5F7`, dark text):**
- H2: "How we create operational leverage"
- Subhead about diagnostic entry point — workflow review, opportunity assessment, efficiency audit
- 4 white cards numbered 01–04 with orange number label, dark title, muted body:
  - 01 AI Opportunity Audit — assess workflows and bottlenecks
  - 02 Workflow Strategy and Design — map systems and automations
  - 03 Implementation and Integration — build and integrate into existing tools
  - 04 Optimization and Scale — refine and evolve workflows

**Process section (dark `#1A1A2E`):**
- H2: "How Ascenda works"
- 4 steps in a horizontal row — each with a circular outlined number in orange, title, and short description:
  - 1 Assess | 2 Design | 3 Implement | 4 Refine

**Outcomes section (dark `#0f0f1e`):**
- H2: "What better systems make possible"
- 5 cards with small SVG icon, short outcome text:
  - Less manual work across the team
  - Faster response and follow-through
  - More consistency across critical workflows
  - Greater capacity without linear headcount growth
  - Smarter operations built to scale

**CTA section (dark `#1A1A2E`):**
- Centered logo icon with orange glow
- H2: "The AI operating layer your business needs."
- Subhead + primary CTA button "Book a Discovery Session"

**Footer:**
- Centered logo + "Ascenda" in orange
- "2026 Ascenda. All rights reserved." in muted tiny text

---

### PAGE 2 — About

**Hero:**
- Dark background `#1A1A2E`
- Label: "ABOUT ASCENDA"
- H1: "The suit that amplifies what your team can do."
- Subhead quoting the Spider-Man metaphor: "Ascenda is not a software company or a tool vendor. It is the AI-enabled operating layer — the exoskeleton — that makes teams faster, sharper, and more scalable."

**Mission block:**
- Large centered text: "Ascenda exists to help companies operate like they belong in the AI era." — white, 28px, italic, max-width 760px
- Supporting paragraph from business summary about smarter path vs. more people

**Before / After transformation section:**
- Two columns side by side
- Left column (dark card, subtle red left border): "Before Ascenda" — bulleted list: businesses grow by adding people, teams spend too much time on repetitive execution, human errors create rework, follow-through is inconsistent, scaling creates more chaos than leverage
- Right column (dark card, orange left border): "After Ascenda" — bulleted list: workflows move faster, fewer errors slow the business, follow-through improves, more output without headcount growth, AI becomes part of execution not just an idea

**What makes Ascenda different:**
- 5 cards in a row, each with a short label and differentiator statement:
  - "Not a software company" — No proprietary platform to sell you.
  - "Not a rigid agency" — Agile, practical, adapts to your reality.
  - "Starts from pain" — Business problem first, technology second.
  - "Beyond setup" — Support ongoing execution, not just configuration.
  - "Software-agnostic" — Works on top of tools you already use.

**Brand values pillars:**
- "Innovative" / "Versatile" / "Sharp" / "Future-facing" / "High-performance"
- Simple single-word labels in orange, each with a one-sentence description below

**Team section (same as Team page — abbreviated):**
- Two cards: Mike Godinez + Antonio Zarate with initials avatar, name, role, short bio, LinkedIn tag, skill chips

---

### PAGE 3 — Solutions

**Hero:**
- Label: "WHAT WE DO"
- H1: "AI-enabled execution, built around your workflows."
- Subhead: "We do not sell software. We learn your business, identify every workflow that should already be automated, and build the systems to do it."

**Offer Architecture section:**
- H2: "Three paths depending on your needs."
- 3 large cards (full width stacked):
  - Card 1 — "Workflow Review and AI Diagnostic" (entry offer): We start by listening. A deep-dive into your operations to identify where automation creates the highest ROI. This is how every engagement begins.
  - Card 2 — "Setup + Expert Support Hours": We design, configure, and improve AI-enabled workflows. Ongoing expert support keeps systems running and improving as your business evolves.
  - Card 3 — "Setup + Outsourced Execution": When your team lacks the bandwidth or discipline to sustain AI workflows internally, we become part of your operating engine. Not just setup — we help run it.

**Services detail grid:**
- 4 cards: AI Opportunity Audit / Workflow Strategy and Design / Implementation and Integration / Optimization and Scale (same copy as homepage)

**Process steps (horizontal timeline):**
- 1 Assess → 2 Design → 3 Implement → 4 Refine
- Each with numbered circle (orange outlined), title, and body

**Use cases section (two tabs — Operations | Marketing):**

*Operations tab active by default:*
- 6 cards in 2-column grid:
  - Real Estate / Rentals — Automated inquiry response and booking coordination
  - Professional Services — Lead follow-up and appointment scheduling
  - Retail / E-commerce — Order tracking, customer updates and support triage
  - Logistics / Operations — Status reporting, routing and exception alerts
  - Restaurants / Food and Bev — Reservations, review responses and supplier coordination
  - Any Industry — Internal reporting and data consolidation

*Marketing tab (shown as alternate state):*
- 6 cards in 2-column grid:
  - Marketing Content — Automated blog, social, and email content creation
  - Marketing Social Media — Post scheduling, caption generation, engagement monitoring
  - Marketing Email — Automated email sequences and campaign personalization
  - Marketing Lead Generation — Lead capture, scoring, and CRM auto-population
  - Marketing Analytics — Automated performance reporting and campaign insights
  - Marketing Ads — Ad copy generation and audience targeting automation

**CTA strip at bottom:**
- "Start with a free diagnostic." + "Book a Discovery Session" button

---

### PAGE 4 — Use Cases

**Hero:**
- H1: "What we actually automate."
- Subhead: "Every business is different, but the patterns are the same. Here is what we have seen and solved across operations and marketing."

**Filter tab bar:**
- Two toggle tabs: "Operations" (active) | "Marketing"
- Show all 12 use case cards in a 3-column grid
- Each card: industry tag in orange caps, bold title, body description, "-> Replaces: [role/task]" in orange at bottom

**Industries covered visual:**
- Row of industry labels: Real Estate | Professional Services | Retail | Restaurants | Logistics | Any Industry | Marketing
- Each as a small pill tag

---

### PAGE 5 — Process

**Hero:**
- H1: "From audit to automation in four steps."
- Subhead: "We do not sell software. We learn your business and build the systems."

**4-step horizontal flow (large, prominent):**
- Each step has a large number (80px, very muted color), title (24px), and full description (4–5 lines)
- Step 1 ASSESS — "We sit with your team, map every workflow, and identify every task being done manually that should not be. You get a prioritized list of automation opportunities ranked by ROI."
- Step 2 DESIGN — "We design the automation architecture. Which tools, which triggers, which workflows. We account for your existing systems so nothing breaks and everything integrates cleanly."
- Step 3 IMPLEMENT — "We build it. AI agents, automated workflows, smart follow-ups, dashboards — all connected to the tools you already use. No disruption to your team, no new software to learn."
- Step 4 REFINE — "We monitor performance, fix edge cases, and keep improving the system as your business evolves. Ongoing support to keep everything running at full performance."

**Timeline visual:**
- Horizontal connector line between step numbers
- Orange accent line animating from left to right (show as static design with full line)

**Delivery models section:**
- H2: "Two ways we work with you."
- Two large cards side by side:
  - "Service Hours and Expert Support" — Design, configure, improve, and maintain AI-enabled workflows through ongoing expert support. Best for teams that have the discipline but need the expertise.
  - "Outsourced Execution" — We not only set up the workflow — we help operate parts of the process. For teams that need execution, not just configuration.

---

### PAGE 6 — Team

**Hero:**
- H1: "Two operators who have built real businesses."
- Subhead: "Not consultants who have only worked in presentations. Founders who understand operations, have run businesses, and know what it takes to make change stick."

**Team cards (large, 2 columns):**

Card 1 — Mike Godinez:
- Large initials avatar "MG" (56px circle, orange background subtle, orange border, orange text)
- Name: Miguel "Mike" Godinez (large, 22px)
- Role: Co-Founder — Operations and Strategy (orange, 13px)
- LinkedIn tag: linkedin.com/in/miguelgdelarosa
- Bio (full): "Mike is a serial entrepreneur with hands-on experience across real estate, short-term rental management, and startup investing. He has a rare ability to spot where businesses are leaking money through inefficiency — and an operator's instinct for which automations will actually move the needle. If it can be turned into a system, Mike will build the strategy around it."
- Chips: Business Operations | Real Estate | Airbnb Management | Startup Investing | Strategy

Card 2 — Tony Zarate:
- Initials avatar "TZ"
- Name: Antonio "Tony" Zarate
- Role: Co-Founder — AI and Automation Lead
- LinkedIn tag: linkedin.com/in/antoniojzaratel
- Bio (full): "Tony leads AI implementation and workflow architecture at Ascenda. He translates messy, real-world business operations into clean, intelligent automated systems that work in production — not just in demos. If a process can be automated, Tony finds the most elegant way to do it and makes sure it actually works."
- Chips: AI Systems | Workflow Design | Implementation | Claude / Anthropic | Integration

**Why us section below team:**
- 3-column: "We have built businesses" / "We speak operator" / "We deliver, not just advise"
- Each with a short supporting sentence

---

### PAGE 7 — FAQ

**Hero:**
- H1: "Good questions."
- Subhead: "Everything founders and operators usually want to know before getting started."

**Accordion FAQ list (full width, max 720px centered, 7 items):**
Each item: question in white 14px bold, "+" icon right-aligned in orange, answer revealed below on click (show first item open as design state)

1. Do you replace the software and tools we already use?
   — No. Ascenda is software-agnostic. We build automations that work on top of your existing tools — your CRM, email, spreadsheets, WhatsApp. We never ask you to rip out your stack or buy new platforms.

2. Do I need to be technical or know anything about AI?
   — Not at all. We handle everything end to end. You tell us how your business works and we handle the rest. Most clients never touch the technology directly.

3. What tools do you use?
   — We work with leading AI platforms including Claude by Anthropic, plus automation tools that connect to your existing software. We adapt to your stack, not the other way around.

4. How long does implementation take?
   — Most projects go from audit to live automation in 2 to 4 weeks. We start with the highest-impact workflows first so you see results fast.

5. Will my employees lose their jobs?
   — That is your decision. Many businesses use automation to free their people from repetitive tasks for higher-value work. Others reduce headcount. We give you the full picture and you decide.

6. Do you automate marketing as well as operations?
   — Yes. Content creation, social posting, email sequences, lead capture, CRM population, ad copy generation, and performance reporting. Marketing automation is one of the fastest areas to see results.

7. What if I am not sure automation is right for my business?
   — That is exactly what the free discovery call is for. We will give you an honest assessment — even if the answer is not yet. No pressure, no hard sell.

**CTA strip:** "Still have questions? Let us talk." + button

---

### PAGE 8 — Contact

**Hero:**
- H1: "Start with a free discovery call."
- Subhead: "45 minutes with Mike or Tony. We map your operations, identify the highest-impact automation opportunities, and give you a clear picture — no obligation."

**Two-column layout below hero:**

Left — Contact form card (dark, orange top border 2px):
- Title: "Book a Discovery Session"
- Subtitle: "We will reach out within 24 hours."
- Fields:
  - First Name / Last Name (2 columns)
  - Work Email (full width)
  - Company Name (full width)
  - Industry (dropdown) / Team Size (dropdown) — 2 columns
  - Textarea: "Biggest operational challenge" (3 rows)
  - Dropdown: "Have you tried automation before?"
- Submit button full width: "Book My Free Discovery Call" (orange, white text)

Right — Contact info column:
- "Response Time" block: "Within 24 hours. Usually much faster — we run lean."
- "Email" block: tony@ascenda.ai (clickable)
- WhatsApp card (green tinted background, green border): "Chat on WhatsApp — Fastest way to reach us — +52 81 2010 9580"
- "What to Expect" block: description of the 45-minute call format

---

## Component Library to Include

Create a separate Figma frame labeled "Components" containing:

1. **Logo** — Three overlapping ellipses SVG + wordmark
2. **Nav bar** — dark version + light version
3. **Buttons** — Primary (orange) / Secondary (outlined) / Disabled states
4. **Cards** — Dark card / Light card / Featured card (with orange top border) / Team card / Use case card
5. **Form fields** — Input default / focused (orange border) / error state / select dropdown
6. **Tags/chips** — Skill chip / Industry tag / Section label
7. **FAQ item** — Closed state / Open state
8. **Section header** — Label + H2 + subhead stacked
9. **Stats bar** — Three-column stat component
10. **Avatar** — Initials circle (orange)
11. **LinkedIn tag** — Small bordered link with SVG icon

---

## Mobile Frame (390px — Home page only)

Replicate the Home page at 390px width with:
- Nav: logo left, hamburger menu right (no links shown)
- Hero: stack vertically, H1 at 38px, stats bar wraps to single column
- All grids collapse to 1 column
- Cards stack full width
- Buttons full width
- Font sizes scale down appropriately (H2 at 28px, body at 14px)

---

## Design Notes for Figma AI

- Use Auto Layout throughout for all cards, grids, and sections
- Maintain 80px top/bottom padding on all sections (40px mobile)
- Max content width: 1000px centered (1100px for use cases)
- All section labels should be in orange, 11px, caps, 0.12em letter spacing
- Cards should have 14px border radius consistently
- The orange glow effect behind the hero SVG logo: use a radial gradient from `rgba(232,93,42,0.35)` to transparent, 300px diameter, 40px blur
- Hover states on all interactive elements
- Light/dark mode: most sections are dark. Solutions cards and About pillars use the `#F5F5F7` light background with white cards and dark text
- The site alternates section backgrounds: darker → dark → light → darker → dark — creating visual rhythm
- Include a 1px subtle bottom border on the nav