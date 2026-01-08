import type { AboutSection } from '@/types'

export const aboutData = {
  title: 'About Vue',
  subtitle: 'The Progressive JavaScript Framework'
}

export const aboutSections: AboutSection[] = [
  {
    title: 'Philosophy',
    content: `Vue was created with a simple goal: to be an approachable framework that anyone can pick up quickly, while also being powerful enough to handle complex applications.

Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library focuses on the view layer only, making it easy to integrate with other libraries or existing projects.

Vue's design is inspired by the MVVM pattern and focuses on simplicity and ease of use without sacrificing flexibility or performance.`
  },
  {
    title: 'Project Goals',
    content: `Vue aims to provide:

• An approachable learning curve for developers of all skill levels
• A lightweight core with a rich ecosystem of supporting libraries
• Excellent performance through a reactive, compiler-optimized rendering system
• Comprehensive TypeScript support for improved developer experience
• Flexibility to scale from a simple library to a full-featured framework
• First-class single-file component support for better code organization

The framework continues to evolve while maintaining backward compatibility and focusing on what matters most: developer productivity and application performance.`
  },
  {
    title: 'Community Values',
    content: `The Vue community is built on principles of inclusivity, collaboration, and mutual respect.

We believe that:

• Everyone should feel welcome, regardless of their background or experience level
• Questions are encouraged - there are no "stupid questions"
• Sharing knowledge and helping others is fundamental to our growth
• Diversity of perspectives leads to better solutions
• Open source software is a collaborative effort that benefits from community contributions

Join our vibrant community on Discord, forums, and GitHub to connect with fellow Vue developers, share your projects, and contribute to the ecosystem.`
  }
]
