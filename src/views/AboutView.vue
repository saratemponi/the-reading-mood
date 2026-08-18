<template>
  <main class="about page-top">
    <div class="about-layout">

      <div class="about-intro">
        <h1>About</h1>
        <p class="about-lead">
          The Reading Mood nasce da una domanda semplice: e se la scelta di un libro
          dipendesse non solo dal genere, ma da come ti senti in questo momento?
          Un progetto che unisce libri, emozioni, colore e musica in un'esperienza
          web interattiva.
        </p>
      </div>

      <div class="about-author">
        <div class="author-content">
          <h2>Chi sono</h2>
          <p class="author-name">Sara Temponi</p>
          <p class="author-bio">
            Sono Sara, studentessa di Graphic Design e Multimedia.
            La lettura è sempre stata una delle mie passioni e spesso scelgo cosa leggere
            non solo in base al genere, ma anche al momento e all'atmosfera che sto cercando.
            Da questa abitudine nasce The Reading Mood: un progetto che unisce libri, emozioni,
            colore e musica in un'esperienza web interattiva.
            Nel mio lavoro cerco un equilibrio tra semplicità, atmosfera e funzionalità,
            costruendo esperienze visive capaci di comunicare non solo attraverso ciò che
            mostrano, ma anche attraverso ciò che fanno sentire.
          </p>
        </div>
      </div>

      <div class="about-process">
        <h2>Come è nato</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="process-label">Concept</span>
            <p>Il progetto parte da un'osservazione personale: la scelta di un libro dipende
            spesso dallo stato d'animo del momento. Da questa idea nasce la struttura dei
            mood — otto atmosfere emotive, ognuna con la sua palette cromatica, la sua
            illustrazione e la sua selezione di libri.</p>
          </div>
          <div class="process-step">
            <span class="process-label">Design</span>
            <p>Prima di scrivere codice, il progetto è stato progettato in Figma con un sistema
            di variabili, componenti e varianti che rispecchia la struttura Vue.
            Lo stile è minimal editoriale: Cormorant Garamond per i titoli,
            Inter per testi e interfaccia, palette dinamiche per ogni mood.</p>
          </div>
          <div class="process-step">
            <span class="process-label">Sviluppo</span>
            <p>Il sito è stato sviluppato con Vue 3 e Vite, usando routing dinamico,
            componenti riutilizzabili, props ed eventi. I dati di 192 libri — uno per ogni
            combinazione di mood, stagione e genere — sono organizzati in file JavaScript locali.
            Lo slider è realizzato con Swiper, le animazioni con CSS puro.</p>
          </div>
        </div>
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
  gap: 5rem;
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
  max-width: 680px;
  opacity: 0.85;
}

/* Titoli sezione */
.about-author h2,
.about-process h2,
.about-steps h2,
.about-moods h2 {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 1.5rem;
}

/* Autore */
.author-content {
  max-width: 680px;
}

.author-name {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.author-bio {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.75;
  opacity: 0.8;
}

/* Processo */
.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.process-step {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.process-label {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 500;
}

.process-step p {
  font-family: var(--font-body);
  font-size: 0.875rem;
  line-height: 1.7;
  opacity: 0.75;
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

/* Responsive */
@media (max-width: 768px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mood-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-intro h1 {
    font-size: 2.5rem;
  }
}
</style>