<template>
  <DocsLayout>
    <SidebarNav 
      :sections="guideSections"
      :activeSection="activeSection"
      :isOpen="isSidebarOpen"
      @select="selectSection"
    />
    <div class="guide-content">
      <button class="mobile-sidebar-toggle" @click="toggleSidebar" aria-label="Toggle sidebar">
        ☰ Menu
      </button>
      <article class="content">
        <div v-html="renderedContent"></div>
      </article>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DocsLayout from '@/layouts/DocsLayout.vue'
import SidebarNav from '@/components/SidebarNav.vue'
import { guideSections } from '@/data/guide'

const activeSection = ref('introduction')
const isSidebarOpen = ref(false)

const selectSection = (sectionId: string): void => {
  activeSection.value = sectionId
  isSidebarOpen.value = false
}

const toggleSidebar = (): void => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const renderedContent = computed(() => {
  const section = guideSections.find(s => s.id === activeSection.value)
  if (!section) {
    return '<p>Section not found</p>'
  }
  
  return section.content
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|p|pre])(.+)$/gm, '<p>$1</p>')
})
</script>

<style scoped>
.guide-content {
  flex: 1;
  padding: 3rem;
  max-width: 900px;
  overflow-y: auto;
}

.mobile-sidebar-toggle {
  display: none;
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.content {
  line-height: 1.7;
  color: #2c3e50;
}

.content :deep(h1) {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
}

.content :deep(h2) {
  font-size: 2rem;
  margin: 2.5rem 0 1rem 0;
  color: #2c3e50;
}

.content :deep(h3) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
  color: #2c3e50;
}

.content :deep(p) {
  margin: 1rem 0;
}

.content :deep(code) {
  background: #f3f4f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  color: #476582;
}

.content :deep(pre) {
  background: #2c3e50;
  padding: 1.25rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.content :deep(pre code) {
  background: transparent;
  color: #42b883;
  padding: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .guide-content {
    padding: 1.5rem;
  }

  .mobile-sidebar-toggle {
    display: block;
  }

  .content :deep(h1) {
    font-size: 2rem;
  }

  .content :deep(h2) {
    font-size: 1.5rem;
  }

  .content :deep(h3) {
    font-size: 1.25rem;
  }
}
</style>
