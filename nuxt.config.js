export default {
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
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }, {
            hid: 'description',
            name: 'description',
            content: 'PHP,JavaScript,Laravel,VueJS,Docker,Kubernetes,Programming,Symfony,Angular'
        }, {
            name: 'twitter:card',
            content: 'summary'
        }, {
            name: 'twitter:site',
            content: '@tweichart'
        }, {
            name: 'og:type',
            content: 'website'
        }, {
            name: 'og:image:width',
            content: '600'
        }, {
            name: 'og:image:height',
            content: '600'
        }],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/scss/overrides.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    styleResources: {
        scss: [
            '~/assets/scss/app.scss'
        ]
    },
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        '~/plugins/fontawesome.ts'
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
        css: false,
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {}
};
