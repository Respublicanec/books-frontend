<template>
  <button
    :style="{
      backgroundColor: backgroundColor,
      border: border,
    }"
  >
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  backgroundColor: {
    type: String,
    default: "transparent",
  },
  border: {
    type: String,
    default: "none",
  },
});
</script>

<style>
button:hover {
  color: #9bb2ca;
}
</style>
