import { ref, computed } from 'vue'
import { ApiFetchDataTranslations } from '../api/api'
import useStore from './index'

const state = ref({
    dataTranslations: {},
})

export default () => {
    const { addLoaders }       = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataTranslations = () => ApiFetchDataTranslations()
        .then((data) => {
            state.value.dataTranslations = { ...data.translations }
            addLoaders({
                code: 'translation'
            })
        })
        .catch(err => console.log(err))

    /**
     *
     */
    const getDataTranslations = computed(() => state.value.dataTranslations)

    return {
        fetchDataTranslations,
        getDataTranslations,
    }
}
