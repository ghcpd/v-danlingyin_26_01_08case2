<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/" @click="closeMobileMenu">Vue 3</RouterLink>
      </div>
      
      <button 
        class="mobile-menu-toggle" 
        :class="{ active: mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ open: mobileMenuOpen }">
        <RouterLink 
          to="/" 
          class="nav-link" 
          :class="{ active: route.path === '/' }"
          @click="closeMobileMenu"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/guide" 
          class="nav-link" 
          :class="{ active: route.path === '/guide' }"
          @click="closeMobileMenu"
        >
          Guide
        </RouterLink>
        <RouterLink 
          to="/api" 
          class="nav-link" 
          :class="{ active: route.path === '/api' }"
          @click="closeMobileMenu"
        >
          API
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="nav-link" 
          :class="{ active: route.path === '/about' }"
          @click="closeMobileMenu"
        >
          About
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b883;
  text-decoration: none;
  transition: color 0.2s;
}

.logo a:hover {
  color: #35495e;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: #2c3e50;
  transition: all 0.3s;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #42b883;
}

.nav-link.active {
  color: #42b883;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #42b883;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
  }

  .nav-link.active::after {
    left: 2rem;
    right: auto;
    width: 4px;
    height: 100%;
    bottom: auto;
    top: 0;
  }
}
</style>
