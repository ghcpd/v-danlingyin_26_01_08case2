<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navItems } from '@/data/navigation'

const route = useRoute()
const isMobileMenuOpen = ref(false)

function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <RouterLink to="/" class="logo" @click="closeMobileMenu">
        <span class="logo-icon">V</span>
        <span class="logo-text">Vue</span>
      </RouterLink>

      <nav class="nav-desktop" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        class="mobile-menu-button"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <nav
      id="mobile-menu"
      class="nav-mobile"
      :class="{ open: isMobileMenuOpen }"
      aria-label="Mobile navigation"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-link"
        :class="{ active: route.path === item.path }"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.header-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.25rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-primary);
  color: white;
  border-radius: 0.375rem;
  font-weight: 700;
}

.logo-text {
  color: var(--color-text);
}

.nav-desktop {
  display: none;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
}

.mobile-menu-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
}

.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg);
}

.nav-mobile.open {
  display: flex;
}

@media (min-width: 768px) {
  .nav-mobile {
    display: none !important;
  }
}

.nav-mobile .nav-link {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
}

.nav-mobile .nav-link:last-child {
  border-bottom: none;
}
</style>
