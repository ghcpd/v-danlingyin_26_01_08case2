<template>
  <div class="code-block">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
interface Props {
  code: string
}

defineProps<Props>()
</script>

<style scoped>
.code-block {
  background: #2c3e50;
  border-radius: 6px;
  padding: 1.25rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: #42b883;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
