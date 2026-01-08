import type { GuideSection, SidebarItem } from '@/types'

export const sidebarItems: SidebarItem[] = [
  {
    id: 'introduction',
    title: 'Introduction'
  },
  {
    id: 'installation',
    title: 'Installation'
  },
  {
    id: 'basic-usage',
    title: 'Basic Usage'
  }
]

export const guideSections: GuideSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.

Vue is designed to be incrementally adoptable. The core library focuses on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

Here's a minimal example:`,
    codeExample: `import { createApp, ref } from 'vue'

createApp({
  setup() {
    const count = ref(0)
    return { count }
  },
  template: \`
    <button @click="count++">
      Count is: {{ count }}
    </button>
  \`
}).mount('#app')`
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `To get started with Vue 3, you can use the official create-vue scaffolding tool, which provides a streamlined setup for a Vite-powered Vue project.

Make sure you have Node.js version 18.0 or higher installed, then run the following command in your terminal:`,
    codeExample: `# Using npm
npm create vue@latest

# Using pnpm
pnpm create vue@latest

# Using yarn
yarn create vue@latest

# Follow the prompts to configure your project
# Then install dependencies and start the dev server:
cd your-project-name
npm install
npm run dev`
  },
  {
    id: 'basic-usage',
    title: 'Basic Usage',
    content: `Vue uses a template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):`,
    codeExample: `<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive state
const message = ref('Hello Vue 3!')
const count = ref(0)

// Computed property
const reversedMessage = computed(() => {
  return message.value.split('').reverse().join('')
})

// Method
function increment() {
  count.value++
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Reversed: {{ reversedMessage }}</p>
    <button @click="increment">
      Count: {{ count }}
    </button>
  </div>
</template>`
  }
]
