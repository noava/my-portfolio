<template>
  <!-- First Modal for Header and showing my email -->
  <div
    v-if="isFirstModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur p-6"
    @click.self="closeFirstModal"
  >
    <div
      class="relative w-full lg:w-[50rem] lg:h-[40rem] max-h-[90%] bg-card p-10 flex flex-col rounded-lg gap-4 justify-between"
    >
      <span
        class="material-symbols-outlined absolute top-[-10px] right-[-10px] bg-background text-light border-2 cursor-pointer border-light rounded-full p-2"
        @click="closeFirstModal"
      >
        close
      </span>
      <div>
        <h2
          class="text-3xl lg:text-7xl font-bold text-center tracking-[0.5rem] lg:tracking-[1.5rem] pb-2"
        >
          Contact Me
        </h2>
        <h1 class="text-xl lg:text-3xl font-bold text-center">I'd love to hear from you!</h1>
      </div>
      <span class="text-xl block py-20"
        >You could press <b>continue</b> and navigate throught the form or you can reach me through
        this email: <a class="text-accent">noavadev@gmail.com</a>
        <!-- TODO: make email copyable -->
      </span>
      <DynamicButton
        button_link=""
        button_text="Continue"
        button_text_color="#3A3234"
        button_bg_color=""
        button_border_color="#475946"
        @click="handleFirstForm"
        class="w-full lg:w-1/2 mt-auto ms-auto"
      />
    </div>
  </div>

  <!-- Second Modal for Who, What & Why -->
  <div
    v-if="isSecondModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur p-6"
    @click.self="toggleSecondModal"
  >
    <form
      id="inquiries"
      class="relative w-full lg:w-[50rem] lg:h-[40rem] max-h-[90%] bg-card p-10 flex flex-col justify-between rounded-lg gap-4"
      @submit.prevent="handleSecondForm"
      novalidate
    >
      <span
        class="material-symbols-outlined absolute top-[-10px] right-[-10px] bg-background text-light border-2 cursor-pointer border-light rounded-full p-2"
        @click="toggleSecondModal"
      >
        close
      </span>
      <h2 class="text-2xl lg:text-4xl font-bold text-center mb-4">Who, What & Why?</h2>

      <div class="flex flex-col">
        <label
          class="text-md lg:text-xl font-bold italic mb-1 transition duration-300 ease"
          :class="{
            'text-red-500': !form.who && hasSubmitted
          }"
          >Who?</label
        >
        <div class="flex flex-row space-x-12">
          <div class="inline-flex items-center">
            <label class="relative flex items-center cursor-pointer" for="company">
              <input
                v-model="form.who"
                type="radio"
                class="bg-background peer size-5 cursor-pointer appearance-none rounded-full border-2 border-background-850 hover:border-light transition-all"
                id="company"
                value="company"
                required
              />
              <span
                class="absolute bg-light size-[0.6rem] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
              </span>
            </label>
            <label class="ml-2 text-light cursor-pointer text-md" for="company">Company</label>
          </div>
          <div class="inline-flex items-center">
            <label class="relative flex items-center cursor-pointer" for="private">
              <input
                v-model="form.who"
                type="radio"
                class="bg-background peer size-5 cursor-pointer appearance-none rounded-full border-2 border-background-850 hover:border-light transition-all"
                id="private"
                value="private"
                required
              />
              <span
                class="absolute bg-light size-[0.6rem] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
              </span>
            </label>
            <label class="ml-2 text-light cursor-pointer text-md" for="private">Private</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <label
          class="text-md lg:text-xl font-bold italic mb-1 transition duration-300 ease"
          :class="{
            'text-red-500': !form.what && hasSubmitted
          }"
          >What?</label
        >
        <select
          class="max-w-full lg:w-1/3 bg-background placeholder:text-xxx text-light text-sm border-2 border-background-850 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-light hover:border-light shadow-sm focus:shadow"
          v-model="form.what"
          required
        >
          <option class="hover:bg-background" value="" disabled>What are you interested in?</option>
          <option class="hover:bg-background select:bg-background" value="job_offer">
            Job offer
          </option>
          <option value="ui_ux">UI / UX</option>
          <option value="posters">Posters</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label
          class="text-md lg:text-xl font-bold italic mb-1 transition duration-300 ease"
          :class="{
            'text-red-500': !form.why && hasSubmitted
          }"
          >Why?</label
        >
        <textarea
          class="w-full bg-background placeholder:text-xxx text-light text-sm border-2 border-background-850 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-light hover:border-light shadow-sm focus:shadow whitespace-pre-line resize-none"
          type="text"
          :rows="textareaRows"
          v-model="form.why"
          placeholder="What would you like to contact me about?"
          @input="autoExpandRows"
          required
        ></textarea>
        <label class="text-xs lg:text-sm ms-auto">
          <span v-if="textareaRows !== 8"
            >This expands to more rows. Rows shown: {{ textareaRows }}</span
          >
          <span v-if="textareaRows === 8" class="text-red-500"
            >MAX<span class="text-light"> Rows, but theres a scrollbar</span>
          </span>
        </label>
      </div>

      <DynamicButton
        button_link=""
        button_text="Next Step"
        button_text_color="#3A3234"
        button_bg_color=""
        button_border_color="#475946"
        class="w-full lg:w-1/2 mt-auto ms-auto"
        type="submit"
        value="submit"
      />
    </form>
  </div>

  <!-- Third Modal for Name and Email -->
  <div
    v-if="isThirdModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur p-6"
    @click.self="closeThirdModal"
  >
    <form
      class="relative w-full lg:w-[50rem] lg:h-[40rem] max-h-[90%] bg-card p-10 flex flex-col rounded-lg gap-4"
      @submit.prevent="handleThirdForm"
      novalidate
    >
      <span
        class="material-symbols-outlined absolute top-[-20px] right-[-20px] bg-background text-light border-2 cursor-pointer border-light rounded-full p-2"
        @click="closeThirdModal"
      >
        close
      </span>
      <span
        class="material-symbols-outlined absolute top-[-20px] left-[-20px] bg-background text-light border-2 cursor-pointer border-light rounded-full p-2"
        @click="toggleSecondModal"
      >
        reply
      </span>
      <h2 class="text-2xl lg:text-4xl font-bold text-center mb-4">Enter Contact Details</h2>

      <div class="flex flex-col">
        <label
          class="text-md lg:text-xl font-bold italic mb-1 transition duration-300 ease"
          :class="{
            'text-red-500': !form.name && hasSubmitted
          }"
          >Name</label
        >
        <input
          class="w-1/2 bg-background placeholder:text-xxx text-light text-sm border-2 border-background-850 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-light hover:border-light shadow-sm focus:shadow"
          type="text"
          v-model="form.name"
          placeholder="Name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          class="text-md lg:text-xl font-bold italic mb-1 transition duration-300 ease"
          :class="{
            'text-red-500': (!form.email || !isEmailValid) && hasSubmitted
          }"
          >Email</label
        >
        <input
          class="w-1/2 bg-background text-light text-sm border-2 border-background-850 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-light hover:border-light shadow-sm focus:shadow group-email invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
          type="email"
          v-model="form.email"
          placeholder="Email"
          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
          size="30"
          required
        />
      </div>

      <DynamicButton
        button_link=""
        button_text="Send Info"
        button_text_color="#3A3234"
        button_bg_color=""
        button_border_color="#475946"
        class="w-full lg:w-1/2 mt-auto ms-auto"
        type="submit"
        value="submit"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DynamicButton from './buttons/DynamicButton.vue'
