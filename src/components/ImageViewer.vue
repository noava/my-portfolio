<template>
  <div
    v-if="imageStore.selectedImage"
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    @click="closeModal"
    @keydown.esc="closeModal"
    @keydown.left="imageStore.previousImage"
    @keydown.right="imageStore.nextImage"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    tabindex="-1"
  >
    <button
      class="max-lg:hidden absolute left-20 text-light p-20"
      @click.stop="imageStore.previousImage"
    >
      <span class="material-symbols-outlined">arrow_back_ios</span>
    </button>
    <img
      :src="imageStore.selectedImage"
      alt="Fullscreen Image"
      class="rounded-2xl max-w-full max-h-full p-2"
    />
    <button
      class="max-lg:hidden absolute right-20 text-light p-20"
      @click.stop="imageStore.nextImage"
    >
      <span class="material-symbols-outlined">arrow_forward_ios</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/images'
import { ref } from 'vue'

const imageStore = useImageStore()

const closeModal = () => {
  imageStore.clearSelectedImage()
}

// Swipe functionality
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchMove = (event: TouchEvent) => {
  touchEndX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  const diffX = touchStartX.value - touchEndX.value
  const swipeThreshold = 50

  if (diffX > swipeThreshold) {
    imageStore.nextImage()
  } else if (diffX < -swipeThreshold) {
    imageStore.previousImage()
  }
}
</script>
