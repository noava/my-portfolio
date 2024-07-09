<template>
  <header>
    <NavbarTab />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterItem />
  </footer>
</template>

<script setup>
import NavbarTab from './components/NavbarTab.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<style lang="scss">
@import './assets/main.scss';

main {
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
}

header {
  background: $navbarfooter;
}
</style>
