// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@pinia/nuxt'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.github.com/graphql',
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }
        }
      },
    },
  },

  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
      ENVIRONMENT: process.env.ENVIRONMENT,
    }
  }
})

