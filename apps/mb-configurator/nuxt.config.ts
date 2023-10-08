// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },
  devtools: { enabled: true },
});
