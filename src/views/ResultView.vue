<template>
  <main class="result-page page-top" v-if="book" :style="moodStyle">
    <div class="result-layout">

      <div class="result-left">
        <img :src="book.cover" :alt="`Copertina di ${book.title}`" class="book-cover" />
      </div>

      <div class="result-right">
        <div class="result-tags">
          <span class="tag">{{ route.query.mood }}</span>
          <span class="tag">{{ route.query.season }}</span>
          <span class="tag">{{ route.query.genre }}</span>
        </div>

        <h1 class="book-title">{{ book.title }}</h1>
        <p class="book-author">{{ book.author }}</p>
        <p class="book-description">{{ book.description }}</p>

        <div class="playlist-card" v-if="playlist">
          <img :src="playlist.cover" :alt="playlist.title" class="playlist-cover" />
          <div class="playlist-info">
            <p class="playlist-label">Playlist abbinata</p>
            <h3 class="playlist-title">{{ playlist.title }}</h3>
            <p class="playlist-description">{{ playlist.description }}</p>
            <a :href="playlist.url" target="_blank" rel="noopener" class="playlist-link">
              Listen while you read →
            </a>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="btn-primary" @click="startAgain">
            Start again
          </button>
          <RouterLink :to="`/mood/${route.query.mood}`" class="btn-secondary">
            Change mood
          </RouterLink>
        </div>
      </div>

    </div>
  </main>

  <main v-else class="result-empty page-top">
    <p>Nessun libro trovato per queste scelte.</p>
    <RouterLink to="/" class="btn-primary">Start again</RouterLink>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { findBook } from '../data/findBook.js'
import { playlists } from '../data/playlists.js'
import { moods } from '../data/moods.js'

const route = useRoute()
const router = useRouter()

const book = computed(() => {
  return findBook(route.query.mood, route.query.season, route.query.genre)
})

const playlist = computed(() => {
  if (!book.value) return null
  return playlists.find(p => p.id === book.value.playlistId)
})

const currentMood = computed(() => {
  return moods.find(m => m.id === route.query.mood)
})

const moodStyle = computed(() => {
  if (!currentMood.value) return {}
  return {
    '--mood-background': currentMood.value.palette.background,
    '--mood-accent': currentMood.value.palette.accent,
    '--mood-soft': currentMood.value.palette.soft,
    '--mood-text': currentMood.value.palette.text
  }
})

function startAgain() {
  router.push('/')
}
</script>

<style scoped>
.result-page {
  min-height: 100vh;
  padding: 7rem var(--space-md) 3rem var(--space-md);
  background-color: var(--mood-background, var(--color-background));
  color: var(--mood-text, var(--color-text));
}

.result-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

/* Copertina */
.result-left {
  position: sticky;
  top: 7rem;
}

.book-cover {
  width: 240px;
  height: 340px;
  object-fit: cover;
  border-radius: 8px;
  background-color: var(--mood-soft, #ddd);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.5s ease both;
}

/* Tag */
.result-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.tag {
  font-family: var(--font-body);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.8rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  opacity: 0.6;
}

/* Libro */
.book-title {
  font-size: 2.8rem;
  line-height: 1.1;
  margin-bottom: 0.4rem;
  animation: slideUp 0.5s ease 0.1s both;
}

.book-author {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 1.2rem;
}

.book-description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 2rem;
  opacity: 0.85;
}

/* Playlist */
.playlist-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.2rem;
  border: 1px solid currentColor;
  border-radius: 12px;
  margin-bottom: 2rem;
  opacity: 0.85;
  transition: opacity var(--transition);
}

.playlist-card:hover {
  opacity: 1;
}

.playlist-cover {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  background-color: var(--mood-soft, #ddd);
  flex-shrink: 0;
}

.playlist-label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.6;
  margin-bottom: 0.2rem;
}

.playlist-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.playlist-description {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.playlist-link {
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
  transition: opacity var(--transition);
}

.playlist-link:hover {
  opacity: 0.6;
}

/* Bottoni */
.actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-primary {
  padding: 0.7rem 1.6rem;
  background-color: var(--mood-accent, var(--color-text));
  color: var(--mood-background, #fff);
  border: none;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity var(--transition);
  text-decoration: none;
}

.btn-primary:hover {
  opacity: 0.8;
}

.btn-secondary {
  padding: 0.7rem 1.6rem;
  background: transparent;
  color: inherit;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);
  text-decoration: none;
}

.btn-secondary:hover {
  background-color: currentColor;
  color: var(--mood-background, #fff);
}

/* Animazioni */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Empty state */
.result-empty {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .result-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .result-left {
    position: static;
    display: flex;
    justify-content: center;
  }

  .book-cover {
    width: 160px;
    height: 230px;
  }

  .book-title {
    font-size: 2rem;
  }
}
</style>