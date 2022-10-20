import { ref, computed } from 'vue'
import { ApiFetchDataIntroduction } from '../api/api'
import useStore from './index'

const state = ref({
    dataIntroduction: {}
})

export default () => {
    const { addLoaders }       = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataIntroduction = () => ApiFetchDataIntroduction()
        .then((data) => {
            state.value.dataIntroduction = { ...data }
            addLoaders({
                code: 'introduction'
            })
        })
        .catch(err => console.log(err))

    /**
     *
     */
    const getDataIntroduction = computed(() => state.value.dataIntroduction)

    /**
     *
     */
    const getSectionIntroduction = computed(() => getSectionByCode('introduction'))

    return {
        fetchDataIntroduction,
        getDataIntroduction,
        getSectionIntroduction,
    }
}
