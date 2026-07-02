<template>
  <main
    v-if="mood"
    class="mood-page page-top"
    :style="{
      '--mood-background': mood.palette.background,
      '--mood-primary': mood.palette.primary,
      '--mood-accent': mood.palette.accent,
      '--mood-soft': mood.palette.soft,
      '--mood-text': mood.palette.text
    }"
  >
    <div class="mood-layout">
      <div class="mood-left">
        <span class="mood-number">{{ mood.number }} / 08</span>
        <h1>{{ mood.name }}</h1>
        <p class="tagline">{{ mood.tagline }}</p>
        <p class="description">{{ mood.description }}</p>

        <section class="selectors">
          <h2>Scegli la stagione</h2>
          <SeasonSelector v-model="selectedSeason" />

          <h2>Scegli il genere</h2>
          <GenreSelector v-model="selectedGenre" />
        </section>

        <button
  v-if="selectedSeason && selectedGenre"
  type="button"
  class="btn-primary find-button"
  @click="goToResult"
>
  Find my reading
</button>
      </div>

      <div class="mood-right">
        <img
          v-if="mood.image"
          :src="mood.image"
          :alt="`Illustrazione ${mood.name}`"
          class="mood-illustration"
        />
      </div>
    </div>
  </main>

  <main v-else class="mood-page page-top">
    <p>Mood non trovato.</p>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { moods } from '../data/moods.js'
import SeasonSelector from '../components/SeasonSelector.vue'
import GenreSelector from '../components/GenreSelector.vue'

const route = useRoute()
const router = useRouter()

const mood = computed(() => {
  return moods.find(m => m.id === route.params.id)
})

const selectedSeason = ref(null)
const selectedGenre = ref(null)

function goToResult() {
  router.push({
    path: '/result',
    query: {
      mood: mood.value.id,
      season: selectedSeason.value,
      genre: selectedGenre.value
    }
  })
}
</script>

<style scoped>
.mood-page {
  min-height: 100vh;
  padding: 7rem var(--space-md) 2rem var(--space-md);
  background-color: var(--mood-background);
  color: var(--mood-text);
}

.mood-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  min-height: calc(100vh - 9rem);
}

.mood-left {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mood-number {
  display: block;
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  opacity: 0.6;
  margin-bottom: 0.4rem;
}

.mood-page h1 {
  font-size: 4.5rem;
  line-height: 1;
  margin-bottom: 0.4rem;
}

.tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--mood-accent);
  margin-bottom: 1rem;
}

.description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 0;
}

.selectors {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
}

.selectors h2 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 1rem;
  opacity: 0.6;
}


.find-button {
  margin-top: 2rem;
}

.find-button:hover {
  opacity: 0.85;
}

.mood-right {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.mood-illustration {
  width: 100%;
  max-width: 460px;
  max-height: 460px;
  object-fit: contain;
  border-radius: 24px;
  animation: fadeIn 0.6s ease both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .mood-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  .mood-right {
    order: -1;
  }

  .mood-illustration {
    max-width: 240px;
    max-height: 240px;
  }

  .mood-page h1 {
    font-size: 3rem;
  }
}
</style>