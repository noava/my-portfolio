<template>
  <main>
    <div class="name">
      <h1 class="firstname">Niklas</h1>
      <h1 class="lastname">Vezina</h1>
    </div>
    <BentoRectangles />
    <div class="scroll-down">
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
    </div>
    <div class="project-title">
      <h1 class="title">Projects</h1>
      <h2 class="text">Includes graphic design and web design</h2>
    </div>
    <!-- Each Project will be listed here as a component by inputting a number -->
    <!-- For each Custom Project there will be different styling -->
    <BasicProject :id="1" />
    <CrewBadgeProject :id="2" />
    <BasicProject :id="3" />
  </main>
</template>

<script setup lang="ts">
import BasicProject from '../components/projects/BasicProject.vue'
import CrewBadgeProject from '../components/projects/CrewBadge.vue'
import BentoRectangles from '../components/BentoRectangles.vue'
</script>

<style lang="scss">
@import '../assets/main.scss';

.name {
  margin-left: 150px;
  h1 {
    font-size: 13em;
  }
  .firstname {
    margin: 0px 0px -130px 0px;
  }
  .lastname {
    margin: 0px 300px 20px;
  }
}

.scroll-down {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  span {
    font-size: 100px;
  }
}

.project-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  .title {
    color: $primary;
    font-size: 128px;
    letter-spacing: 0.5em;
    margin-right: -0.5em;
  }

  .text {
    font-size: 40px;
  }
}

hr {
  margin-top: 50px;
  border: none;
  border-top: 10px dashed $primary;
}
</style>
