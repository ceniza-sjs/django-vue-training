export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo'],
  apollo: {
    tokenName: 'nuxt-apollo', // specify token name
    cookieAttributes: {
      expires: 7, // optional, default: 7 (days)
    },
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
    watchLoading: '@/apollo/loadingHandler.js',
    errorHandler: '@/apollo/errorHandler.js',
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL || 'http://127.0.0.1:8000/graphql/',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {},
}