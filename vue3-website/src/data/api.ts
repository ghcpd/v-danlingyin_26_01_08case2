import type { ApiItem } from '@/types'

export const apiItems: ApiItem[] = [
  {
    name: 'createApp()',
    description: 'Create an application instance. The first argument is the root component. The second optional argument is the props to be passed to the root component.',
    example: `import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')`,
    category: 'Application'
  },
  {
    name: 'ref()',
    description: 'Takes an inner value and returns a reactive and mutable ref object, which has a single property .value that points to the inner value.',
    example: `import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1`,
    category: 'Reactivity'
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
state.user.name = 'Jane'`,
    category: 'Reactivity'
  },
  {
    name: 'computed()',
    description: 'Takes a getter function and returns a readonly reactive ref object for the returned value from the getter.',
    example: `import { ref, computed } from 'vue'

const count = ref(1)
const doubled = computed(() => count.value * 2)

console.log(doubled.value) // 2

count.value++
console.log(doubled.value) // 4`,
    category: 'Reactivity'
  },
  {
    name: 'watch()',
    description: 'Watches one or more reactive data sources and invokes a callback function when the sources change.',
    example: `import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`)
})

count.value++ // logs: Count changed from 0 to 1`,
    category: 'Reactivity'
  },
  {
    name: 'onMounted()',
    description: 'Registers a callback to be called after the component has been mounted. A component is considered mounted after all synchronous child components have been mounted.',
    example: `import { onMounted, ref } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  console.log('Component is mounted!')
  console.log(el.value) // DOM element
})`,
    category: 'Lifecycle'
  },
  {
    name: 'onUnmounted()',
    description: 'Registers a callback to be called after the component has been unmounted. Use this hook to clean up manually created side effects such as timers or event listeners.',
    example: `import { onMounted, onUnmounted } from 'vue'

let intervalId: number

onMounted(() => {
  intervalId = setInterval(() => {
    console.log('tick')
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})`,
    category: 'Lifecycle'
  },
  {
    name: 'defineProps()',
    description: 'A compiler macro used inside <script setup> to declare component props. It accepts the same value as the props option.',
    example: `<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = defineProps<Props>()

console.log(props.title)
</script>`,
    category: 'Component'
  },
  {
    name: 'defineEmits()',
    description: 'A compiler macro used inside <script setup> to declare emittable events. It returns an emit function that is equivalent to $emit.',
    example: `<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}>()

function handleClick() {
  emit('update', 'new value')
}
</script>`,
    category: 'Component'
  },
  {
    name: 'provide() / inject()',
    description: 'Provide and inject enables dependency injection, allowing a parent component to serve as a dependency provider for all its descendants.',
    example: `// Parent component
import { provide, ref } from 'vue'

const theme = ref('dark')
provide('theme', theme)

// Child/Descendant component
import { inject } from 'vue'

const theme = inject('theme', 'light') // 'light' is default`,
    category: 'Component'
  }
]
