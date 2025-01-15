<template>
  <div>
    <nuxt-link
      v-if="to"
      :class="variant"
      :to="to"
    >
      <slot />
    </nuxt-link>
    <button
      v-else
      :class="variant"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'flat',
    validator: (value) => {
      return ['flat', 'text'].includes(value)
    },
  },
  to: {
    type: String,
  },
})
</script>

<style scoped>
.text {
  color: #1849db;
  background-color: transparent;
  border: none;
  text-decoration: none;
}
.text:hover {
  color: #826eb4;
}
.flat {
  color: white;
  background-color: #696969;
  border-radius: 40px;
  height: 50px;
  width: 100px;
  padding: 15px;
  text-decoration: none;
}
.flat:hover {
  color: white;
  background-color: #928e8e;
}
</style>
