<template>
  <div class="playlist-card">
    <img :src="playlist.cover" :alt="`Copertina playlist ${playlist.title}`" />
    <div class="playlist-info">
      <h3>{{ playlist.title }}</h3>
      <p>{{ playlist.description }}</p>
      <a :href="playlist.url" target="_blank" rel="noopener">Listen while you read</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  playlist: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.playlist-card {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.playlist-card img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  background-color: var(--mood-soft, #ddd);
}

.playlist-info h3 {
  margin: 0 0 0.2rem 0;
  font-size: 0.9rem;
}

.playlist-info p {
  margin: 0 0 0.4rem 0;
  font-size: 0.8rem;
  opacity: 0.8;
}

.playlist-info a {
  font-size: 0.85rem;
  text-decoration: underline;
  color: inherit;
}
</style>