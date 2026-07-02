<template>
  <main class="about page-top">
    <div class="about-layout">

      <div class="about-intro">
        <h1>About</h1>
        <p class="about-lead">
          The Reading Mood è un sito interattivo che consiglia un libro e una playlist
          in base al tuo stato d'animo. Perché la scelta di una lettura non dipende
          solo dal genere, ma da come ti senti in questo momento.
        </p>
      </div>

      <div class="about-steps">
        <h2>Come funziona</h2>
        <div class="steps">
          <div class="step">
            <span class="step-number">01</span>
            <p>Scegli il mood che senti più vicino al tuo stato d'animo dallo slider.</p>
          </div>
          <div class="step">
            <span class="step-number">02</span>
            <p>Seleziona la stagione e il genere letterario che preferisci in questo momento.</p>
          </div>
          <div class="step">
            <span class="step-number">03</span>
            <p>Scopri il libro e la playlist pensati apposta per te.</p>
          </div>
        </div>
      </div>

      <div class="about-moods">
        <h2>I mood</h2>
        <div class="mood-grid">
          <RouterLink
            v-for="mood in moods"
            :key="mood.id"
            :to="`/mood/${mood.id}`"
            class="mood-grid-item"
            :style="{
              backgroundColor: mood.palette.soft,
              color: mood.palette.text
            }"
          >
            <span class="mood-grid-number">{{ mood.number }}</span>
            <span class="mood-grid-name">{{ mood.name }}</span>
            <span class="mood-grid-tagline">{{ mood.tagline }}</span>
          </RouterLink>
        </div>
      </div>

      <div class="about-bottom">
        <div class="about-section">
          <h2>Design</h2>
          <p>Stile minimal editoriale, progettato in Figma con un sistema di componenti e variabili che rispecchia la struttura Vue. Tipografia: Cormorant Garamond per i titoli, Inter per testi e interfaccia.</p>
        </div>

        <div class="about-section">
          <h2>Tecnologia</h2>
          <p>Vue 3, Vite, Vue Router, Swiper. Dati organizzati in file JavaScript locali. CSS personalizzato con variabili dinamiche per le palette dei mood.</p>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import { moods } from '../data/moods.js'
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 7rem var(--space-md) 3rem var(--space-md);
  background-color: var(--color-background);
}

.about-layout {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Intro */
.about-intro h1 {
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 1.2rem;
}

.about-lead {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.75;
  max-width: 620px;
  opacity: 0.85;
}

/* Titoli sezione */
.about-steps h2,
.about-moods h2,
.about-section h2 {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 1.5rem;
}

/* Steps */
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.step-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  opacity: 0.25;
  line-height: 1;
}

.step p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.65;
  opacity: 0.8;
}

/* Griglia mood */
.mood-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.mood-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.2rem 1rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: transform var(--transition), box-shadow var(--transition);
  gap: 0.4rem;
}

.mood-grid-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.mood-grid-number {
  font-family: var(--font-body);
  font-size: 0.65rem;
  opacity: 0.5;
  letter-spacing: 0.05em;
}

.mood-grid-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 500;
}

.mood-grid-tagline {
  font-family: var(--font-body);
  font-size: 0.75rem;
  opacity: 0.7;
  line-height: 1.4;
}

/* Bottom */
.about-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.about-section p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.65;
  opacity: 0.75;
}

/* Responsive */
@media (max-width: 768px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mood-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-bottom {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-intro h1 {
    font-size: 2.5rem;
  }
}
</style>