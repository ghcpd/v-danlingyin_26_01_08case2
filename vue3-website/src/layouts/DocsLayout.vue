<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="docs-layout">
    <AppHeader />
    <div class="docs-container">
      <slot name="sidebar" />
      <main class="docs-content">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.docs-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.docs-container {
  flex: 1;
  margin-top: var(--header-height);
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .docs-container {
    flex-direction: row;
    gap: 2rem;
  }
}

.docs-content {
  flex: 1;
  min-width: 0;
  padding: 1.5rem 0;
}

@media (min-width: 768px) {
  .docs-content {
    padding: 2rem 0;
  }
}
</style>
