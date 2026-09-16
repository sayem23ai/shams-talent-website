# Shams Talent Management Services

A professional recruitment and Talent Acquisition support website for organisations across India and the United Arab Emirates.

## About the Business

Shams Talent Management Services provides recruitment capacity as an extension of an internal hiring team. The business supports sourcing, headhunting, screening, shortlisting and candidate coordination, helping employers spend more time interviewing, evaluating and selecting candidates.

Flexible recruitment support helps internal Talent Acquisition teams manage overloaded pipelines, niche searches and changing hiring demand without immediately increasing permanent headcount. Shams focuses on relevant, screened candidates and coordinated recruitment work. AHM Ventures is the strategic partner.

## Website Overview

The website explains the company positioning, services, reasons to work with Shams and recruitment process. Employers can explore recruitment support, while candidates can share their details and email their CV directly to the team.

## Key Features

- Six routes: Home, About, Services, Why Shams, Process and Contact.
- Responsive navigation with active page indicators and an accessible mobile menu.
- A substantial Home page explaining the business, hiring challenges, recruitment support, flexible capacity and India/UAE coverage.
- An editorial About page with saved imagery, structured points, process flows and a responsive pain/solution comparison.
- A balanced image-and-form contact section with synchronized India (+91) and UAE (+971) country controls.
- Direct telephone contact and CV email actions using centralized business details.
- A reusable navy footer on every route with navigation, contact details and strategic partner information.
- Responsive images through Next.js Image.
- A subtle moving Contact background and reduced-motion support.
- Visible keyboard focus states and explicitly labelled form fields.

## Design System

The site uses deep navy, a single gold accent, white and off-white surfaces, and Garamond/Georgia-led headings. Generous spacing, readable body text and modest corners support a premium recruitment consultancy appearance.

Shared tokens are defined in `app/globals.css`:

- Navy: `--navy` (`#0b2a5b`)
- Gold: `--gold` (`#E0B840`)
- Corners: `--radius` (`0.5rem`)

Body copy is sized separately from display headings to preserve visual hierarchy. Gold buttons use navy text for readability.

## Technology Stack

- Next.js 16.3.3 with the App Router
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4 with its PostCSS integration
- ESLint 9 with the Next.js configuration

## Project Structure

```text
app/
  layout.tsx          Shared navigation, footer and metadata
  globals.css         Design tokens and shared responsive styles
  page.tsx            Home page
  about/page.tsx      About and employer-focused business content
  services/page.tsx   Recruitment services
  why-shams/page.tsx  Reasons to work with Shams
  process/page.tsx    Recruitment process
  contact/page.tsx    Enquiries and candidate applications
components/
  Navbar.tsx          Responsive navigation
  Footer.tsx          Universal business footer
  Hero.tsx            Home hero
  ContactActions.tsx  Shared telephone and CV email actions
  ContactForm.tsx     Country synchronization and email handoff
  Reveal.tsx          Scroll-triggered content reveal
data/
  siteData.ts         Business details, navigation and service data
  about.ts            Ordered About content
public/               Static images and site assets
```

## Getting Started

Install Node.js 20.9 or newer and npm. From the project directory:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If PowerShell execution policy prevents the `npm` shim from running, use `npm.cmd` for the same commands.

For a production build and local production server:

```bash
npm run build
npm start
```

Run code checks with:

```bash
npm run lint
```

No environment variables or credentials are required for the current website.

## Assets

Static images live in `public/` and are referenced from the URL root. For example, `public/contact-hero.png` is served as `/contact-hero.png`. The Contact page uses that image as its primary visual. Process images similarly use `/process-hero.png`, `/process-screening.png` and `/process-placement.png`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Focused business introduction, service overview and contact routes |
| `/about` | Employer problems, recruitment capacity, differentiators and business promise |
| `/services` | Core, specialist and flexible recruitment services |
| `/why-shams` | Quality, partnership and reasons to choose Shams |
| `/process` | Understanding requirements through placement support |
| `/contact` | Employer enquiries, candidate details and direct contact actions |

## Contact Actions

Business details are maintained in `data/siteData.ts`. Contact Us opens WhatsApp in a new tab using `https://wa.me/971569178116`, preserving the existing UAE number. Send CV opens `mailto:tanveer@shamstalentmanagementservices.com?subject=CV%20Submission`. All company email links and the contact form use this email address. The India telephone contact remains available through the contact details using `tel:`.

The form prepares an email draft containing the entered details. Visitors must review and send the email in their own mail application, attaching a CV there if needed. The website does not upload CVs, store applications or claim a successful server submission. A configured email application is required for the draft handoff; the business email address is also visible for manual contact.

Country and phone prefix share one state: changing either control updates the other. Only India and the UAE are supported. Position Applying For is optional for employer enquiries; no open vacancies are implied.

## Responsive Design

Layouts adapt from narrow mobile screens to large desktops. The Contact image and form stack below the desktop breakpoint, service grids collapse to fewer columns, and navigation switches to a menu before the desktop links become crowded. The About comparison becomes stacked pain/solution pairs on mobile. Motion preferences are respected throughout.

## Deployment

Deploy to a platform supporting Next.js, such as Vercel, or run the production server on a Node.js host. Configure the project root, install dependencies, and use `npm run build`. For self-hosting, run `npm start` behind the hosting platform's HTTPS endpoint.

The repository includes security headers in `next.config.ts`. Review those headers against the hosting environment before release. No deployment is performed by this repository's setup instructions.

Generated output, dependencies, local environment files, logs and TypeScript build caches are excluded through `.gitignore`. Keep secrets out of source control if integrations are added later.

## Copyright

Copyright 2026 Shams Talent Management Services. All rights reserved. The website footer uses the current year.
