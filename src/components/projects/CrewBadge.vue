<template>
  <div class="lg:flex lg:justify-between lg:items-start my-16">
    <div class="lg:mt-20 lg:ml-40 mx-4">
      <h1 class="text-[14vw]/[15vw] lg:text-8xl" :style="{ color: title_color }">{{ title }}</h1>
      <h2 class="text-3xl" :style="{ color: undertitle_color }">{{ undertitle }}</h2>
      <img
        src="https://nrgbyqrjjpgsmgesvyea.supabase.co/storage/v1/object/public/project_images/Barcode.svg?t=2024-07-02T00%3A23%3A52.779Z"
        alt="SVG of barcode"
        class="max-w-full my-6 lg:my-12"
      />
      <p
        class="text-2xl my-4 lg:my-12 lg:leading-relaxed"
        :style="{ color: description_color }"
        v-html="description"
      ></p>
      <p class="text-2xl mt-12" :style="{ color: undertitle_color }">
        {{ date }}
      </p>
      <img
        src="https://nrgbyqrjjpgsmgesvyea.supabase.co/storage/v1/object/public/project_images/Electronic_Box.svg"
        alt="SVG of electronic box"
        class="w-[80%] ml-8 mt-[-4rem] mb-4"
      />
    </div>
    <img
      v-if="image_url"
      :src="image_url"
      :alt="'Image of ' + title"
      class="rounded-2xl my-auto ml-4 max-sm:w-[90%] w-full lg:max-w-[50%] lg:order-first cursor-pointer"
      :style="{ border: `${image_border} solid 10px` }"
      @click="openImage(image_url)"
    />
  </div>
</template>

<script setup lang="ts">
import { supabase } from '../../supabase'
import { onMounted, ref, toRefs } from 'vue'
import { useImageStore } from '@/stores/images'
const imageStore = useImageStore()

const props = defineProps<{ id: number }>()
const { id } = toRefs(props)

const loading = ref(true)

const title = ref('')
const undertitle = ref('')
const description = ref('')
const image_url = ref('')
const date = ref('')
const title_color = ref('')
const undertitle_color = ref('')
const description_color = ref('')
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
        `title, undertitle, description, image_url, date, title_color, undertitle_color, description_color, font, image_border`
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
      title_color.value = data.title_color
      undertitle_color.value = data.undertitle_color
      description_color.value = data.description_color
      font.value = data.font
      image_border.value = data.image_border
    }
  } catch (error: any) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

const openImage = (url: string) => {
  imageStore.selectImage(url)
}
</script>
