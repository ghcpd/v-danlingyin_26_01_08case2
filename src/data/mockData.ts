import type { Feature, GuideSection, ApiItem } from '@/types'

export const features: Feature[] = [
  {
    title: 'Declarative Rendering',
    description: 'Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.'
  },
  {
    title: 'Reactivity',
    description: 'Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.'
  },
  {
    title: 'Component-Based',
    description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
  }
]

export const guideSections: GuideSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <h2>What is Vue?</h2>
      <p>Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
      
      <h3>The Progressive Framework</h3>
      <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale.</p>
      
      <p>With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:</p>
      
      <ul>
        <li>Enhancing static HTML without a build step</li>
        <li>Embedding as Web Components on any page</li>
        <li>Single-Page Application (SPA)</li>
        <li>Fullstack / Server-Side Rendering (SSR)</li>
        <li>Jamstack / Static Site Generation (SSG)</li>
        <li>Targeting desktop, mobile, WebGL, and even the terminal</li>
      </ul>
    `
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `
      <h2>Installation</h2>
      <p>There are several ways to start using Vue 3 in your project.</p>
      
      <h3>Using a Build Tool</h3>
      <p>For production applications, we recommend using a build setup with a bundler. This allows us to use Single-File Components (SFCs).</p>
      
      <p>Create a new Vue project with Vite:</p>
      <pre><code>npm create vue@latest</code></pre>
      
      <h3>Using from CDN</h3>
      <p>You can use Vue directly from a CDN via a script tag:</p>
      <pre><code>&lt;script src="https://unpkg.com/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;</code></pre>
      
      <h3>NPM Installation</h3>
      <p>Install Vue in an existing project:</p>
      <pre><code>npm install vue@latest</code></pre>
    `
  },
  {
    id: 'basic-usage',
    title: 'Basic Usage',
    content: `
      <h2>Basic Usage</h2>
      <p>Here are the fundamentals of using Vue 3 with the Composition API.</p>
      
      <h3>Creating an Application</h3>
      <p>Every Vue application starts by creating a new application instance:</p>
      <pre><code>import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})

app.mount('#app')</code></pre>
      
      <h3>Template Syntax</h3>
      <p>Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data:</p>
      <pre><code>&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const message = ref('Hello Vue!')
&lt;/script&gt;</code></pre>
      
      <h3>Reactivity Fundamentals</h3>
      <p>In Vue 3, we use <code>ref()</code> and <code>reactive()</code> to create reactive state:</p>
      <pre><code>import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Vue 3' })

function increment() {
  count.value++
}</code></pre>
    `
  }
]

export const apiItems: ApiItem[] = [
  {
    name: 'ref()',
    description: 'Takes an inner value and returns a reactive and mutable ref object. The ref object has a single property .value that points to the inner value.',
    example: `import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1`
  },
  {
    name: 'reactive()',
    description: 'Returns a reactive proxy of the object. The reactive conversion is "deep" - it affects all nested properties.',
    example: `import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'John'
  }
})

state.count++
state.user.name = 'Jane'`
  },
  {
    name: 'computed()',
    description: 'Takes a getter function and returns a readonly reactive ref object for the returned value from the getter.',
    example: `import { ref, computed } from 'vue'

const count = ref(1)
const doubled = computed(() => count.value * 2)

console.log(doubled.value) // 2
count.value = 2
console.log(doubled.value) // 4`
  },
  {
    name: 'watch()',
    description: 'Watches one or more reactive data sources and invokes a callback function when the sources change.',
    example: `import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`)
})

count.value++ // logs: "Count changed from 0 to 1"`
  },
  {
    name: 'onMounted()',
    description: 'Registers a callback to be called after the component has been mounted. Used for side effects that need access to the rendered DOM.',
    example: `import { onMounted } from 'vue'

onMounted(() => {
  console.log('Component is mounted!')
  // Access DOM elements, make API calls, etc.
})`
  }
]
