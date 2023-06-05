import { computed, ref } from 'vue'
import useStore from './index'
import { LIMIT_STEP } from '~/src/js/app/constants'

const state = ref({
    dataRealisations: [],
    limit: 4,
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param realisation
     * @returns {*[]}
     */
    const fetchDataRealisations = (realisation = []) => state.value.dataRealisations = realisation

    /**
     *
     */
    const getDataRealisations = computed(() => state.value.dataRealisations)

    /**
     *
     */
    const getDataRealisationsLimited = computed(() => state.value.dataRealisations.slice(0, state.value.limit))

    /**
     *
     */
    const getLimit = computed(() => state.value.limit)

    /**
     *
     */
    const incrementLimit = () => state.value.limit = state.value.limit + LIMIT_STEP

    /**
     *
     */
    const decrementLimit = () => state.value.limit = state.value.limit - LIMIT_STEP

    /**
     *
     */
    const getSectionRealisations = computed(() => getSectionByCode('realisations'))

    return {
        fetchDataRealisations,
        getDataRealisations,
        getSectionRealisations,
        getLimit,
        incrementLimit,
        decrementLimit,
        getDataRealisationsLimited,
    }
}
