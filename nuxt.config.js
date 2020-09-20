export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: 'Tobias Weichart',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/overrides.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    styleResources: {
        scss: [
            '~/assets/app.scss'
        ]
    },
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        '~/plugins/fontawesome.ts',
        '~/plugins/decorators.ts',
        '~/plugins/directives.ts'
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
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt'
    ],
    bootstrapVue: {
        css: false, // Or `css: false`
        // bootstrapVueCSS: false // Or `bvCSS: false`
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {}
};
