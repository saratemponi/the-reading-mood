<template>
  <article class="book-card">
    <div class="book-cover-wrapper">
      <img :src="book.cover" :alt="`Copertina di ${book.title}`" />
    </div>
    <h3>{{ book.title }}</h3>
    <p class="author">{{ book.author }}</p>
    <p class="genre">{{ book.genre }}</p>
  </article>
</template>

<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.4s ease both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.book-cover-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  background-color: #e8e8e8;
}

.book-cover-wrapper img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.book-card:hover .book-cover-wrapper img {
  transform: scale(1.04);
  opacity: 0.85;
}

.book-card h3 {
  margin: 0 0 0.2rem 0;
  font-size: 0.95rem;
  line-height: 1.2;
}

.author {
  margin: 0 0 0.2rem 0;
  font-size: 0.8rem;
  opacity: 0.7;
}

.genre {
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.5;
}
</style>