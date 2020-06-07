export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: '共通ディスクリプション'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'サイト名'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://example.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'サイト名'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '共通ディスクリプション'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://example.com/ogp/ogp.jpg'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@Twitter'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icons/favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/apple-touch-icon-180x180.png'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: '~/components/Organisms/loading.vue',
  loading: false,

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/index.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'id'
      }
    ],
    '@nuxtjs/axios'
  ],

  styleResources: {
    // admin scss files
    scss: [
      '@/assets/styles/admin/_variable.scss',
      '@/assets/styles/admin/_mixin.scss',
      '@/assets/styles/admin/_global.scss'
    ]
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Set default directory to client
   */
  srcDir: '',

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (config.module) {
        config.module.rules.push({
          test: /\.(vert|frag)$/i,
          use: ['raw-loader']
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }
}
