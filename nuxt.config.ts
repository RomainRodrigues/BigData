import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  ssr: false,
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2023-10-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
