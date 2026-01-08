<template>
  <button 
    :class="['btn', `btn-${variant}`]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button'
})
</script>

<style scoped>
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-primary:hover {
  background: #35a372;
}

.btn-secondary {
  background: #35495e;
  color: white;
}

.btn-secondary:hover {
  background: #2c3e50;
}
</style>
