<template>
  <div>
    <header class="layout-header">
      <img class="logo" src="@/assets/image/Books.svg" alt="Books" />
      <BaseButton
        @click="transitionLogin"
        class="login-button"
        varian="no-backgroud"
        title="Войти"
      />
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const router = useRouter();

const transitionLogin = () => {
  router.push("/auth");
};
</script>

<style>
.login-button {
  margin-left: 1550px;
  margin-top: 20px;
}

.layout-header {
  display: flex;
  border: 1px solid rgb(41, 181, 223);
  width: 1920px;
  height: 70px;
  margin: -1px 0 0 -1px;
}
.logo {
  margin: 20px 0 20px 60px;
}
</style>
