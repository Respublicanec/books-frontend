<template>
  <div>
    <button :class="varian">
      <slot>{{ title }}</slot>
    </button>
  </div>
</template>
<script setup>
defineProps({
  varian: {
    type: String,
    default: "no-backgroud",
  },
  title: {
    type: String,
  },
});
</script>
<style>
.no-backgroud {
  color: #1849db;
  background-color: transparent;
  border: none;
}
.no-backgroud:hover {
  color: #826eb4;
}
.brown {
  color: white;
  background-color: #696969;
  border-radius: 40px;
  height: 40px;
  width: 100px;
}
.brown:hover {
  color: white;
  background-color: #928e8e;
}
</style>
