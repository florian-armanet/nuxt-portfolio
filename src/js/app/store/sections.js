import { computed, reactive } from 'vue'

const state = reactive({
    dataSections: []
})

export default () => {
    /**
     *
     * @param sections
     * @returns {*[]}
     */
    const fetchDataSections = (sections = []) => state.dataSections = sections

    /**
     *
     */
    const getDataSections = computed(() => state.dataSections)

    /**
     *
     */
    const getSectionsCode = computed(() => state.dataSections.map(( ({ code }) => code )))

    /**
     *
     * @param code
     */
    const getSectionByCode = (code) => getDataSections.value.find(({ code: c }) => c === code) || {
        code: '',
        position: 0,
        value: '',
    }

    /**
     *
     */
    const getSectionSections = computed(() => getSectionByCode('sections'))

    return {
        fetchDataSections,
        getDataSections,
        getSectionsCode,
        getSectionByCode,
        getSectionSections,
    }
}
