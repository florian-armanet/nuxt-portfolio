import { computed, reactive } from 'vue'
import useStore from './index'
import { LIMIT_STEP } from '~/assets/js/app/constants'

const state = reactive({
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
    const fetchDataRealisations = (realisation = []) => {
        state.dataRealisations = realisation
    }

    /**
     *
     */
    const getDataRealisations = computed(() => state.dataRealisations)

    /**
     *
     */
    const getDataRealisationsLimited = computed(() => state.dataRealisations.slice(0, state.limit))

    /**
     *
     */
    const getLimit = computed(() => state.limit)

    /**
     *
     */
    const incrementLimit = () => {
        state.limit = state.limit + LIMIT_STEP
    }

    /**
     *
     */
    const decrementLimit = () => {
        state.limit = state.limit - LIMIT_STEP
    }

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
