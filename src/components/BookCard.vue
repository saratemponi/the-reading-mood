<template>
  <article class="book-card">
    <div class="book-cover-wrapper">
      <img :src="book.cover" :alt="`Copertina di ${book.title}`" />
    </div>
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="genre">{{ book.genre }}</p>
    </div>
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
  from { opacity: 0; }
  to { opacity: 1; }
}

.book-cover-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-color: #e8e4de;
  aspect-ratio: 2 / 3;
  box-shadow: 3px 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-cover-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.book-card:hover .book-cover-wrapper {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 4px 12px 24px rgba(0,0,0,0.22);
}

.book-info {
  padding: 0.6rem 0.2rem 0 0.2rem;
}

.book-card h3 {
  margin: 0 0 0.15rem 0;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.genre {
  margin: 0.2rem 0 0 0;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.4;
}
</style>