<template>
  <span class="title">My Brand Guide</span>
  <div class="grid">
    <div class="logos"></div>
    <div class="color-boxes">
      <ColorBox
        v-for="(color, index) in colors"
        :key="index"
        :initialColor="color"
        @colorChange="updateColor(index, $event)"
      />
    </div>
    <div class="text-info">
      <span class="font-title">Saira</span>
      <span class="subtitle">Saira Regular</span>
      <span class="characters"
        >ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ abcdefghijklmnopqrstuvwxyzæøå
        1234567890!#$%&*(){}[].,/?-</span
      >
      <span class="subtitle">Saira Black Italic</span>
      <span class="characters"
        >ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ abcdefghijklmnopqrstuvwxyzæøå
        1234567890!#$%&*(){}[].,/?-</span
      >
      <span class="url">www.example.com</span>
    </div>
    <div class="examples">4</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ColorBox from '../components/ColorBox.vue'

const route = useRoute()
const router = useRouter()

const colors = ref<string[]>([])

watch(
  () => route.query.colors,
  (newColors) => {
    if (newColors) {
      colors.value = (newColors as string).split('-').map((color) => `#${color}`)
    }
  },
  { immediate: true }
)

const updateColor = (index: number, newColor: string) => {
  colors.value[index] = newColor
  const colorsWithoutHash = colors.value.map((color) => color.replace('#', ''))
  router.push({ query: { colors: colorsWithoutHash.join('-') } })
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.title {
  font-size: 100px;
  font-weight: 900;
  font-style: italic;
  margin: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 80px;
}

.logos {
  grid-area: 1 / 1 / 2 / 2;

  img {
    width: 60%;
  }
}

.color-boxes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  grid-area: 1 / 2 / 3 / 3;
}

.text-info {
  grid-area: 2 / 1 / 3 / 2;
  background: $card;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.examples {
  grid-area: 3 / 1 / 4 / 3;
}
</style>
