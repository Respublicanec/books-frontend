<template>
  <div>
    <header class="layout-header">
      <img
        class="logo"
        src="@/assets/image/Books.svg"
        alt="Books"
        @click="navigateTo('/')"
      >
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

<style scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  padding: 20px ;
  width: 100%;
  height: 100%;
  max-height: 50px;
}
</style>
