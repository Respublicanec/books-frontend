// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint'],

  devtools: { enabled: false },

  css: [
    '@/assets/styles/main.css', // Путь к вашему файлу main.css
  ],
  compatibilityDate: '2024-04-03',

  eslint: {
    config: {
      stylistic: {
        arrowParens: true,
      },
    },
  },
})
