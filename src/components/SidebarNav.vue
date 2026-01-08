<template>
  <nav class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-content">
      <ul class="sidebar-list">
        <li 
          v-for="section in sections" 
          :key="section.id"
          class="sidebar-item"
        >
          <a 
            href="#"
            :class="{ active: activeSection === section.id }"
            @click.prevent="$emit('select', section.id)"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { GuideSection } from '@/types'

interface Props {
  sections: GuideSection[]
  activeSection: string
  isOpen?: boolean
}

defineProps<Props>()

defineEmits<{
  select: [id: string]
}>()
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #f8f8f8;
  border-right: 1px solid #e2e2e2;
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  overflow-y: auto;
}

.sidebar-content {
  padding: 2rem 0;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin: 0;
}

.sidebar-item a {
  display: block;
  padding: 0.75rem 2rem;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.sidebar-item a:hover {
  background: #e8e8e8;
  color: #42b883;
}

.sidebar-item a.active {
  color: #42b883;
  border-left-color: #42b883;
  background: #e8f5f0;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -250px;
    top: 60px;
    z-index: 100;
    transition: left 0.3s;
    height: calc(100vh - 60px);
  }

  .sidebar-open {
    left: 0;
  }
}
</style>
