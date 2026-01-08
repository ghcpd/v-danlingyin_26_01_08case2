<template>
  <DefaultLayout>
    <div class="home">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Vue 3 Framework</h1>
          <p class="hero-tagline">The Progressive JavaScript Framework</p>
          <p class="hero-description">
            An approachable, performant and versatile framework for building web user interfaces.
          </p>
          <div class="hero-actions">
            <RouterLink to="/guide" class="btn btn-primary">Get Started</RouterLink>
            <a href="https://github.com/vuejs/core" target="_blank" rel="noopener" class="btn btn-secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="features-content">
          <h2 class="section-title">Why Vue 3?</h2>
          <div class="features-grid">
            <FeatureCard 
              v-for="feature in features" 
              :key="feature.title"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import { features } from '@/data/features'
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.hero-tagline {
  font-size: 1.75rem;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  margin: 0 0 2.5rem 0;
  opacity: 0.85;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}

.btn-primary {
  background: white;
  color: #42b883;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.features {
  padding: 5rem 2rem;
  background: white;
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  color: #2c3e50;
  margin: 0 0 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-tagline {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .features {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
