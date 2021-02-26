
export default {
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '东方蓝短链接服务为您提供：短链接生成，短链接程序，短链接服务，淘宝链接压缩，做专业的链接缩短网站。我们的宗旨是：为你缩短一切！' },
      { hid: 'keywords', name: 'keywords', content: '东方蓝, eastazure, EastAzure, 短链接, 压缩链接, 短链接服务, 短链接生成, 短网址, 短网址生成, 链接缩短, 缩短网址, 长链接缩短' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  env: {
    "API_HOST": "api.link.eastazure.com",
    "SITE_NAME": "东方蓝短链接服务"
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/modal-custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/error-parser/index.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  target: 'static'
}
