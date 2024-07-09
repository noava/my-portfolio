<template>
  <div class="green-line">
    <svg
      width="1295"
      height="909"
      viewBox="0 0 1295 909"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 669.5C128.5 865.5 546.5 1022.5 934 759C1103.37 643.829 892.536 587.098 949.5 345C973.5 243 1184 51 1284.5 9.99997"
        stroke="#475946"
        stroke-width="20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div class="man">
    <svg width="74" height="85" viewBox="0 0 74 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4998 82.5L7 60.5" stroke="#819C87" stroke-width="5" stroke-linecap="round" />
      <line
        x1="70.8111"
        y1="34.5254"
        x2="41.5261"
        y2="24.1895"
        stroke="#819C87"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path d="M40.5007 23.5L7.00001 60" stroke="#819C87" stroke-width="5" stroke-linecap="round" />
      <ellipse cx="40.0006" cy="12" rx="11" ry="12" fill="#819C87" />
    </svg>
  </div>
  <div class="row">
    <div class="column-1">
      <div class="rectangle-1"></div>
      <div class="rectangle-noava-many">
        <div
          v-for="(noava_line, index) in noava_lines"
          :key="index"
          class="text-line"
          :style="{ top: `${index * 15 - 15}%` }"
        >
          NOAVANOAVANOAVANOAVANOAVANOAVANOAVANOAVANOAVANOAVA
        </div>
      </div>
    </div>
    <div class="column-2">
      <div class="rectangle-2"></div>
    </div>
    <div class="column-3">
      <div class="rectangle-3"></div>
      <div class="rectangle-4"></div>
      <div class="quote">
        <span>- Cheese chose bees, keys, and seas with a breeze, all to appease. </span>
      </div>
    </div>
    <div class="column-4">
      <div class="rectangle-noava-big"><div>NOAVA</div></div>
      <div class="rectangle-5"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const noava_lines = ref(Array(12).fill(''))
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.green-line {
  position: absolute;
  top: 30rem;
  left: 15rem;
  z-index: 0;
}

.man {
  z-index: 2;
  position: absolute;
  top: 37rem;
  left: 80rem;
}

.row {
  display: flex;
  justify-content: space-between;
  margin: 20px;

  .column-1,
  .column-2,
  .column-3,
  .column-4 {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      border-radius: 5px;
      margin-bottom: 2em;
    }
  }

  .column-1 {
    .rectangle-1 {
      width: 28.5em;
      height: 37em;
      background-color: $secondary;
      z-index: 1;
    }
    .rectangle-noava-many {
      width: 28.5em;
      height: 15em;
      background-color: $primary;
      z-index: 1;
      overflow: hidden;
      position: relative;

      .text-line {
        font-size: 1.6em;
        font-weight: 900;
        line-height: 1em;
        color: $background;
        transform: rotate(20deg);
        white-space: nowrap;
        position: absolute;
        left: -2em;
      }
    }
  }

  .column-2 {
    margin-top: 14.9em;
    .rectangle-2 {
      width: 19.5em;
      height: 50.5em;
      background-color: $primary;
      z-index: -1;
    }
  }

  .column-3 {
    margin-top: 7.3em;
    .rectangle-3 {
      width: 26.7em;
      height: 20.6em;
      background-color: $primary;
      z-index: -1;
    }

    .rectangle-4 {
      width: 26.7em;
      height: 24.4em;
      background-color: $secondary;
      z-index: 1;
    }

    .quote {
      width: 308px;
      height: 7.6em;
      font-style: italic;
      font-size: 1.6em;
    }
  }

  .column-4 {
    margin-top: -22.67em;
    .rectangle-noava-big {
      width: 21.4em;
      height: 66.2em;
      background-color: $secondary;
      z-index: 1;

      div {
        font-size: 17em;
        font-weight: 900;
        font-style: italic;
        color: $background;
        transform: rotate(90deg);
        letter-spacing: 1rem;
      }
    }

    .rectangle-5 {
      width: 21.3em;
      height: 19.3em;
      background-color: $primary;
    }
  }
}
</style>
