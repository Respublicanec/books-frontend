<template>
  <BaseButton
    variant="flat"
    @click="router.push('/auth')"
  >
    Тестовая
  </BaseButton>
</template>

<script setup>
const router = useRouter()
</script>
