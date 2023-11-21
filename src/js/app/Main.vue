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
            <Footer/>
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
import Footer from './components/Footer.vue'
import useStore from './store'
import { API_URL } from './api/api'

const { fetchDataSections }     = useStore.sections()
const { fetchDataTranslations } = useStore.translations()

const { data: { value: { data: dataSection } } } = await useAsyncData('section', () => $fetch(API_URL + 'section'))
fetchDataSections(dataSection.attributes.sections)

const { data: { value: { data: dataTranslation } } } = await useAsyncData('translation', () => $fetch(API_URL + 'translation'))
fetchDataTranslations(dataTranslation.attributes.translations)
</script>
