<script setup lang="ts">
import { features } from '@/data/mockData'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Vue 3</h1>
        <p class="hero-tagline">The Progressive JavaScript Framework</p>
        <p class="hero-description">
          An approachable, performant and versatile framework for building web user interfaces.
        </p>
        <div class="hero-actions">
          <a href="#/guide" class="btn btn-primary">Get Started</a>
          <a 
            href="https://github.com/vuejs/core" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="features-container">
        <h2 class="section-title">Why Vue 3?</h2>
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.title" 
            class="feature-card"
          >
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-top: 64px;
}

.hero {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: #fff;
  padding: 6rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.hero-tagline {
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0 0 1.5rem;
  opacity: 0.95;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: #fff;
  color: #42b883;
}

.btn-primary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border-color: #fff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.features {
  padding: 5rem 2rem;
  background: #fff;
}

.features-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #42b883;
  margin: 0 0 1rem;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #5a6c7d;
  margin: 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
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
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
