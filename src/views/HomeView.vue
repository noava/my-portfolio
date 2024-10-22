<template>
  <main>
    <BentoRectangles />
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
      <!-- Loop through project IDs and dynamically assign components -->
      <template v-for="projectId in projectIds" :key="projectId">
        <hr />
        <component :is="getComponentById(projectId)" :id="projectId" />
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'

import BasicProject from '../components/projects/BasicProject.vue'
import CrewBadgeProject from '../components/projects/CrewBadge.vue'
import BentoRectangles from '../components/BentoRectangles.vue'

const projectIds = ref<number[]>([])

onMounted(async () => {
  await getAllProjectIds()
})

// Gets all projects with their IDs
const getAllProjectIds = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('id')
    .order('id', { ascending: true })
  if (error) {
    console.error('Error fetching projects:', error)
    return
  }
  if (data) {
    projectIds.value = data.map((project: { id: number }) => project.id)
  }
}

// Dynamically assign components. Add cases for each custom component
const getComponentById = (id: number) => {
  switch (id) {
    case 2:
      return CrewBadgeProject // Custom component
    // Make custom for case 5. Mellow Nightmare
    default:
      return BasicProject // Default to BasicProject
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';

hr {
  margin: 0;
  border: none;
  border-top: 10px dashed $primary;
}
</style>
