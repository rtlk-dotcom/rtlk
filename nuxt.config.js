export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ritalike',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ritalike' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/vars.sass',
    '@/assets/css/resetr.css',
    '@/assets/css/common.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // mofules for full static before `nuxt export` (coming in v2.12)
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-netlify',
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
    'nuxt-webfontloader',
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  styleResources: {
    sass: ['./assets/css/*.sass']
  },

  webfontloader: {
    google: {
      families: ['Lato:400,500,600,700,900,400italic'] //Loads Lato font with weights 400 and 700
    }
  },

  prismic: {
    endpoint: 'https://Ritalike.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
