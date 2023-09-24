// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=0'
    }
  },
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
