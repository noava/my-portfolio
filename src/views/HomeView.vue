<template>
  <main>
    <div class="self-center ml-[8vw] max-lg:mt-5 text-[15vw] lg:text-[10vw]">
      <h1 class="-mb-[7vw]">Niklas</h1>
      <h1 class="mx-[15vw] mb-[0vw]">Vezina</h1>
    </div>
    <!-- <BentoRectangles /> -->
    <div class="flex flex-row justify-around [&>*]:text-8xl my-10">
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
      <span class="material-symbols-outlined">keyboard_arrow_down</span>
    </div>
    <section id="projects">
      <div class="flex flex-col items-center mb-12 lg:mb-12">
        <h1 class="text-primary text-[11vw] lg:text-[9xl] tracking-[0.5em] -mr-[0.5em] lg:mb-10">
          Projects
        </h1>
        <h2 class="text-[5vw] lg:text-4xl">Includes graphic design and web design</h2>
      </div>
      <!-- Each Project will be listed here as a component by inputting a number -->
      <!-- For each Custom Project there will be different styling -->
      <hr />
      <BasicProject :id="1" />
      <hr />
      <CrewBadgeProject :id="2" />
      <hr />
      <BasicProject :id="3" />
    </section>
  </main>
</template>

<script setup lang="ts">
import BasicProject from '../components/projects/BasicProject.vue'
import CrewBadgeProject from '../components/projects/CrewBadge.vue'
import BentoRectangles from '../components/BentoRectangles.vue'
</script>

<style lang="scss">
@import '../assets/main.scss';

hr {
  margin: 0;
  border: none;
  border-top: 10px dashed $primary;
}
</style>
