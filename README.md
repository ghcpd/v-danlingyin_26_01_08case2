# Vue 3 Official Website - Documentation Style

A simplified official website for Vue 3, focusing on documentation-style layout and clear content structure. This project demonstrates modern Vue 3 development practices with TypeScript, Composition API, and responsive design.

## 🎯 Purpose

This application showcases a professional documentation-style website similar to official framework websites. It includes:

- Clean, minimal UI with documentation focus
- Responsive design for desktop and mobile
- Clear information hierarchy
- Static content presentation
- Multiple page types (marketing, documentation, API reference)

## 🛠️ Tech Stack

- **Framework:** Vue 3.4.15
- **Language:** TypeScript (strict mode)
- **Build Tool:** Vite 5.0.11
- **Package Manager:** pnpm
- **Router:** Vue Router 4.2.5
- **Styling:** Plain CSS with scoped styles
- **Code Style:** Composition API with `<script setup>` syntax

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (if not installed: `npm install -g pnpm`)

### Install Dependencies

```bash
pnpm install
```

## 🚀 Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
vue3-official-website/
├── src/
│   ├── assets/           # Global styles and static assets
│   │   └── main.css      # Global CSS styles
│   ├── components/       # Reusable UI components
│   │   ├── Header.vue    # Fixed navigation header
│   │   ├── Footer.vue    # Copyright footer
│   │   └── Sidebar.vue   # Documentation sidebar navigation
│   ├── pages/            # Page-level view components
│   │   ├── Home.vue      # Landing page with hero and features
│   │   ├── Guide.vue     # Documentation guide page
│   │   ├── Api.vue       # API reference page
│   │   └── About.vue     # About page
│   ├── router/           # Vue Router configuration
│   │   └── index.ts      # Route definitions
│   ├── data/             # Static content and mock data
│   │   └── mockData.ts   # Feature, guide, and API data
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Shared interfaces
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🗺️ Pages & Routes

| Route    | Component  | Description                                      |
|----------|------------|--------------------------------------------------|
| `/`      | Home       | Hero section, framework description, features    |
| `/guide` | Guide      | Documentation with sidebar navigation            |
| `/api`   | Api        | API reference with code examples                 |
| `/about` | About      | Framework philosophy, goals, community values    |

## ✨ Features Implemented

### Global Layout
- ✅ Fixed header with navigation links (Home, Guide, API, About)
- ✅ Active route highlighting in navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Footer with copyright information

### Home Page
- ✅ Hero section with framework name and tagline
- ✅ Short description of the framework
- ✅ Three feature highlights displayed in a grid
- ✅ Call-to-action buttons (Get Started, GitHub)

### Guide Page
- ✅ Documentation-style layout with sidebar
- ✅ Sidebar navigation with sections (Introduction, Installation, Basic Usage)
- ✅ Content display based on selected section
- ✅ Syntax-highlighted code blocks (styled)
- ✅ Responsive sidebar (horizontal on mobile)

### API Reference Page
- ✅ List of API items with static data
- ✅ Each API shows: name, description, example usage
- ✅ Code examples with syntax highlighting
- ✅ Clean card-based layout

### About Page
- ✅ Framework philosophy section
- ✅ Project goals section
- ✅ Community values section
- ✅ Professional content layout

### Technical Features
- ✅ Vue 3 Composition API only (no Options API)
- ✅ TypeScript strict mode enabled
- ✅ Fully typed components and props
- ✅ Responsive design (desktop + mobile)
- ✅ Semantic HTML structure
- ✅ Accessible navigation with ARIA labels
- ✅ Clean, maintainable code structure

## 🧪 Manual UI Validation Steps

### Desktop Testing (1280px+)
1. **Navigation:**
   - [ ] Header is fixed at the top
   - [ ] All nav links are visible horizontally
   - [ ] Active route is highlighted with underline
   - [ ] Clicking links navigates correctly

2. **Home Page:**
   - [ ] Hero section displays centered content
   - [ ] Three feature cards are in a responsive grid
   - [ ] CTA buttons are visible and clickable

3. **Guide Page:**
   - [ ] Sidebar is visible on the left
   - [ ] Content area is on the right
   - [ ] Clicking sidebar items changes content
   - [ ] Active section is highlighted in sidebar
   - [ ] Code blocks have dark background styling

4. **API Page:**
   - [ ] API items are displayed in cards
   - [ ] Each card shows name, description, and example
   - [ ] Code examples have proper formatting

5. **About Page:**
   - [ ] Three sections are clearly separated
   - [ ] Content is centered and readable
   - [ ] Goals list has styled items

### Mobile Testing (< 768px)
1. **Navigation:**
   - [ ] Hamburger menu icon is visible
   - [ ] Clicking hamburger toggles mobile menu
   - [ ] Mobile menu slides down from top
   - [ ] Active route is highlighted differently

2. **Guide Page:**
   - [ ] Sidebar becomes horizontal scrollable tabs
   - [ ] Content appears below sidebar
   - [ ] Tab selection works on mobile

3. **General:**
   - [ ] All text is readable without horizontal scroll
   - [ ] Images/content scale appropriately
   - [ ] Touch targets are adequate size

### Cross-Browser Testing
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)

## 🚫 Known Limitations

- No real backend or API integration
- All content is static/mock data
- No authentication system
- No search functionality
- No markdown parsing (content is pre-formatted HTML strings)
- No internationalization (English only)
- Code highlighting is CSS-based only (no syntax parser)

## 📝 Development Notes

### Code Quality Standards
- All components use Composition API with `<script setup>` syntax
- TypeScript strict mode is enabled (no `any` types)
- Components are properly typed with interfaces
- Scoped CSS for component styles
- Semantic HTML elements used throughout
- Accessibility considerations in navigation

### TypeScript Configuration
- Strict mode enabled
- No implicit any
- Strict null checks
- Path aliases configured (`@/` for `src/`)

### Build Configuration
- Vite for fast development and optimized builds
- Development server on port 3000
- Path resolution for clean imports

## 🤝 Contributing

This is an evaluation project demonstrating Vue 3 capabilities. For production use, consider adding:
- Real API integration
- Markdown parsing for documentation
- Search functionality
- More comprehensive error handling
- Unit and E2E tests

## 📄 License

MIT License - This is a demonstration project for educational purposes.
