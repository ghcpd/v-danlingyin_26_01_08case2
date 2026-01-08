<script setup lang="ts">
import type { ApiItem } from '@/types'
import CodeBlock from './CodeBlock.vue'

interface Props {
  item: ApiItem
}

defineProps<Props>()
</script>

<template>
  <article class="api-item">
    <header class="api-header">
      <h3 class="api-name">{{ item.name }}</h3>
      <span v-if="item.category" class="api-category">{{ item.category }}</span>
    </header>
    <p class="api-description">{{ item.description }}</p>
    <CodeBlock :code="item.example" language="typescript" />
  </article>
</template>

<style scoped>
.api-item {
  padding: 1.5rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}

.api-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.api-name {
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  color: var(--color-primary);
  margin: 0;
}

.api-category {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.api-description {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}
</style>
