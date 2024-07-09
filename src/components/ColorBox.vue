<template>
  <div class="color-box-container">
    <input class="color-input" type="color" v-model="color" />
    <div class="color-values">
      <p>Hex: {{ color }}</p>
      <p>RGB: {{ rgbColor }}</p>
      <p>HSL: {{ hslColor }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  initialColor: string
}>()

const color = ref(props.initialColor)

watch(color, (newColor) => {
  console.log(`Color changed to: ${newColor}`)
  emit('colorChange', newColor)
})

const emit = defineEmits(['colorChange'])

const rgbColor = computed(() => {
  return hexToRgb(color.value)
})

const hslColor = computed(() => {
  const [r, g, b] = rgbColor.value?.match(/\d+/g)?.map(Number) ?? []
  return r !== undefined && g !== undefined && b !== undefined ? rgbToHsl(r, g, b) : null
})

function hexToRgb(hex: string) {
  let bigint = parseInt(hex.replace('#', ''), 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255
  return `rgb(${r}, ${g}, ${b})`
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2
  if (max == min) {
    h = s = 0
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        h = 0 // Add a default value for 'h'
    }
    h /= 6
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
</script>

<style scoped lang="scss">
.color-box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.color-input {
  width: 100px;
  height: 100px;
  margin: 0 0;
  padding: 0;
  border: none;
  -webkit-color-swatch: none;

  cursor: pointer;
}

.color-values {
  text-align: center;
  p {
    margin: 5px 0;
  }
}
</style>
