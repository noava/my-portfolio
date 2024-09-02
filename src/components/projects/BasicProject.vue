<template>
  <hr />
  <div class="container self-center lg:flex lg:justify-between lg:items-start my-16">
    <div class="flex-grow lg:mt-20 lg:mr-40 lg:text-right mx-4">
      <h1 class="text-[15vw]/[15vw] lg:text-8xl" :style="{ color: title_color }">{{ title }}</h1>
      <h2 class="text-4xl" :style="{ color: undertitle_color }">{{ undertitle }}</h2>
      <p
        class="text-2xl lg:text-4xl my-12 lg:leading-relaxed"
        v-html="description"
        :style="{ color: description_color }"
      ></p>
      <DynamicButton
        v-if="button_text"
        :button_text="button_text"
        :button_link="button_link"
        :button_text_color="button_text_color"
        :button_bg_color="button_bg_color"
        :button_border_color="button_border_color"
      />
      <p class="text-3xl mt-12 mb-4 text-right" :style="{ color: undertitle_color }">
        {{ date }}
      </p>
    </div>
    <img
      v-if="image_url"
      :src="image_url"
      :alt="'Image of ' + title"
      class="rounded-2xl m-auto max-sm:w-[90%] w-full lg:max-w-[50%]"
      :style="{ border: `${image_border} solid 10px` }"
      @click="toggleFullscreen"
    />
  </div>

  <!-- Image Fullscreen -->
  <div
    v-if="isFullscreen"
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    @click="toggleFullscreen"
  >
    <img :src="image_url" :alt="'Image of ' + title" class="rounded-2xl max-w-full max-h-full" />
  </div>
</template>

<script setup lang="ts">
import { supabase } from '../../supabase'
import { onMounted, ref, toRefs } from 'vue'
import DynamicButton from '../buttons/DynamicButton.vue'

const props = defineProps<{ id: number }>()
const { id } = toRefs(props)

const loading = ref(true)

const title = ref('')
const undertitle = ref('')
const description = ref('')
const image_url = ref('')
const button_text = ref('')
const date = ref('')
const button_link = ref('')
const title_color = ref('')
const undertitle_color = ref('')
const description_color = ref('')
const button_text_color = ref('')
const button_bg_color = ref('')
const button_border_color = ref('')
const font = ref('')
const image_border = ref('')

onMounted(() => {
  getProjects()
})

async function getProjects() {
  try {
    loading.value = true

    let { data, error, status }: { data: any; error: any; status: any } = await supabase
      .from('projects')
      .select(
        `title, undertitle, description, image_url, date, button_link, button_text, title_color, undertitle_color, description_color, button_text_color, button_bg_color, button_border_color, font, image_border`
      )
      .eq('id', id.value)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      title.value = data.title
      undertitle.value = data.undertitle
      description.value = data.description
      image_url.value = data.image_url
      date.value = data.date
      button_link.value = data.button_link
      button_text.value = data.button_text
      title_color.value = data.title_color
      undertitle_color.value = data.undertitle_color
      description_color.value = data.description_color
      button_text_color.value = data.button_text_color
      button_bg_color.value = data.button_bg_color
      button_border_color.value = data.button_border_color
      font.value = data.font
      image_border.value = data.image_border
    }
  } catch (error: any) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

const isFullscreen = ref(false)
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}
</script>
