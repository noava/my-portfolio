<template>
  <div>
    <button class="funky-button">{{ button_text }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ button_text: string }>()

console.log(props)
</script>

<style lang="scss" scoped>
@import '../../assets/main.scss';

/* Custom Button */
.funky-button {
  font-family: 'Saira';
  font-style: italic;
  font-weight: 900;
  color: $background;
  background-color: $primary;
  border: 3px solid $secondary;
  border-radius: 50rem;
  box-shadow:
    0px 8px $primary,
    0px 11px $secondary;
  padding: 8px 80px;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: saturate(150%);
  }
  &:active {
    box-shadow: 0px 2px $secondary;
    transform: translateY(9px);
  }
}
</style>
