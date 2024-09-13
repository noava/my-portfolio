<template>
  <nav>
    <RouterLink class="logo" to="/">Noava</RouterLink>

    <div :class="['links', { open: isMenuOpen }]" @click="closeMenu">
      <RouterLink class="nav-item" to="/projects">Projects</RouterLink>
      <RouterLink class="nav-item" to="/brandguide">Brand Guide</RouterLink>
      <RouterLink class="nav-item" to="/nothin">Nothin</RouterLink>
    </div>

    <div class="hamburger" @click="toggleMenu">
      <span v-if="isMenuOpen" class="material-symbols-outlined"> close </span>
      <span v-else class="material-symbols-outlined"> menu </span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $headerheight;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  .logo {
    text-decoration: none;
    color: $text;
    font-style: italic;
    font-weight: 800;
    font-size: 4rem;
    margin-left: 1em;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 1em;

    .nav-item {
      color: $text;
      text-decoration: none;
      font-size: 1.5rem;
      margin: 1rem;
      -webkit-tap-highlight-color: $primary;
    }
    &.open {
      display: block;
      position: absolute;
      top: $headerheight;
      left: 0;
      width: 100%;
      text-align: center;

      .nav-item {
        display: block;
        margin: 0;
        padding: 0.5em;
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;

    margin-right: 1em;
    cursor: pointer;

    span {
      font-size: 3rem;
    }
  }
}

@media (max-width: 768px) {
  nav {
    .links {
      display: none;
      flex-direction: column;
      height: 100vh;
      background: none;

      .nav-item {
        background: $navbarfooter;
      }
    }

    .hamburger {
      display: flex;
    }
  }
}
</style>
