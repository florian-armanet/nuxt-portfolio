export default defineNuxtPlugin((nuxtApp) => {
    document.body.classList.add('Scrollbar')

    nuxtApp.vueApp.config.errorHandler = (error, context) => {
        console.log(error);
    }
})
