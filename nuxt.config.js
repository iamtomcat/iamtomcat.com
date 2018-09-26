module.exports = {
  modules: [
    '@nuxtjs/apollo',
    '@digibytes/markdownit',
    ['nuxt-matomo', { matomoUrl: '//iamtomcat.innocraft.cloud/', siteId: 1 }]
  ],
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    }
  },
  css: [
    '@/assets/main.scss'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog about development and ideas.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  markdownit: {
    injected: true
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'hsl(141, 71%, 48%)' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
