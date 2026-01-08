<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { guideSections } from '@/data/mockData'

const activeSection = ref('introduction')

const handleSectionSelect = (id: string): void => {
  activeSection.value = id
}

const currentSection = ref(guideSections.find(s => s.id === activeSection.value))

const updateCurrentSection = (): void => {
  currentSection.value = guideSections.find(s => s.id === activeSection.value)
}

// Watch for changes to activeSection
import { watch } from 'vue'
watch(activeSection, () => {
  updateCurrentSection()
})
</script>

<template>
  <div class="guide-page">
    <Sidebar 
      :sections="guideSections" 
      :active-section="activeSection"
      @select="handleSectionSelect"
    />
    <div class="guide-content">
      <article class="content-article">
        <h1 class="content-title">{{ currentSection?.title }}</h1>
        <div class="content-body" v-html="currentSection?.content"></div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.guide-page {
  display: flex;
  min-height: calc(100vh - 64px);
  margin-top: 64px;
}

.guide-content {
  flex: 1;
  padding: 3rem;
  max-width: 900px;
  background: #fff;
}

.content-article {
  max-width: 100%;
}

.content-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 2rem;
  line-height: 1.2;
}

.content-body {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.content-body :deep(h2) {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 2rem 0 1rem;
}

.content-body :deep(h3) {
  font-size: 1.375rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 1.5rem 0 1rem;
}

.content-body :deep(p) {
  margin: 1rem 0;
}

.content-body :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.content-body :deep(li) {
  margin: 0.5rem 0;
}

.content-body :deep(code) {
  background: #f1f5f9;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  color: #e83e8c;
}

.content-body :deep(pre) {
  background: #282c34;
  color: #abb2bf;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.content-body :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
  font-size: inherit;
}

@media (max-width: 768px) {
  .guide-page {
    flex-direction: column;
  }

  .guide-content {
    padding: 2rem 1rem;
  }

  .content-title {
    font-size: 2rem;
  }
}
</style>
