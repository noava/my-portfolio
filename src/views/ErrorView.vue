<template>
  <div class="container">
    <span class="title">404, PAGE NOT FOUND</span>
    <span class="subtitle">The page you requested does not exist D:</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px;
  height: calc(100vh - $headerheight - $footerheight);
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin-top: 30px;
}

.subtitle {
  font-size: 30px;
  margin-top: 30px;
}
</style>
