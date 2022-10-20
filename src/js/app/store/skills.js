import { ref, computed } from 'vue'
import { ApiFetchDataSkills } from '../api/api'
import useStore from './index'

const state = ref({
    dataSkills: {}
})

export default () => {
    const { addLoaders }       = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataSkills = () => ApiFetchDataSkills()
        .then((data) => {
            state.value.dataSkills = { ...data }
            addLoaders(getSectionSkills.value)
        })
        .catch(err => console.log(err))

    /**
     *
     */
    const getDataSkills = computed(() => state.value.dataSkills)

    /**
     *
     */
    const getSectionSkills = computed(() => getSectionByCode('skills'))

    return {
        fetchDataSkills,
        getDataSkills,
        getSectionSkills,
    }
}
