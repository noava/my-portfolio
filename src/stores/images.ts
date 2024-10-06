import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/supabase'

export const useImageStore = defineStore('images', () => {
  const images = ref<string[]>([])
  const selectedImage = ref<string | null>(null)
  const imageCache = ref<{ [key: string]: HTMLImageElement }>({}) // Cache for loaded images

  // Fetch images from Supabase
  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('images_shown')
      .select('image_url, "order"')
      .order('order', { ascending: true })

    if (error) {
      console.error('Error fetching images from the database:', error)
      return []
    }

    images.value = data.map((file) => file.image_url)

    // Store images in cache
    images.value.forEach((url) => {
      const img = new Image()
      img.src = url
      imageCache.value[url] = img
    })
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
