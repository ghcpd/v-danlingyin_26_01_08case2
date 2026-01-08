<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { aboutData, aboutSections } from '@/data/about'
</script>

<template>
  <DefaultLayout>
    <div class="about-page">
      <div class="about-container">
        <header class="about-header">
          <h1 class="about-title">{{ aboutData.title }}</h1>
          <p class="about-subtitle">{{ aboutData.subtitle }}</p>
        </header>

        <div class="about-content">
          <section
            v-for="section in aboutSections"
            :key="section.title"
            class="about-section"
          >
            <h2 class="section-title">{{ section.title }}</h2>
            <div class="section-content">
              <p
                v-for="(paragraph, index) in section.content.split('\n\n')"
                :key="index"
                class="section-paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.about-page {
  padding: 2rem 1.5rem 4rem;
}

@media (min-width: 768px) {
  .about-page {
    padding: 3rem 1.5rem 5rem;
  }
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}

@media (min-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }
}

.about-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-section {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.about-section:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1rem;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-paragraph {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin: 0;
  white-space: pre-line;
}
</style>
