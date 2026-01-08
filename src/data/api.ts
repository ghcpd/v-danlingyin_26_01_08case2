import type { ApiItem } from '@/types'

export const apiItems: ApiItem[] = [
  {
    name: 'ref()',
    description: 'Takes an inner value and returns a reactive and mutable ref object, which has a single property .value that points to the inner value.',
    example: `const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1`
  },
  {
    name: 'reactive()',
    description: 'Returns a reactive proxy of the object. The reactive conversion is "deep": it affects all nested properties.',
    example: `const state = reactive({ count: 0 })

state.count++
console.log(state.count) // 1`
  },
  {
    name: 'computed()',
    description: 'Takes a getter function and returns a readonly reactive ref object for the returned value from the getter.',
    example: `const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2`
  },
  {
    name: 'watch()',
    description: 'Watches one or more reactive data sources and invokes a callback function when the sources change.',
    example: `const count = ref(0)

watch(count, (newVal, oldVal) => {
  console.log(\`count changed from \${oldVal} to \${newVal}\`)
})`
  },
  {
    name: 'onMounted()',
    description: 'Registers a callback to be called after the component has been mounted.',
    example: `onMounted(() => {
  console.log('Component is mounted!')
})`
  }
]
