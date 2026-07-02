<template>
  <div class="season-selector">
    <button
      v-for="season in seasons"
      :key="season.id"
      type="button"
      class="season-chip"
      :class="{ active: season.id === modelValue }"
      @click="$emit('update:modelValue', season.id)"
    >
      {{ season.name }}
    </button>
  </div>
</template>

<script setup>
import { seasons } from '../data/seasons.js'

defineProps({
  modelValue: {
    type: String,
    default: null
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.season-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.season-chip {
  padding: 0.5rem 1.1rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.season-chip:hover {
  background-color: var(--mood-accent, var(--color-text));
  color: var(--mood-background, var(--color-background));
  opacity: 0.75;
}

.season-chip.active {
  background-color: var(--mood-accent, var(--color-text));
  color: var(--mood-background, var(--color-background));
  opacity: 1;
}

@media (max-width: 768px) {
  .season-selector {
    gap: 0.4rem;
  }
}
</style>