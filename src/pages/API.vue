<template>
  <DefaultLayout>
    <div class="api-page">
      <div class="api-content">
        <h1 class="page-title">API Reference</h1>
        <p class="page-description">
          Comprehensive reference for Vue 3 Composition API functions and methods.
        </p>

        <div class="api-list">
          <div 
            v-for="api in apiItems" 
            :key="api.name"
            class="api-item"
          >
            <h2 class="api-name">{{ api.name }}</h2>
            <p class="api-description">{{ api.description }}</p>
            <div class="api-example">
              <h3 class="example-title">Example:</h3>
              <CodeBlock :code="api.example" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { apiItems } from '@/data/api'
</script>

<style scoped>
.api-page {
  min-height: calc(100vh - 60px);
  background: #fafafa;
}

.api-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-title {
  font-size: 3rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.page-description {
  font-size: 1.25rem;
  color: #666;
  margin: 0 0 3rem 0;
  line-height: 1.6;
}

.api-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.api-item {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.api-name {
  font-size: 1.75rem;
  color: #42b883;
  margin: 0 0 1rem 0;
  font-family: 'Courier New', Courier, monospace;
}

.api-description {
  color: #2c3e50;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
}

.api-example {
  margin-top: 1.5rem;
}

.example-title {
  font-size: 1rem;
  color: #666;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

@media (max-width: 768px) {
  .api-content {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
  }

  .api-item {
    padding: 1.5rem;
  }

  .api-name {
    font-size: 1.5rem;
  }
}
</style>
