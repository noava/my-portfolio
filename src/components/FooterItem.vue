<template>
  <div class="footer-container bg-navbarfooter rounded-t-2xl h-full flex flex-col items-center">
    <div class="max-w-[1600px]">
      <div
        class="flex max-lg:flex-col justify-between max-lg:space-y-10 lg:py-20 py-4 px-2 lg:px-8"
      >
        <div class="flex flex-row justify-between">
          <div class="lg:w-60 flex flex-row items-center space-x-2">
            <img
              class="size-12 lg:size-16 cursor-pointer"
              :src="`https://img.icons8.com/ios-glyphs/${platformsColor}/linkedin.png`"
              alt="linkedin"
              onclick="window.open('https://linkedin.com/in/niklas-vezina', '_blank')"
              title="https://linkedin.com/in/niklas-vezina"
            />
            <img
              class="size-12 lg:size-16 cursor-pointer"
              :src="`https://img.icons8.com/ios-glyphs/${platformsColor}/github.png`"
              alt="linkedin"
              onclick="window.open('https://github.com/noava', '_blank')"
              title="https://github.com/noava"
            />
          </div>
          <div class="flex justify-center items-center ps-2">
            <span class="material-symbols-outlined text-3xl lg:text-5xl">arrow_left_alt</span>
            <span class="text-xl lg:text-3xl ps-2">platforms</span>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center max-lg:order-first max-lg:pb-10">
          <DynamicButton
            button_link=""
            button_text="Reach Out!"
            :button_text_color="buttonTextColor"
            button_bg_color=""
            :button_border_color="buttonBorderColor"
            @click="router.push({ hash: '#contact' })"
          />
          <span class="w-80 text-base pt-6"
            >Reach out if you are interesting in designing or would like to offer me a job.</span
          >
        </div>
      </div>

      <div class="p-2 pt-10">
        <NoavaHover class="w-full h-[18vw] max-h-[30rem]" />
        <div class="w-full text-right text-sm py-4">© 2024 Niklas Vezina</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DynamicButton from './buttons/DynamicButton.vue'
import NoavaHover from './NoavaHover.vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
const router = useRouter()
const tailwind = resolveConfig(tailwindConfig)

const platformsColor = tailwind.theme.colors.light.replace('#', '')
const buttonTextColor = (tailwind.theme.colors.background.DEFAULT as string) || ''
const buttonBorderColor = (tailwind.theme.colors.secondary as string) || ''
</script>
