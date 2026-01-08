<script setup lang="ts">
import type { Feature } from '@/types'

interface Props {
  feature: Feature
}

defineProps<Props>()
</script>

<template>
  <article class="feature-card">
    <div class="feature-icon" aria-hidden="true">
      {{ feature.icon }}
    </div>
    <h3 class="feature-title">{{ feature.title }}</h3>
    <p class="feature-description">{{ feature.description }}</p>
  </article>
</template>

<style scoped>
.feature-card {
  padding: 1.5rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  text-align: center;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.feature-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}

.feature-description {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}
</style>
