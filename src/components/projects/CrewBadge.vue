<template>
  <hr />
  <div class="project">
    <img
      v-if="image_url"
      :src="image_url"
      :alt="'Image of ' + title"
      class="image"
      :style="{ border: `${image_border} solid 10px` }"
    />
    <div class="info">
      <h1 :style="{ color: title_color }">{{ title }}</h1>
      <h2 :style="{ color: undertitle_color }">{{ undertitle }}</h2>
      <img
        src="https://nrgbyqrjjpgsmgesvyea.supabase.co/storage/v1/object/public/project_images/Barcode.svg?t=2024-07-02T00%3A23%3A52.779Z"
        alt="SVG of barcode"
        class="svg-barcode"
      />
      <p :style="{ color: description_color }">{{ description }}</p>
      <p class="date" :style="{ color: undertitle_color }">{{ date }}</p>
      <img
        src="https://nrgbyqrjjpgsmgesvyea.supabase.co/storage/v1/object/public/project_images/Electronic_Box.svg"
        alt="SVG of electronic box"
        class="svg-electronic-box"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '../../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps<{ id: number }>()
const { id } = toRefs(props)

const loading = ref(true)
const title = ref('')
const undertitle = ref('')
const description = ref('')
const image_url = ref('')
const date = ref('')
const button_text = ref('')
const title_color = ref('')
const undertitle_color = ref('')
const description_color = ref('')
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
        `title, undertitle, description, image_url, date, button_text, title_color, undertitle_color, description_color, image_border`
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
      button_text.value = data.button_text
      title_color.value = data.title_color
      undertitle_color.value = data.undertitle_color
      description_color.value = data.description_color
      image_border.value = data.image_border
    }
  } catch (error: any) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/main.scss';

.project {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px 0;

  .info {
    flex-grow: 1;
    max-width: 50%;
    text-align: left;
    margin-top: 5em;
    margin-left: 10em;
    h1 {
      font-size: 6.4em;
      line-height: 0.8em;
    }

    h2 {
      font-size: 3.2em;
    }

    .svg-barcode {
      max-width: 100%;
      margin: 3em 0 3em 0;
      margin-left: -10px;
    }

    p {
      font-size: 2.4em;
    }

    .date {
      font-size: 2em;
      margin-top: 100px;
    }

    // Change to position so its ontop of text or sumn
    .svg-electronic-box {
      margin-top: -140px;
      max-width: 100%;
    }
  }

  .image {
    max-width: 50%;
    border-radius: 1.5em;
  }
}
</style>
