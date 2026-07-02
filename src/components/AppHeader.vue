<template>
  <header class="app-header">
    <RouterLink to="/" class="header-logo">
      The Reading Mood
    </RouterLink>

    <nav class="header-nav">
      <RouterLink to="/archive" class="nav-link">Archive</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.header-logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: inherit;
  text-decoration: none;
  transition: opacity var(--transition);
}

.header-logo:hover {
  opacity: 0.6;
}

.header-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: inherit;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition), opacity var(--transition);
}

.nav-link:hover {
  border-color: currentColor;
}

.nav-link.router-link-active {
  border-color: currentColor;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
  }

  .header-logo {
    font-size: 0.95rem;
  }

  .header-nav {
    gap: 1rem;
  }
}
</style>