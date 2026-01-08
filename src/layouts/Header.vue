<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <RouterLink to="/">Vue 3 Framework</RouterLink>
      </div>
      <nav class="nav" :class="{ 'nav-open': isNavOpen }">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="closeNav"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <button class="mobile-toggle" @click="toggleNav" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { navLinks } from '@/data/navigation'

const isNavOpen = ref(false)

const toggleNav = (): void => {
  isNavOpen.value = !isNavOpen.value
}

const closeNav = (): void => {
  isNavOpen.value = false
}
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e2e2e2;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 60px;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo a {
  font-size: 1.25rem;
  font-weight: 600;
  color: #42b883;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #42b883;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  width: 24px;
  height: 3px;
  background: #2c3e50;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 60px;
    right: -100%;
    width: 250px;
    height: calc(100vh - 60px);
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s;
    gap: 0;
  }

  .nav-open {
    right: 0;
  }

  .nav-link {
    padding: 1rem 0;
    border-bottom: 1px solid #e2e2e2;
  }
}
</style>
