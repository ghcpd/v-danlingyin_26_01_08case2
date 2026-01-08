<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import { heroData, features } from '@/data/home'
</script>

<template>
  <DefaultLayout>
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-container">
          <h1 id="hero-title" class="hero-title">{{ heroData.title }}</h1>
          <p class="hero-tagline">{{ heroData.tagline }}</p>
          <p class="hero-description">{{ heroData.description }}</p>
          <div class="hero-actions">
            <RouterLink :to="heroData.primaryButtonLink" class="btn btn-primary">
              {{ heroData.primaryButtonText }}
            </RouterLink>
            <a
              :href="heroData.secondaryButtonLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              {{ heroData.secondaryButtonText }}
            </a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features" aria-labelledby="features-title">
        <h2 id="features-title" class="visually-hidden">Features</h2>
        <div class="features-container">
          <div class="features-grid">
            <FeatureCard
              v-for="feature in features"
              :key="feature.title"
              :feature="feature"
            />
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  padding: 4rem 1.5rem;
  text-align: center;
  background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-secondary) 100%);
}

@media (min-width: 768px) {
  .hero {
    padding: 6rem 1.5rem;
  }
}

.hero-container {
  max-width: 720px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 0.5rem;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.hero-tagline {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0 0 1.5rem;
}

@media (min-width: 768px) {
  .hero-tagline {
    font-size: 2rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 480px) {
  .hero-actions {
    flex-direction: row;
    justify-content: center;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
  min-width: 160px;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-secondary {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Features Section */
.features {
  padding: 4rem 1.5rem;
}

@media (min-width: 768px) {
  .features {
    padding: 5rem 1.5rem;
  }
}

.features-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
