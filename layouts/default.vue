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
.login-button {
  margin: 25px 50px 0 0;
}

.layout-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin: -1px 0 0 -1px;
}
.logo {
  margin: 20px 0 20px 60px;
}
</style>
