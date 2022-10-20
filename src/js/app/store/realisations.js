import { ref, computed } from 'vue'
import { ApiFetchDataRealisations } from '../api/api'
import useStore from './index'

const state = ref({
    dataRealisations: [],
    limit: 4,
    limitStep: 4,
})

export default () => {
    const { addLoaders } = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataRealisations = () => ApiFetchDataRealisations()
        .then((data) => {
            state.value.dataRealisations = [...data]
            addLoaders(getSectionRealisations.value)
        })
        .catch(err => console.log(err))

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
