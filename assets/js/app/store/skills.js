import { computed, ref } from 'vue'
import useStore from './index'

const state = ref({
    dataSkills: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param skills
     */
    const fetchDataSkills = (skills) => state.value.dataSkills = skills

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
