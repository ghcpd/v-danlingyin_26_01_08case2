export interface Feature {
  title: string
  description: string
  icon: string
}

export interface ApiItem {
  name: string
  description: string
  example: string
}

export interface GuideSection {
  id: string
  title: string
  content: string
}

export interface NavLink {
  path: string
  label: string
}
