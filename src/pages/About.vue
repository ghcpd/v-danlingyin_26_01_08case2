<script setup lang="ts">
// No reactive state needed for static content
</script>

<template>
  <div class="about-page">
    <div class="about-container">
      <header class="about-header">
        <h1 class="page-title">About Vue 3</h1>
      </header>

      <section class="about-section">
        <h2 class="section-heading">Framework Philosophy</h2>
        <p class="section-text">
          Vue is a progressive framework for building user interfaces. Unlike other monolithic 
          frameworks, Vue is designed from the ground up to be incrementally adoptable. The core 
          library is focused on the view layer only, and is easy to pick up and integrate with 
          other libraries or existing projects.
        </p>
        <p class="section-text">
          Vue 3 represents a complete rewrite of the framework, bringing improved performance, 
          better TypeScript support, and a more flexible composition API while maintaining 
          backwards compatibility where possible.
        </p>
      </section>

      <section class="about-section">
        <h2 class="section-heading">Project Goals</h2>
        <ul class="goals-list">
          <li class="goal-item">
            <strong>Approachable:</strong> Already know HTML, CSS and JavaScript? Read the guide 
            and start building things in no time.
          </li>
          <li class="goal-item">
            <strong>Versatile:</strong> An incrementally adoptable ecosystem that scales between 
            a library and a full-featured framework.
          </li>
          <li class="goal-item">
            <strong>Performant:</strong> 20KB min+gzip runtime. Blazing fast virtual DOM. 
            Minimal optimization efforts required.
          </li>
          <li class="goal-item">
            <strong>Maintainable:</strong> Enhanced TypeScript support and composition API for 
            better code organization and reusability.
          </li>
        </ul>
      </section>

      <section class="about-section">
        <h2 class="section-heading">Community Values</h2>
        <p class="section-text">
          The Vue community is built on principles of inclusivity, collaboration, and mutual 
          respect. We believe in creating a welcoming environment for developers of all skill 
          levels and backgrounds.
        </p>
        <p class="section-text">
          Our open-source ecosystem thrives on community contributions, from bug reports and 
          feature requests to documentation improvements and code contributions. Every voice 
          matters in shaping the future of Vue.
        </p>
        <p class="section-text">
          We are committed to transparency in our development process, regular communication 
          with the community, and maintaining a sustainable and independent project that serves 
          the best interests of all users.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 64px;
  min-height: calc(100vh - 64px);
  background: #fff;
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.about-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.about-section {
  margin-bottom: 3rem;
}

.section-heading {
  font-size: 1.875rem;
  font-weight: 600;
  color: #42b883;
  margin: 0 0 1.5rem;
}

.section-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  margin: 0 0 1rem;
}

.goals-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}

.goal-item {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-left: 4px solid #42b883;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.goal-item strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about-container {
    padding: 2rem 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .goal-item {
    padding: 0.875rem 1rem;
  }
}
</style>
