<template>
  <main class="archive page-top">
    <div class="archive-header">
      <h1>Archive</h1>
      <p class="intro">{{ filteredBooks.length }} libri</p>
    </div>

    <div class="archive-controls">
      <div class="filters">
        <label>
          Mood
          <select v-model="selectedMood">
            <option value="">Tutti</option>
            <option v-for="mood in moods" :key="mood.id" :value="mood.id">
              {{ mood.name }}
            </option>
          </select>
        </label>

        <label>
          Genere
          <select v-model="selectedGenre">
            <option value="">Tutti</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </label>

        <label>
          Stagione
          <select v-model="selectedSeason">
            <option value="">Tutte</option>
            <option v-for="season in seasons" :key="season.id" :value="season.id">
              {{ season.name }}
            </option>
          </select>
        </label>
      </div>

      <div class="search-reset">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cerca un titolo..."
          class="search-input"
        />
        <button
          v-if="selectedMood || selectedGenre || selectedSeason || searchQuery"
          type="button"
          class="btn-text reset-btn"
          @click="resetFilters"
        >
          × Reset
        </button>
      </div>
    </div>

    <div class="shelves-wrapper">
      <p v-if="filteredBooks.length === 0" class="empty">
        Nessun libro corrisponde a questi filtri.
      </p>

      <div v-else class="shelves">
        <div
          v-for="(shelf, index) in shelves"
          :key="index"
          class="shelf"
        >
          <div class="shelf-books">
            <BookCard
              v-for="book in shelf"
              :key="book.id"
              :book="book"
            />
          </div>
          <div class="shelf-plank"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { books } from '../data/books.js'
import { moods } from '../data/moods.js'
import { genres } from '../data/genres.js'
import { seasons } from '../data/seasons.js'
import BookCard from '../components/BookCard.vue'

const selectedMood = ref('')
const selectedGenre = ref('')
const selectedSeason = ref('')
const searchQuery = ref('')

const BOOKS_PER_SHELF = 5

const filteredBooks = computed(() => {
  return books.filter(book => {
    const matchesMood = selectedMood.value === '' || book.moods.includes(selectedMood.value)
    const matchesGenre = selectedGenre.value === '' || book.genre === selectedGenre.value
    const matchesSeason = selectedSeason.value === '' || book.seasons.includes(selectedSeason.value)
    const matchesSearch = searchQuery.value === '' ||
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesMood && matchesGenre && matchesSeason && matchesSearch
  })
})

const shelves = computed(() => {
  const result = []
  for (let i = 0; i < filteredBooks.value.length; i += BOOKS_PER_SHELF) {
    result.push(filteredBooks.value.slice(i, i + BOOKS_PER_SHELF))
  }
  return result
})

function resetFilters() {
  selectedMood.value = ''
  selectedGenre.value = ''
  selectedSeason.value = ''
  searchQuery.value = ''
}
</script>

<style scoped>
.archive {
  height: 100vh;
  padding: 7rem var(--space-md) 1.5rem var(--space-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-background);
}

.archive-header {
  margin-bottom: 0.8rem;
  flex-shrink: 0;
}

.archive-header h1 {
  font-size: 2.5rem;
  line-height: 1;
}

.intro {
  font-size: 0.8rem;
  opacity: 0.5;
  margin-top: 0.2rem;
}

/* Controlli */
.archive-controls {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.filters {
  display: flex;
  gap: 1.2rem;
  align-items: flex-end;
}

.filters label {
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  opacity: 0.6;
  gap: 0.3rem;
}

.filters select {
  padding: 0.4rem 0.6rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  padding-right: 1.8rem;
}

.filters select:focus {
  border-color: rgba(0,0,0,0.4);
}

/* Ricerca */
.search-reset {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.search-input {
  padding: 0.4rem 0.8rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  outline: none;
  width: 200px;
  transition: border-color 0.2s ease;
}

.search-input::placeholder {
  opacity: 0.4;
}

.search-input:focus {
  border-color: rgba(0,0,0,0.4);
}

.reset-btn {
  opacity: 0.5;
  font-size: 0.75rem;
  white-space: nowrap;
}

.reset-btn:hover {
  opacity: 1;
}

/* Scaffale */
.shelves-wrapper {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.shelves-wrapper::-webkit-scrollbar {
  width: 3px;
}

.shelves-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.shelves-wrapper::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.15);
  border-radius: 4px;
}

.shelves {
  display: flex;
  flex-direction: column;
}

.shelf {
  display: flex;
  flex-direction: column;
}

.shelf-books {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: flex-end;
  padding: 1.2rem 0.5rem 0 0.5rem;
}

.shelf-plank {
  height: 10px;
  background: linear-gradient(180deg, #D4B896 0%, #B8956A 50%, #9E7A52 100%);
  border-radius: 2px;
  margin: 0 0.3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  opacity: 0.7;
}

.empty {
  opacity: 0.5;
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .archive {
    height: auto;
    min-height: 100vh;
    overflow: auto;
  }

  .archive-controls {
    flex-direction: column;
    align-items: flex-start;
  }

  .filters {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .search-input {
    width: 100%;
  }

  .shelf-books {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>