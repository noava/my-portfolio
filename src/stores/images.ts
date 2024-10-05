import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getImageUrls } from '@/supabase'

export const useImageStore = defineStore('images', () => {
  const images = ref<string[]>([])

  const selectedImage = ref<string | null>(null)

  const fetchImages = async () => {
    // Replace 'project_images' with the name of your storage bucket and folder
    const imageUrls = await getImageUrls('project_images', '')
    images.value = imageUrls
  }

  const selectImage = (url: string) => {
    selectedImage.value = url
  }

  const clearSelectedImage = () => {
    selectedImage.value = null
  }

  const nextImage = () => {
    if (selectedImage.value) {
      const currentIndex = images.value.indexOf(selectedImage.value)
      selectedImage.value = images.value[(currentIndex + 1) % images.value.length]
    }
  }

  const previousImage = () => {
    if (selectedImage.value) {
      const currentIndex = images.value.indexOf(selectedImage.value)
      selectedImage.value =
        images.value[(currentIndex - 1 + images.value.length) % images.value.length]
    }
  }

  return {
    images,
    selectedImage,
    fetchImages,
    selectImage,
    clearSelectedImage,
    nextImage,
    previousImage
  }
})
