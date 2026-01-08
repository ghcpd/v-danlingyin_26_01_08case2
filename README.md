# Vue 3 Official Website

A simplified official website for a front-end framework, built with Vue 3, TypeScript, and Vite. This project demonstrates a documentation-style layout with clean design, responsive interface, and modern development practices.

## Purpose

This project serves as a demonstration of:
- Building a complete documentation website from scratch
- Using Vue 3 Composition API with TypeScript
- Implementing responsive and accessible UI patterns
- Creating reusable component architecture
- Following modern web development best practices

## Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Package Manager**: pnpm
- **Styling**: Plain CSS with scoped styles

## Features

- ✅ Four main pages: Home, Guide, API Reference, About
- ✅ Documentation-style layout with sidebar navigation
- ✅ Responsive design (mobile and desktop)
- ✅ Semantic HTML and accessible navigation
- ✅ Active route highlighting
- ✅ Code syntax highlighting
- ✅ Mobile-friendly navigation menu
- ✅ Static content rendering

## Installation

### Prerequisites

- Node.js 18+ 
- pnpm 8+

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

### Setup

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
pnpm build
```

The built files will be in the `dist` directory.

Preview the production build:

```bash
pnpm preview
```

## Type Checking

Run TypeScript type checking:

```bash
pnpm type-check
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/         # CSS and other assets
│   │   └── main.css    # Global styles
│   ├── components/     # Reusable UI components
│   │   ├── Button.vue
│   │   ├── CodeBlock.vue
│   │   ├── FeatureCard.vue
│   │   └── SidebarNav.vue
│   ├── data/           # Static mock data
│   │   ├── api.ts
│   │   ├── features.ts
│   │   ├── guide.ts
│   │   └── navigation.ts
│   ├── layouts/        # Layout components
│   │   ├── DefaultLayout.vue
│   │   ├── DocsLayout.vue
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── pages/          # Page components
│   │   ├── Home.vue
│   │   ├── Guide.vue
│   │   ├── API.vue
│   │   └── About.vue
│   ├── router/         # Vue Router configuration
│   │   └── index.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Pages & Routes

### Home (`/`)
- Hero section with framework name and tagline
- Short description
- Three feature highlights
- Call-to-action buttons (Get Started / GitHub)

### Guide (`/guide`)
- Documentation-style layout with sidebar
- Three sections: Introduction, Installation, Basic Usage
- Interactive section selection
- Code examples with syntax highlighting
- Mobile-friendly sidebar toggle

### API Reference (`/api`)
- List of Vue 3 Composition API functions
- Each API displays:
  - Function name
  - Description
  - Example code snippet
- Clean card-based layout

### About (`/about`)
- Framework philosophy
- Project goals
- Community values
- Clean, readable content layout

## Manual UI Validation Steps

### Desktop (1920×1080+)

1. **Home Page**
   - [ ] Hero section displays prominently
   - [ ] Three feature cards are visible in a grid
   - [ ] CTA buttons are clickable
   - [ ] Navigation header is fixed at top

2. **Guide Page**
   - [ ] Sidebar is visible on the left
   - [ ] Clicking sidebar items changes content
   - [ ] Code blocks have dark background with green text
   - [ ] Content is properly formatted with headings

3. **API Page**
   - [ ] API items display in card format
   - [ ] Code examples are properly highlighted
   - [ ] Cards have subtle shadows

4. **About Page**
   - [ ] Content is centered and readable
   - [ ] Sections are clearly separated
   - [ ] Text has good line-height

5. **Navigation**
   - [ ] Header stays at top when scrolling
   - [ ] Active route is highlighted in green
   - [ ] Footer displays at bottom of page

### Mobile (375px width)

1. **General**
   - [ ] Hamburger menu appears in header
   - [ ] Clicking hamburger opens mobile menu
   - [ ] Menu items navigate correctly

2. **Home Page**
   - [ ] Hero text scales down appropriately
   - [ ] Feature cards stack vertically
   - [ ] CTA buttons stack or wrap

3. **Guide Page**
   - [ ] "Menu" button appears
   - [ ] Sidebar slides in from left when menu clicked
   - [ ] Content is readable at mobile width

4. **API & About**
   - [ ] Cards/content adjust to mobile width
   - [ ] Text remains readable
   - [ ] No horizontal scrolling

### Accessibility

1. **Keyboard Navigation**
   - [ ] Tab through all navigation links
   - [ ] Enter key activates links
   - [ ] Focus indicators are visible

2. **Screen Reader**
   - [ ] Navigation landmarks are present
   - [ ] Headings follow logical hierarchy
   - [ ] Buttons have descriptive labels

## Known Limitations

- No backend integration (all data is static/mock)
- No search functionality
- No internationalization (i18n)
- Simple markdown rendering (not a full parser)
- No state management library (not needed for this scope)
- No dark mode toggle
- No authentication

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT License - This is a demonstration project.
