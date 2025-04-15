import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  ssr: false,
  devtools: {
    enabled: true,
  },
  app: {
    baseURL: '/BigData/', // Remplacez "BigData" par le nom de votre dépôt si nécessaire
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2023-10-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
