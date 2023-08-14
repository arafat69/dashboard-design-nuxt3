// https://nuxt.com/docs/api/configuration/nuxt-config
import VueApexCharts from "vue3-apexcharts";
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/apexcharts.js',
  ],
});
