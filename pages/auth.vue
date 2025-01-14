<template>
  <div class="container">
    <div class="login-container">
      <h1>Вход</h1>
      <input
        placeholder="Логин"
        class="login-input"
        type="text"
      >
      <input
        placeholder="Пароль"
        class="login-input"
        type="text"
      >
      <BaseButton class="base-button">
        Войти
      </BaseButton>
    </div>
  </div>
</template>

<script setup></script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 200px;
  margin: auto;
  margin-top: 200px;
}
.login-input {
  margin: 20px 0 0 0;
  height: 30px;
  width: 100%;
  border-radius: 3px;
}
.base-button {
  margin: 40px 0 0 10px;
}
</style>
