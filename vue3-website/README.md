# Vue 3 Official Website (Simplified)

A simplified official website for Vue 3, featuring a documentation-style layout and clear content structure. Built with Vue 3, TypeScript, and Vite.

## Project Overview

This project is a simplified recreation of an official framework website (Vue 3 style), focusing on:
- Clean, documentation-style UI
- Clear navigation and content structure
- Responsive design for desktop and mobile
- Accessibility best practices

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite 5
- **Routing**: Vue Router 4
- **Package Manager**: pnpm
- **Styling**: Plain CSS with CSS Variables

## Installation

### Prerequisites

- Node.js 18.0 or higher
- pnpm (install via `npm install -g pnpm`)

### Setup

```bash
# Navigate to project directory
cd vue3-website

# Install dependencies
pnpm install
```

## Development

```bash
# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000`

## Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
vue3-website/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── src/
│   ├── main.ts             # Application entry point
│   ├── App.vue             # Root component
│   ├── vite-env.d.ts       # TypeScript declarations
│   ├── assets/
│   │   └── styles/
│   │       └── main.css    # Global styles
│   ├── components/
│   │   ├── ApiCard.vue     # API reference card component
│   │   ├── AppFooter.vue   # Global footer component
│   │   ├── AppHeader.vue   # Global header with navigation
│   │   ├── CodeBlock.vue   # Code snippet display component
│   │   ├── DocSidebar.vue  # Documentation sidebar navigation
│   │   └── FeatureCard.vue # Feature highlight card component
│   ├── data/
│   │   ├── about.ts        # About page content
│   │   ├── api.ts          # API reference data
│   │   ├── guide.ts        # Guide sections content
│   │   ├── home.ts         # Home page content
│   │   └── navigation.ts   # Navigation items
│   ├── layouts/
│   │   ├── DefaultLayout.vue  # Standard page layout
│   │   └── DocsLayout.vue     # Documentation page layout
│   ├── pages/
│   │   ├── AboutPage.vue   # About page
│   │   ├── ApiPage.vue     # API reference page
│   │   ├── GuidePage.vue   # Guide/documentation page
│   │   └── HomePage.vue    # Home/landing page
│   ├── router/
│   │   └── index.ts        # Vue Router configuration
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   └── utils/
│       └── index.ts        # Utility functions
```

## Pages & Routes

| Route    | Page      | Description                              |
|----------|-----------|------------------------------------------|
| `/`      | Home      | Hero section, features, CTA buttons      |
| `/guide` | Guide     | Documentation with sidebar navigation    |
| `/api`   | API       | API reference list with code examples    |
| `/about` | About     | Framework philosophy and community info  |

## Manual UI Validation Steps

### 1. Home Page (/)
- [ ] Verify hero section displays framework name and tagline
- [ ] Verify short description is visible
- [ ] Verify three feature cards are displayed
- [ ] Verify "Get Started" button links to /guide
- [ ] Verify "GitHub" button opens external link

### 2. Guide Page (/guide)
- [ ] Verify sidebar with Introduction, Installation, Basic Usage sections
- [ ] Verify clicking sidebar items changes content
- [ ] Verify code blocks are highlighted
- [ ] Verify previous/next navigation works

### 3. API Page (/api)
- [ ] Verify list of APIs is displayed
- [ ] Verify each API shows name, description, and example
- [ ] Verify code examples are formatted properly

### 4. About Page (/about)
- [ ] Verify Philosophy section is displayed
- [ ] Verify Project Goals section is displayed
- [ ] Verify Community Values section is displayed

### 5. Global Layout
- [ ] Verify fixed header with navigation links
- [ ] Verify active route is highlighted
- [ ] Verify footer with copyright is displayed
- [ ] Verify mobile navigation menu works (< 768px)

### 6. Responsive Design
- [ ] Test on mobile viewport (320px - 480px)
- [ ] Test on tablet viewport (768px - 1024px)
- [ ] Test on desktop viewport (> 1024px)

## Known Limitations

- No search functionality (out of scope)
- No authentication system (out of scope)
- No Markdown parsing (static content only)
- No internationalization (out of scope)
- Dark mode is based on system preference only

## License

MIT License
