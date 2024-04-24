import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataSkills: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param skills
     */
    const fetchDataSkills = (skills) => {
        state.dataSkills = skills
    }

    /**
     *
     */
    const getDataSkills = computed(() => state.dataSkills)

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
