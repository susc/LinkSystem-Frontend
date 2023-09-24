// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      SITE_NAME: '东方蓝短链接服务',
      API_HOST: 'api.link.eastazure.com'
    }
  }
})
