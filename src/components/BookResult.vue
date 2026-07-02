<template>
  <article class="book-result">
    <img :src="book.cover" :alt="`Copertina di ${book.title}`" />
    <div class="book-info">
      <h2>{{ book.title }}</h2>
      <p class="author">{{ book.author }}</p>
      <p class="description">{{ book.description }}</p>
      <p class="reason"><strong>Perché questo libro:</strong> {{ book.reason }}</p>
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
.book-result {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: var(--space-md);
  animation: slideUp 0.5s ease both;
}

.book-result img {
  width: 200px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  background-color: var(--mood-soft, #ddd);
  flex-shrink: 0;
  animation: slideUp 0.5s ease 0.1s both;
}

.book-info h2 {
  font-size: 2.2rem;
  margin: 0 0 0.3rem 0;
  line-height: 1.1;
  animation: slideUp 0.5s ease 0.2s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>