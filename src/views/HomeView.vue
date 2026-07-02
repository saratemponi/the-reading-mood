<template>
  <main class="home page-top">
    <header class="home-header">
      <h1>The Reading Mood</h1>
      <p class="subtitle">Choose a feeling. Enter a season. Discover a story.</p>
      <p class="intro">
        Scegli il mood più vicino al tuo stato d'animo e scopri un libro pensato per te.
      </p>
    </header>

    <div class="slider-wrapper" @wheel.prevent="onWheel">
      <button type="button" class="nav-button nav-prev" aria-label="Mood precedente">
        ‹
      </button>

    <Swiper
  class="mood-slider"
  :modules="[Pagination, Navigation]"
  :slides-per-view="1.4"
  :space-between="20"
  :centered-slides="true"
  :pagination="{ clickable: true }"
  :navigation="{ prevEl: '.nav-prev', nextEl: '.nav-next' }"
  :breakpoints="{
    768: { slidesPerView: 3, spaceBetween: 30 }
  }"
  @swiper="onSwiper"
>
        <SwiperSlide v-for="mood in moods" :key="mood.id" v-slot="{ isActive }">
          <div class="slide-wrapper" :class="{ 'is-active': isActive }">
            <MoodCard :mood="mood" />
          </div>
        </SwiperSlide>
      </Swiper>

      <button type="button" class="nav-button nav-next" aria-label="Mood successivo">
        ›
      </button>
    </div>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { moods } from '../data/moods.js'
import MoodCard from '../components/MoodCard.vue'
import { ref } from 'vue'

const swiperInstance = ref(null)

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

let isScrolling = false

function onWheel(e) {
  e.preventDefault()
  if (!swiperInstance.value || isScrolling) return
  
  isScrolling = true
  
  if (e.deltaY > 0) {
    swiperInstance.value.slideNext()
  } else {
    swiperInstance.value.slidePrev()
  }

  setTimeout(() => {
    isScrolling = false
  }, 1000)
}
</script>

<style scoped>
.home {
  height: 100vh;
  padding: 7rem var(--space-md) 2rem var(--space-md);
  background-color: #EFEEF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.home-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
}

.home-header h1 {
  font-size: 3rem;
  margin-bottom: 0.4rem;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.intro {
  color: #555;
  font-size: 0.9rem;
  max-width: 480px;
  margin: 0 auto;
}

.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.mood-slider {
  flex: 1;
  padding: 0.5rem 0 2rem 0;
}

.slide-wrapper {
  opacity: 0.35;
  transform: scale(0.85);
  transition: opacity var(--transition), transform var(--transition);
  cursor: pointer;
}

.slide-wrapper.is-active {
  opacity: 1;
  transform: scale(1);
}

.nav-button {
  background: none;
  border: none;
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
  cursor: pointer;
  padding: 0 0.8rem;
  color: var(--color-text);
  flex-shrink: 0;
  z-index: 2;
  transition: opacity var(--transition);
  opacity: 0.5;
}

.nav-button:hover {
  opacity: 1;
}

.nav-button.swiper-button-disabled {
  opacity: 0.15;
  cursor: default;
}

.home-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
}

.home-nav a {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
  padding-bottom: 2px;
}

.home-nav a:hover {
  border-color: var(--color-text);
}

:deep(.swiper-pagination-bullet) {
  background-color: var(--color-text);
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

@media (max-width: 768px) {
  .home {
    height: auto;
    min-height: 100vh;
    padding: 1.5rem 1rem;
    overflow: auto;
  }

  .home-header h1 {
    font-size: 2.5rem;
  }

  .slider-wrapper {
    margin-bottom: 1rem;
  }

  .nav-button {
    display: none;
  }
}
</style>

