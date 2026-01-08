<template>
  <DefaultLayout>
    <div class="about-page">
      <div class="about-content">
        <h1 class="page-title">About Vue 3</h1>
        
        <section class="about-section">
          <h2 class="section-title">Our Philosophy</h2>
          <p class="section-text">
            Vue is designed to be incrementally adoptable. The core library is focused on the view layer only, 
            making it easy to integrate with other libraries or existing projects. Vue is also capable of powering 
            sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
          </p>
          <p class="section-text">
            We believe in making web development accessible to everyone. Vue's gentle learning curve and excellent 
            documentation make it an ideal choice for both beginners and experienced developers.
          </p>
        </section>

        <section class="about-section">
          <h2 class="section-title">Project Goals</h2>
          <ul class="goals-list">
            <li>Provide a progressive framework that scales between a library and a full-featured framework</li>
            <li>Maintain excellent performance with a reactive rendering system</li>
            <li>Offer an approachable and intuitive API that's easy to learn</li>
            <li>Support both template-based and JSX development styles</li>
            <li>Build a vibrant and welcoming community</li>
            <li>Ensure long-term sustainability and stability</li>
          </ul>
        </section>

        <section class="about-section">
          <h2 class="section-title">Community Values</h2>
          <p class="section-text">
            The Vue community is built on principles of inclusivity, respect, and collaboration. We welcome 
            contributions from developers of all skill levels and backgrounds.
          </p>
          <p class="section-text">
            Our community values clear communication, constructive feedback, and mutual support. We believe 
            that by working together, we can create a framework that serves the needs of developers worldwide.
          </p>
          <p class="section-text">
            Whether you're fixing a typo in documentation, reporting a bug, or contributing a major feature, 
            your participation makes Vue better for everyone.
          </p>
        </section>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 60px);
  background: white;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-title {
  font-size: 3rem;
  color: #2c3e50;
  margin: 0 0 3rem 0;
}

.about-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  color: #42b883;
  margin: 0 0 1.5rem 0;
}

.section-text {
  font-size: 1.125rem;
  color: #2c3e50;
  line-height: 1.8;
  margin: 0 0 1rem 0;
}

.goals-list {
  font-size: 1.125rem;
  color: #2c3e50;
  line-height: 1.8;
  padding-left: 1.5rem;
}

.goals-list li {
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .about-content {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text,
  .goals-list {
    font-size: 1rem;
  }
}
</style>
