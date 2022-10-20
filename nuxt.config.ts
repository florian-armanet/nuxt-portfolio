// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    plugins: [
        {src: '~/plugins/scroll-to.js', mode: 'client'},
        {src: '~/plugins/see-more.js', mode: 'client'},
        {src: '~/plugins/common/utils/viewport.js', mode: 'client'},
        {src: '~/plugins/animations/root-margin.js', mode: 'client'},
    ],
    css: [
        "@/src/css/tailwind.scss",
        "@/src/css/app.scss",
    ]
})
