import { ref, computed } from 'vue'
import { ApiFetchDataAbout } from '../api/api'
import useStore from './index'

const state = ref({
    dataAbout: {},
    imageObject: {},
    pdfObject: {},
})

export default () => {
    const { addLoaders }       = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataAbout = () => ApiFetchDataAbout()
        .then((data) => {
            state.value.dataAbout = { ...data }
            addLoaders(getSectionAbout.value)
        })
        .catch(err => console.log(err))

    /**
     *
     */
    const getDataAbout = computed(() => state.value.dataAbout)

    /**
     *
     */
    const getImageObject = computed(() => state.value.imageObject)

    /**
     *
     * @param obj
     */
    const setImageObject = (obj) => state.value.imageObject = {...obj}

    /**
     *
     */
    const getPdfObject = computed(() => state.value.pdfObject)

    /**
     *
     * @param obj
     */
    const setPdfObject = (obj) => state.value.pdfObject = {...obj}

    /**
     *
     */
    const getSectionAbout = computed(() => getSectionByCode('about'))

    return {
        fetchDataAbout,
        getDataAbout,
        getSectionAbout,
        getImageObject,
        setImageObject,
        getPdfObject,
        setPdfObject,
    }
}
