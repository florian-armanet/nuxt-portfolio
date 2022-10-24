<template>
    <div>
        <Menu/>
        <Header/>

        <main>
            <Skills/>
            <Tools/>
            <Experiences/>
            <Realisations/>
            <About/>
            <Contact/>
        </main>
    </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Skills from './components/Skills/Skills.vue'
import Tools from './components/Tools.vue'
import Experiences from './components/Experiences.vue'
import Realisations from './components/Realisations/Realisations.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import useStore from './store'
import { API_URL } from './api/api'

const { fetchDataSections }     = useStore.sections()
const { fetchDataTranslations } = useStore.translations()

await useAsyncData(
    'section',
    () => $fetch(API_URL + 'section')
).then(res => {
    fetchDataSections(res.data.value.data.attributes.sections)
})

await useAsyncData(
    'translation',
    () => $fetch(API_URL + 'translation')
).then(res => {
    fetchDataTranslations(res.data.value.data.attributes.translations)
})
</script>
