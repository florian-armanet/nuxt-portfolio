import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataIntroduction: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    const fetchDataIntroduction = (data = {}) => {
        state.dataIntroduction = data
    }


    /**
     *
     */
    const getDataIntroduction = computed(() => state.dataIntroduction)

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
