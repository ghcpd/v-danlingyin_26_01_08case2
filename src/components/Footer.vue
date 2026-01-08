<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <p class="copyright">
        © {{ currentYear }} Vue 3. Released under the MIT License.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.copyright {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }

  .copyright {
    font-size: 0.8rem;
  }
}
</style>
