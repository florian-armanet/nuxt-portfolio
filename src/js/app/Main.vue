<template>
    <template v-if="loadedAll">
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
    </template>

    <template v-else>
        <div class="flex-flow-center h-screen">
            <div class="Loader">
                <div v-for="i in 4" class="Loader-inner"></div>
            </div>
        </div>
    </template>
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
import { ref, watch } from 'vue'

const { getLoadersCode } = useStore.loaders()

const { fetchDataTranslations }                                      = useStore.translations()
const { fetchDataIntroduction }                                      = useStore.introduction()
const { fetchDataSkills }                                            = useStore.skills()
const { fetchDataRealisations }                                      = useStore.realisations()
const { fetchDataExperiences }                                       = useStore.experiences()
const { fetchDataAbout, getDataAbout, setImageObject, setPdfObject } = useStore.about()
const { fetchDataContact }                                           = useStore.contact()
const { fetchDataTools }                                             = useStore.tools()
const { fetchDataSections }                                          = useStore.sections()

fetchDataSections().then(res => {
    fetchDataTranslations()
    fetchDataIntroduction()
    fetchDataSkills()
    fetchDataTools()
    fetchDataRealisations()
    fetchDataExperiences()
    fetchDataAbout().then(res => {
        setImageObject(getDataAbout.value?.image?.data?.attributes || null)
        setPdfObject(getDataAbout.value?.pdf?.data?.attributes || null)
    })
    fetchDataContact()
})

const loadedAll = ref(false)

const codeLoadersToMatch = ['skills', 'tools', 'introduction', 'translation', 'experiences', 'about', 'contact', 'realisations']

watch(() => getLoadersCode.value, (newV) => {
    if (codeLoadersToMatch.every(codeLoaderToMatch => getLoadersCode.value.includes(codeLoaderToMatch))) {
        loadedAll.value = true
    }
})
</script>
