<script setup lang="ts">
import type { GuideSection } from '@/types'

interface Props {
  sections: GuideSection[]
  activeSection: string
}

interface Emits {
  (e: 'select', id: string): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const handleSelect = (id: string): void => {
  emit('select', id)
}
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <button
        v-for="section in sections"
        :key="section.id"
        class="sidebar-item"
        :class="{ active: activeSection === section.id }"
        @click="handleSelect(section.id)"
      >
        {{ section.title }}
      </button>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  border-right: 1px solid #e2e8f0;
  background: #f8f9fa;
  height: 100%;
  position: sticky;
  top: 64px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
}

.sidebar-item {
  padding: 0.75rem 1.5rem;
  text-align: left;
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.sidebar-item:hover {
  background: #e9ecef;
  color: #42b883;
}

.sidebar-item.active {
  color: #42b883;
  background: #e9ecef;
  border-left-color: #42b883;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: relative;
    top: 0;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .sidebar-nav {
    flex-direction: row;
    overflow-x: auto;
    padding: 1rem 0;
  }

  .sidebar-item {
    white-space: nowrap;
    border-left: none;
    border-bottom: 3px solid transparent;
  }

  .sidebar-item.active {
    border-left-color: transparent;
    border-bottom-color: #42b883;
  }
}
</style>
