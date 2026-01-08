<script setup lang="ts">
interface Props {
  code: string
  language?: string
}

withDefaults(defineProps<Props>(), {
  language: 'typescript'
})
</script>

<template>
  <div class="code-block">
    <div class="code-header">
      <span class="code-language">{{ language }}</span>
    </div>
    <pre class="code-pre"><code class="code-content">{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-block {
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--color-code-bg);
  border: 1px solid var(--color-border);
}

.code-header {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.code-language {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  font-weight: 500;
}

.code-pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
}

.code-content {
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text);
  white-space: pre;
}
</style>
