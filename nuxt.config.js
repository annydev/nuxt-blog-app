export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fa923f', height: '4px', duration: 5000 },
  
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css) include main style.css file
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/core-component.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-app-6c1d0.firebaseio.com',
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-app-6c1d0.firebaseio.com',
    fbAPIKey: 'AIzaSyA7ahBUTtRvZcrWr9QrVcqt433qzb5vg0E'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  //middleware - is a function that is executed before the page is rendered/is loaded
  router: {
    middleware: ['log']
  }
}
