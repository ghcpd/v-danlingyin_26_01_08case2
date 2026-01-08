<script setup lang="ts">
import { ref, computed } from 'vue'
import DocsLayout from '@/layouts/DocsLayout.vue'
import DocSidebar from '@/components/DocSidebar.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { sidebarItems, guideSections } from '@/data/guide'

const activeSection = ref('introduction')

const currentSection = computed(() => {
  return guideSections.find(section => section.id === activeSection.value) ?? guideSections[0]
})

function handleSectionSelect(id: string): void {
  activeSection.value = id
}
</script>

<template>
  <DocsLayout>
    <template #sidebar>
      <DocSidebar
        :items="sidebarItems"
        :active-id="activeSection"
        @select="handleSectionSelect"
      />
    </template>

    <article class="guide-content">
      <header class="guide-header">
        <h1 class="guide-title">{{ currentSection.title }}</h1>
      </header>

      <div class="guide-body">
        <p
          v-for="(paragraph, index) in currentSection.content.split('\n\n')"
          :key="index"
          class="guide-paragraph"
        >
          {{ paragraph }}
        </p>

        <CodeBlock
          v-if="currentSection.codeExample"
          :code="currentSection.codeExample"
          language="typescript"
        />
      </div>

      <!-- Navigation between sections -->
      <nav class="guide-nav" aria-label="Guide navigation">
        <button
          v-if="sidebarItems.findIndex(item => item.id === activeSection) > 0"
          class="guide-nav-btn prev"
          @click="handleSectionSelect(sidebarItems[sidebarItems.findIndex(item => item.id === activeSection) - 1].id)"
        >
          <span class="guide-nav-label">Previous</span>
          <span class="guide-nav-title">
            {{ sidebarItems[sidebarItems.findIndex(item => item.id === activeSection) - 1].title }}
          </span>
        </button>
        <button
          v-if="sidebarItems.findIndex(item => item.id === activeSection) < sidebarItems.length - 1"
          class="guide-nav-btn next"
          @click="handleSectionSelect(sidebarItems[sidebarItems.findIndex(item => item.id === activeSection) + 1].id)"
        >
          <span class="guide-nav-label">Next</span>
          <span class="guide-nav-title">
            {{ sidebarItems[sidebarItems.findIndex(item => item.id === activeSection) + 1].title }}
          </span>
        </button>
      </nav>
    </article>
  </DocsLayout>
</template>

<style scoped>
.guide-content {
  max-width: 720px;
}

.guide-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.guide-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

@media (min-width: 768px) {
  .guide-title {
    font-size: 2.5rem;
  }
}

.guide-body {
  margin-bottom: 3rem;
}

.guide-paragraph {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin: 0 0 1.25rem;
}

.guide-paragraph:last-of-type {
  margin-bottom: 1.5rem;
}

/* Guide Navigation */
.guide-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.guide-nav-btn {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  text-align: left;
  flex: 1;
  max-width: 200px;
}

.guide-nav-btn:hover {
  border-color: var(--color-primary);
  background-color: var(--color-bg-secondary);
}

.guide-nav-btn.next {
  text-align: right;
  margin-left: auto;
}

.guide-nav-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.guide-nav-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
