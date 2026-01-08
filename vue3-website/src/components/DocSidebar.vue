<script setup lang="ts">
import type { SidebarItem } from '@/types'

interface Props {
  items: SidebarItem[]
  activeId: string
}

interface Emits {
  (e: 'select', id: string): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <aside class="sidebar" role="navigation" aria-label="Documentation sidebar">
    <nav class="sidebar-nav">
      <ul class="sidebar-list">
        <li
          v-for="item in items"
          :key="item.id"
          class="sidebar-item"
        >
          <button
            class="sidebar-link"
            :class="{ active: activeId === item.id }"
            :aria-current="activeId === item.id ? 'page' : undefined"
            @click="$emit('select', item.id)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 100%;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .sidebar {
    width: 220px;
    flex-shrink: 0;
    padding: 1.5rem 0;
    position: sticky;
    top: calc(var(--header-height) + 1rem);
    max-height: calc(100vh - var(--header-height) - 2rem);
    overflow-y: auto;
  }
}

.sidebar-nav {
  padding-right: 1rem;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 0.25rem;
}

.sidebar-link {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  border-radius: 0.375rem;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar-link:hover {
  color: var(--color-text);
  background-color: var(--color-bg-secondary);
}

.sidebar-link.active {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}
</style>
