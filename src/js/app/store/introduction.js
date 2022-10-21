import { computed, ref } from 'vue'
import useStore from './index'

const state = ref({
    dataIntroduction: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    const fetchDataIntroduction = (data = {}) => state.value.dataIntroduction = data


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
