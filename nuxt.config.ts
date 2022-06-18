import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  typescript: {
	  strict: true,
	  shim: false,
  },
})
