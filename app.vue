<template>
    <NuxtPage />
</template>

<script setup>
const nuxtApp = useNuxtApp()

useHead({
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1.0',
    title: 'Florian Armanet - Développeur Front-end',
    meta: [
        {
            name: 'description',
            content: 'Je m\'appelle Florian Armanet. Je suis développeur Front-end. Mes compétences se concentrent sur le Javascript et le CSS.'
        }
    ],
    htmlAttrs: {
        lang: 'fr',
    }
})
</script>
