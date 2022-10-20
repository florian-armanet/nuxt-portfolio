<template>
    <template v-if="loaded">
        <div class="flex-flow-center flex-col h-screen text-white">
            <p class="text-3xl mb-8">{{ getDataTranslations.page_not_found }}</p>
            <router-link to="/" class="Button">{{ getDataTranslations.back }}</router-link>
        </div>
    </template>

    <template v-else>
        <div class="flex-flow-center h-screen mb-16">
            <div class="Loader">
                <div v-for="i in 4" class="Loader-inner"></div>
            </div>
        </div>
    </template>
</template>

<script>
import useStore from '../store'
import { ref } from 'vue'

export default {
    name: 'PageNotFound',
    setup () {
        const { fetchDataTranslations, getDataTranslations } = useStore.translations()
        const loaded = ref(false)

        fetchDataTranslations().then(res => loaded.value = true).catch(err => console.log(err))

        return {
            getDataTranslations,
            loaded,
        }

    }
}
</script>
