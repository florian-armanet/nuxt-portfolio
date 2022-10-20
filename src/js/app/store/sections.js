import { computed, reactive } from 'vue'
import { ApiFetchDataSections } from '../api/api'
import useStore from './index'

const state = reactive({
    dataSections: []
})

export default () => {
    const { addLoaders } = useStore.loaders()

    const fetchDataSections = () => ApiFetchDataSections()
        .then((data) => {
            state.dataSections = [...data]
            // addLoaders({ code: 'sections' })
        })
        .catch(err => console.log(err))

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
