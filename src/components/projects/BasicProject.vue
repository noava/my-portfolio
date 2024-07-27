<template>
  <hr />
  <div class="project">
    <div class="info">
      <h1 :style="{ color: title_color }">{{ title }}</h1>
      <h2 :style="{ color: undertitle_color }">{{ undertitle }}</h2>
      <p v-html="description" :style="{ color: description_color }"></p>
      <DynamicButton
        v-if="button_text"
        :button_text="button_text"
        :button_link="button_link"
        :button_text_color="button_text_color"
        :button_bg_color="button_bg_color"
        :button_border_color="button_border_color"
      />
      <p class="date" :style="{ color: undertitle_color }">{{ date }}</p>
    </div>
    <img
      v-if="image_url"
      :src="image_url"
      :alt="'Image of ' + title"
      class="image"
      :style="{ border: `${image_border} solid 10px` }"
    />
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
    text-align: right;
    // change margin top to center or sumn
    margin-top: 5em;
    margin-right: 10em;

    h1 {
      font-size: 6.4em;
      line-height: 0.8em;
    }

    h2 {
      font-size: 3.2em;
    }

    p {
      font-size: 2.4em;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .date {
      font-size: 2em;
      margin-top: 50px;
      margin-bottom: 0;
    }
  }

  .image {
    max-width: 50%;
    border-radius: 1.5em;
  }
}
</style>
