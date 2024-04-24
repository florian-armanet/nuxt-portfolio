import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataExperiences: [],
    currentPosition: 1

})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param experiences
     * @returns {*[]}
     */
    const fetchDataExperiences = (experiences = []) => {
        state.dataExperiences = experiences
    }

    /**
     *
     */
    const getDataExperiences = computed(() => state.dataExperiences)

    /**
     *
     */
    const getLocations = computed(() => getDataExperiences.value
        .map(obj => obj.location)
        .filter((location, index, array) => array.indexOf(location) === index))

    /**
     *
     */
    const getCurrentExperience = computed(() => getDataExperiences.value.find(obj => obj.position === getCurrentPosition.value))

    /**
     *
     */
    const getCurrentPosition = computed(() => state.currentPosition)

    /**
     *
     */
    const setCurrentPosition = (num) => {
        state.currentPosition = num
    }

    /**
     *
     */
    const getSectionExperiences = computed(() => getSectionByCode('experiences'))

    return {
        fetchDataExperiences,
        getDataExperiences,
        getLocations,
        getCurrentExperience,
        getCurrentPosition,
        setCurrentPosition,
        getSectionExperiences,
    }
}
