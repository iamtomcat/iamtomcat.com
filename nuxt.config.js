module.exports = {
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api-uswest.graphcms.com/v1/cjlbag2jo0e9001fzdwpm19mq/master',
        getAuth: () => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMTY5NzhkNDItNzlkYy00NzEzLTlhZDUtMDJkODBhNDdlYzYzIn0.vLWV_DVyiHU9oP50OLw1bk4ydFThLq2tiFHZJtxnT3A'
      },
    }
  },
  css: [
    '~/assets/main.scss'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Blog' }
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
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

