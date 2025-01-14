<template>
  <div>
    <button :class="variant">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "flat",
    validator: (value) => {
      return ["flat", "text"].includes(value);
    },
  },
});
</script>

<style scoped>
.text {
  color: #1849db;
  background-color: transparent;
  border: none;
}
.text:hover {
  color: #826eb4;
}
.flat {
  color: white;
  background-color: #696969;
  border-radius: 40px;
  height: 40px;
  width: 100px;
}
.flat:hover {
  color: white;
  background-color: #928e8e;
}
</style>
