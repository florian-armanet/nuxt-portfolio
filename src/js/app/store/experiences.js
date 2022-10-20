import { ref, computed } from 'vue'
import { ApiFetchDataExperiences } from '../api/api'
import useStore from './index'

const state = ref({
    dataExperiences: [],
    currentPosition: 1

})

export default () => {
    const { addLoaders } = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataExperiences = () => ApiFetchDataExperiences()
        .then((data) => {
            state.value.dataExperiences = [...data]
            addLoaders(getSectionExperiences.value)
        })
        .catch(err => console.log(err))

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
