<template>
  <div>
    <header class="layout-header">
      <a href="/">
        <img
          class="logo"
          src="@/assets/image/Books.svg"
          alt="Books"
          @click="router.push('/')"
        >
      </a>
      <BaseButton
        class="login-button"
        variant="text"
        to="/auth"
      >
        Войти
      </BaseButton>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const router = useRouter()
</script>

<style scoped>
.login-button {
  margin: 25px 50px 0 0;
}

.layout-header {
  display: flex;
  justify-content: space-between;
  border: 1px solid #3dacd5;
  width: 100%;
  height: 70px;
  margin: -1px 0 0 -1px;
}
.logo {
  margin: 20px 0 20px 60px;
}
</style>
