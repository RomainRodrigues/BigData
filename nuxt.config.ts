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
    head: {
      title: 'BigData',
    },
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
