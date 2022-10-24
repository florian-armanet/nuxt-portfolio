// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    plugins: [
        {src: '~/plugins/main.js', mode: 'client'},
        {src: '~/plugins/scroll-to.js', mode: 'client'},
        {src: '~/plugins/see-more.js', mode: 'client'},
        {src: '~/plugins/common/utils/viewport.js', mode: 'client'},
        {src: '~/plugins/animations/root-margin.js', mode: 'client'},
        {src: '~/plugins/animations/appear.js', mode: 'client'},
        {src: '~/plugins/animations/appear-defer.js', mode: 'client'},
        {src: '~/plugins/animations/appear-opacity.js', mode: 'client'},
        {src: '~/plugins/animations/appear-stagger.js', mode: 'client'},
        {src: '~/plugins/animations/slide-from-top.js', mode: 'client'},
    ],
    css: [
        "@/src/css/tailwind.scss",
        "@/src/css/app.scss",
    ],
    target: 'static',
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'Florian Armanet - Développeur Front-end',
            meta: [
                {
                    name: 'description',
                    content: 'Je m\'appelle Florian Armanet. Je suis développeur Front-end. Mes compétences se concentrent sur le Javascript et le CSS.'
                }
            ],
        }
    },
})
