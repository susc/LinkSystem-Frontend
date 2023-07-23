// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      SITE_NAME: '东方蓝短链接服务',
      API_HOST: 'api.link.eastazure.com',
      ERROR_MESSAGE_MAP: {
        RISK_URL: "该URL存在风险",
        INTERNAL_SERVER_ERROR: "服务器内部错误",
        NOT_FOUND: "该路径不存在",
        MISSING_PARAMETERS: "缺少必要参数",
        PARAMETERS_LENGTH_ERROR: "参数长度错误",
        CUSTOM_DOMAIN_NOT_FOUND: "找不到指定域名",
        LINK_NOT_FOUND: "找不到指定的链接",
        URL_IN_BLACKLIST: "该URL禁止缩短"
      }
    }
  }
})
