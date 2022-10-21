import { computed, ref } from 'vue'
import useStore from './index'

const state = ref({
    dataRealisations: [],
    limit: 4,
    limitStep: 4,
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
    const limitUp = () => state.value.limit = state.value.limit + state.value.limitStep

    /**
     *
     */
    const limitDown = () => state.value.limit = state.value.limit - state.value.limitStep

    /**
     *
     */
    const getSectionRealisations = computed(() => getSectionByCode('realisations'))

    return {
        fetchDataRealisations,
        getDataRealisations,
        getSectionRealisations,
        getLimit,
        limitUp,
        limitDown,
        getDataRealisationsLimited,
    }
}
