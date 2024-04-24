import { computed, reactive } from 'vue'

const state = reactive({
    dataTranslations: {},
})

export default () => {
    /**
     *
     * @param translations
     * @returns {{}}
     */
    const fetchDataTranslations = (translations = {}) => {
        state.dataTranslations = translations
    }

    /**
     *
     */
    const getDataTranslations = computed(() => state.dataTranslations)

    return {
        fetchDataTranslations,
        getDataTranslations,
    }
}
