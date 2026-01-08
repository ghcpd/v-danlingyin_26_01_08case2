import type { Feature } from '@/types'

export const heroData = {
  title: 'Vue.js',
  tagline: 'The Progressive JavaScript Framework',
  description: 'An approachable, performant and versatile framework for building web user interfaces.',
  primaryButtonText: 'Get Started',
  primaryButtonLink: '/guide',
  secondaryButtonText: 'GitHub',
  secondaryButtonLink: 'https://github.com/vuejs/vue'
}

export const features: Feature[] = [
  {
    title: 'Approachable',
    description: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.',
    icon: '📚'
  },
  {
    title: 'Performant',
    description: 'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.',
    icon: '⚡'
  },
  {
    title: 'Versatile',
    description: 'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
    icon: '🔧'
  }
]
