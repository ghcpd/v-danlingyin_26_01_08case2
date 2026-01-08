<template>
  <div class="layout-docs">
    <Header />
    <div class="docs-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.layout-docs {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.docs-container {
  flex: 1;
  display: flex;
}
</style>
