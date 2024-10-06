<template>
  <nav
    class="fixed top-0 left-0 right-0 w-full max-w-[1600px] h-[80px] flex justify-between items-center p-8 z-50 mx-auto"
  >
    <RouterLink
      to="/"
      class="text-5xl font-black bg-navbarfooter bg-opacity-50 backdrop-blur rounded-full px-6 py-2 hover:tracking-widest hover:saturate-[300%]"
      >Noava</RouterLink
    >

    <div
      :class="[
        isMenuOpen ? 'block' : 'hidden',
        'absolute top-24 right-3 lg:right-0 bg-navbarfooter bg-opacity-50 backdrop-blur w-[20rem] lg:w-[28rem] p-4 shadow-lg rounded-lg text-right text-3xl lg:text-5xl space-y-2 lg:space-y-4'
      ]"
      @click="closeMenu"
    >
      <RouterLink
        class="block p-2 font-black hover:tracking-widest hover:saturate-[300%]"
        to="/projects"
        >Projects
        <span class="material-symbols-outlined text-3xl lg:text-5xl align-middle">
          bento
        </span></RouterLink
      >
      <RouterLink
        class="block p-2 font-black hover:tracking-widest hover:saturate-[300%]"
        to="/brandguide"
        >Brand Guide
        <span class="material-symbols-outlined text-3xl lg:text-5xl align-middle">
          brand_family
        </span>
      </RouterLink>
      <RouterLink
        class="block p-2 font-black hover:tracking-widest hover:saturate-[300%]"
        to="/contact"
        >Contact
        <span class="material-symbols-outlined text-3xl lg:text-5xl align-middle">
          deskphone
        </span></RouterLink
      >
      <div>
        <span class="font-black text-lg lg:text-xl">NORWAY, {{ NORdateHours }}</span>
        <span
          :class="['transition-opacity duration-500 ease-in-out', { 'opacity-0': !showColon }]"
          class="font-black text-2xl px-[0.1rem]"
          >:</span
        >
        <span class="font-black text-lg lg:text-xl">{{ NORdateMins }}</span>
        <span
          v-if="weatherIcon"
          class="material-symbols-outlined text-3xl lg:text-5xl align-middle ps-4 pe-2"
        >
          {{ weatherIcon }}
        </span>
      </div>
    </div>
    <div
      class="cursor-pointer bg-navbarfooter bg-opacity-50 backdrop-blur rounded-full p-2 hover:saturate-[300%]"
      @click="toggleMenu"
    >
      <span v-if="isMenuOpen" class="material-symbols-outlined text-5xl align-middle">close</span>
      <span v-else class="material-symbols-outlined text-5xl align-middle">menu</span>
    </div>
  </nav>
  <div class="fixed h-full w-full left-0 top-0" v-if="isMenuOpen" @click="closeMenu"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const NORdateHours = ref('')
const NORdateMins = ref('')
const showColon = ref(true)
let intervalId
const weatherIcon = ref('')

// MET API to Google Material Icons
const symbolCodeToIcon = {
  clearsky: 'wb_sunny',
  partlycloudy: 'cloud',
  cloudy: 'filter_drama',
  rain: 'rainy',
  lightrain: 'rainy_light',
  heavyrain: 'rainy_heavy',
  snow: 'weather_snowy',
  lightsnow: 'weather_snowy',
  heavysnow: 'weather_mix',
  thunderstorm: 'thunderstorm'
}

onMounted(() => {
  getNorwegianTime()
  getWeatherData()

  setInterval(toggleColon, 500)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const toggleColon = () => {
  showColon.value = !showColon.value
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const getNorwegianTime = async () => {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Oslo')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const datetime = new Date(data.datetime)
    const NORdate = ref('')

    NORdate.value = datetime.toLocaleTimeString('no-NO', {
      hour: '2-digit',
      minute: '2-digit'
    })

    const updateClock = () => {
      datetime.setSeconds(datetime.getSeconds() + 1)
      NORdate.value = datetime.toLocaleTimeString('no-NO', {
        hour: '2-digit',
        minute: '2-digit'
      })

      // Split into hours and minutes
      const [hh, mm] = NORdate.value.split(':')
      NORdateHours.value = hh
      NORdateMins.value = mm
    }

    intervalId = setInterval(updateClock, 1000)
  } catch (error) {
    console.error('Error fetching Norwegian time:', error)
  }
}

const getWeatherData = async () => {
  try {
    const response = await fetch(
      'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.34&lon=8.59',
      {
        headers: {
          'User-Agent': 'NoavaPortfolio'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    const symbolCode = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code

    weatherIcon.value = symbolCodeToIcon[symbolCode] || 'error'
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}
</script>
