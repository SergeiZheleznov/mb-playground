// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },
  routeRules: {
    "/api/**": {
      proxy: {
        to: process.env?.["NUXT_PUBLIC_API_BASE"] + "/**",
        headers: {
          "x-api-key": process.env?.["NUXT_API_SECRET"],
        },
      },
      cors: false,
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
});
