// Navigation item type
export interface NavItem {
  label: string
  path: string
  icon?: string
}

// Feature highlight for home page
export interface Feature {
  title: string
  description: string
  icon: string
}

// Guide section for documentation
export interface GuideSection {
  id: string
  title: string
  content: string
  codeExample?: string
}

// API reference item
export interface ApiItem {
  name: string
  description: string
  example: string
  category?: string
}

// Sidebar navigation item (for guide page)
export interface SidebarItem {
  id: string
  title: string
  children?: SidebarItem[]
}

// About page section
export interface AboutSection {
  title: string
  content: string
}
