const baseName = process.env.BASE_NAME || 'サイト名'
const baseDesc = process.env.BASE_DISC || 'ディスクリプションを設定してください'
const baseUrl = process.env.BASE_URL || 'http://localhost:8080'
const baseOgp = process.env.BASE_OGP || '/lib/img/ogp'
const baseDir = process.env.BASE_DIR || '/'
// console.info(process.env.NODE_ENV, 'nuxt.config.js BASE_URL:', process.env.BASE_URL)
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  env: {
    baseName,
    baseDesc,
    baseUrl,
    baseOgp,
  },
  router: {
    base: baseDir,
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    title: baseName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: baseDesc },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseOgp}/common.jpg`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    '~~/font/dist/css/materialdesignicons.css',
    '~/assets/scss/bulma/core.scss', // bulmaを使わない場合は削除
    '~/assets/scss/swiper/core.scss', // swiperを使わない場合は削除
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/components'},
    { src: '@/plugins/addClassBrowser', ssr: false },
    { src: '~/plugins/aos', ssr: false }, // ←aosを使わない場合は削除
    { src: '~plugins/vue-awesome-swiper', ssr: false }, // swiperを使わない場合は削除
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  dotenv: {
    /* module options */
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-mq',
    '@nuxtjs/style-resources',
    [
      'nuxt-modernizr',
      {
        'feature-detects': [
          'audio',
          'css/animations',
          'touchevents',
          'img/srcset',
          'mediaquery/pointermq',
          'mediaquery/hovermq',
        ],
        options: ['setClasses', 'load'],
      },
    ],
    ['vue-scrollto/nuxt', { duration: 300 }],
    ['nuxt-buefy', { css: false }], // buefyを使わない場合は削除
  ],
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 767,
      md: 1024,
      lg: Infinity,
    },
  },
  styleResources: {
    // your settings here
    scss: [
      './assets/scss/_mixins.scss',
      '~/assets/scss/bulma/utilities.scss', // bulmaを使わない場合は削除
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' },
      },
    },
    babel: {
      presets({ isServer }) {
        console.log(isServer)
        return [['@nuxt/babel-preset-app', { loose: true }]]
      },
    },
    vendor: [
      'vue-awesome-swiper', // swiperを使わない場合は削除
    ],
  },
}
