<template>
  <RouterLink
    :to="`/mood/${mood.id}`"
    class="mood-card"
    :style="{
      background: `linear-gradient(160deg, ${mood.palette.primary}, ${mood.palette.accent})`,
      color: lightTextMoods.includes(mood.id) ? mood.palette.soft : mood.palette.text
    }"
  >
    <span class="mood-number">{{ mood.number }} / 08</span>
    <img :src="mood.image" :alt="`Illustrazione mood ${mood.name}`" class="mood-image" />
    <h2>{{ mood.name }}</h2>
    <p>{{ mood.tagline }}</p>
  </RouterLink>
</template>

<script setup>
defineProps({
  mood: {
    type: Object,
    required: true
  }
})
const lightTextMoods = ['ribellione']
</script>

<style scoped>
.mood-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mood-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.mood-number {
  font-size: 0.8rem;
  opacity: 0.85;
}

.mood-image {
  width: 100%;
  flex: 1;
  object-fit: contain;
  margin: 0.5rem 0;
  min-height: 0;
}

.mood-card h2 {
  margin: 0 0 0.3rem 0;
  color: inherit;
}

.mood-card p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
  color: inherit;
}
</style>