import { supabase } from '../supabase'

const route = useRoute()
const router = useRouter()

const isFirstModalOpen = ref(false)
const isSecondModalOpen = ref(false)
const isThirdModalOpen = ref(false)
const hasSubmitted = ref(false)
const textareaRows = ref(5)

const form = ref({
  who: '',
  what: '',
  why: '',
  name: '',
  email: ''
})

const checkHashAndOpenModal = () => {
  if (route.hash === '#contact') {
    isFirstModalOpen.value = true
  }
}

const removeHash = () => {
  router.replace({ path: router.currentRoute.value.path })
}

onMounted(() => {
  checkHashAndOpenModal()
})

watch(
  () => route.hash,
  () => {
    checkHashAndOpenModal()
  }
)

const closeFirstModal = () => {
  isFirstModalOpen.value = false
  removeHash()
}

const toggleSecondModal = () => {
  isSecondModalOpen.value = !isSecondModalOpen.value
  isThirdModalOpen.value = false
  removeHash()
}

const closeThirdModal = () => {
  isThirdModalOpen.value = false
  removeHash()
}

// No first form. Just easier to read this way
const handleFirstForm = () => {
  isFirstModalOpen.value = false
  isSecondModalOpen.value = true
}

const handleSecondForm = async () => {
  hasSubmitted.value = true

  if (!form.value.who || !form.value.what || !form.value.why) {
    return
  }
  isSecondModalOpen.value = false
  isThirdModalOpen.value = true

  hasSubmitted.value = false
}

const handleThirdForm = async () => {
  hasSubmitted.value = true

  if (!form.value.name || !form.value.email || !isEmailValid.value) {
    return
  }

  const { data, error } = await supabase.from('inquiries').insert({
    who: form.value.who,
    what: form.value.what,
    why: form.value.why,
    name: form.value.name,
    email: form.value.email
  })
  if (error) {
    console.log(error)
    return
  }
  if (data) {
    console.log(data)
  }

  isThirdModalOpen.value = false

  hasSubmitted.value = false
}

const isEmailValid = computed(() => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(form.value.email)
})

const autoExpandRows = () => {
  const lineBreaks = (form.value.why.match(/\n/g) || []).length
  textareaRows.value = Math.min(Math.max(5, lineBreaks + 1), 8)
}
</script>
