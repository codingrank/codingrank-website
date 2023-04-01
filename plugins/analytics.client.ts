import VueGTag from 'vue-gtag-next'
export default defineNuxtPlugin((nuxt) => {
    const config = useRuntimeConfig();
    if(config.public.ENVIRONMENT === 'production') {
        nuxt.vueApp.use(VueGTag, {
            appName: "Coding Rank",
            
            property: {
                id: config.public.GOOGLE_ANALYTICS_ID,
                params: {
                    send_page_view: true

                }
            }
        })
    }
})