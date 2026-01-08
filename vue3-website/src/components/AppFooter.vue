<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <p class="copyright">
        © {{ currentYear }} Vue.js. Released under the MIT License.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 2rem 1.5rem;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.copyright {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin: 0;
}
</style>
