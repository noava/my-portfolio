<template>
  <div class="footer">
    <div class="logo">Noava</div>
    <div class="burger">
      <div class="bread-top">
        <RouterLink class="nav-item" to="/">Contact Me</RouterLink>
      </div>

      <div class="meat">
        <RouterLink class="nav-item" to="/brandguide">Brand Guide</RouterLink>
      </div>
      <div class="bread-bottom">
        <RouterLink class="nav-item" to="/">Projects</RouterLink>
      </div>
    </div>
    <div class="legal">© 2024 Noava</div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.nav-item {
  color: $text;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    filter: saturate(300%);
    letter-spacing: 0.2rem;
  }
}

.footer {
  background: $navbarfooter;
  height: $footerheight;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  .logo {
    font-style: italic;
    font-weight: 800;
    font-size: 3.125vw;
  }

  .burger {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bread-top,
    .meat,
    .bread-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 280px;
      height: 60px;
    }

    .bread-top {
      background: #71553c;
      border-radius: 50px 50px 0 0;
    }

    .meat {
      width: 350px;
      background: #533224;
      border-radius: 50px;
    }

    .bread-bottom {
      background: #71553c;
      border-radius: 0 0 50px 50px;
    }
  }

  .legal {
    font-size: 1vw;
    color: $text;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;

    .logo {
      font-size: 8vw;
    }

    .legal {
      font-size: 3vw;
    }
  }
}
</style>
