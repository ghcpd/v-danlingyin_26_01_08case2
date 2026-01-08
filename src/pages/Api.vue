<script setup lang="ts">
import { apiItems } from '@/data/mockData'
</script>

<template>
  <div class="api-page">
    <div class="api-container">
      <header class="api-header">
        <h1 class="page-title">API Reference</h1>
        <p class="page-description">
          Comprehensive API documentation for Vue 3 core features and composition API.
        </p>
      </header>

      <div class="api-list">
        <article 
          v-for="api in apiItems" 
          :key="api.name" 
          class="api-item"
        >
          <h2 class="api-name">{{ api.name }}</h2>
          <p class="api-description">{{ api.description }}</p>
          <div class="api-example">
            <h3 class="example-title">Example:</h3>
            <pre><code>{{ api.example }}</code></pre>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.api-page {
  padding-top: 64px;
  min-height: calc(100vh - 64px);
  background: #f8f9fa;
}

.api-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.api-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem;
}

.page-description {
  font-size: 1.125rem;
  color: #5a6c7d;
  margin: 0;
  line-height: 1.6;
}

.api-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.api-item {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.api-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.api-name {
  font-size: 1.75rem;
  font-weight: 600;
  color: #42b883;
  margin: 0 0 1rem;
  font-family: 'Courier New', Courier, monospace;
}

.api-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  margin: 0 0 1.5rem;
}

.api-example {
  margin-top: 1.5rem;
}

.example-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem;
}

pre {
  background: #282c34;
  color: #abb2bf;
  padding: 1.5rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .api-container {
    padding: 2rem 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .api-item {
    padding: 1.5rem;
  }

  .api-name {
    font-size: 1.5rem;
  }

  pre {
    padding: 1rem;
  }
}
</style>
