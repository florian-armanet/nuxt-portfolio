import { computed, ref } from 'vue'

const state = ref({
    dataTranslations: {},
})

export default () => {
    /**
     *
     * @param translations
     * @returns {{}}
     */
    const fetchDataTranslations = (translations = {}) => state.value.dataTranslations = translations

    /**
     *
     */
    const getDataTranslations = computed(() => state.value.dataTranslations)

    return {
        fetchDataTranslations,
        getDataTranslations,
    }
}
