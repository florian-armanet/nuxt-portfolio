import { computed, ref } from 'vue'
import useStore from './index'

const state = ref({
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
    const fetchDataExperiences = (experiences = []) => state.value.dataExperiences = experiences

    /**
     *
     */
    const getDataExperiences = computed(() => state.value.dataExperiences)

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
    const getCurrentPosition = computed(() => state.value.currentPosition)

    /**
     *
     */
    const setCurrentPosition = (num) => state.value.currentPosition = num

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
