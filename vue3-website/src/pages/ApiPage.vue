<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ApiCard from '@/components/ApiCard.vue'
import { apiItems } from '@/data/api'
</script>

<template>
  <DefaultLayout>
    <div class="api-page">
      <div class="api-container">
        <header class="api-header">
          <h1 class="api-title">API Reference</h1>
          <p class="api-description">
            Complete reference documentation for the Vue 3 Composition API.
          </p>
        </header>

        <section class="api-list" aria-label="API list">
          <ApiCard
            v-for="item in apiItems"
            :key="item.name"
            :item="item"
          />
        </section>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.api-page {
  padding: 2rem 1.5rem 4rem;
}

@media (min-width: 768px) {
  .api-page {
    padding: 3rem 1.5rem 5rem;
  }
}

.api-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.api-header {
  text-align: center;
  margin-bottom: 3rem;
}

.api-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}

@media (min-width: 768px) {
  .api-title {
    font-size: 2.5rem;
  }
}

.api-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.api-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
