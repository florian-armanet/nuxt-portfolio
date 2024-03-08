<template>
    <NuxtPage />
</template>

<script setup>
const nuxtApp = useNuxtApp()

useHead({
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1.0',
    title: 'Florian Armanet - Développeur Front-end indépendant',
    meta: [
        {
            name: 'description',
            content: 'Je m\'appelle Florian Armanet. Je suis développeur Front-end indépendant. Mes compétences se concentrent sur le Javascript, Vue.js, React et le CSS.'
        }
    ],
    htmlAttrs: {
        lang: 'fr',
    },
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
})
</script>
