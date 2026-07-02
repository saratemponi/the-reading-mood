<template>
  <div class="genre-selector">
    <button
      v-for="genre in genres"
      :key="genre.id"
      type="button"
      class="genre-card"
      :class="{ active: genre.id === modelValue }"
      @click="$emit('update:modelValue', genre.id)"
    >
      <h3>{{ genre.name }}</h3>
      <p>{{ genre.description }}</p>
    </button>
  </div>
</template>

<script setup>
import { genres } from '../data/genres.js'

defineProps({
  modelValue: {
    type: String,
    default: null
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.genre-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.genre-card {
  text-align: left;
  padding: 0.8rem 1rem;
  border: 1px solid currentColor;
  border-radius: 10px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-body);
  transition: background-color 0.25s ease, color 0.25s ease;
}

.genre-card:hover {
  background-color: var(--mood-accent, var(--color-text));
  color: var(--mood-background, var(--color-background));
  opacity: 0.75;
}

.genre-card.active {
  background-color: var(--mood-accent, var(--color-text));
  color: var(--mood-background, var(--color-background));
  opacity: 1;
}

.genre-card h3 {
  margin: 0 0 0.2rem 0;
  font-size: 0.9rem;
  color: inherit;
}

.genre-card p {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.75;
  color: inherit;
}

@media (max-width: 768px) {
  .genre-selector {
    grid-template-columns: 1fr 1fr;
  }
}
</style>