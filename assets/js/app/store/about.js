import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataAbout: {},
    imageObject: {},
    pdfObject: {},
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param about
     * @returns {{}}
     */
    const fetchDataAbout = (about = {}) => {
        state.dataAbout = about
    }

    /**
     *
     */
    const getDataAbout = computed(() => state.dataAbout)

    /**
     *
     */
    const getImageObject = computed(() => state.imageObject)

    /**
     *
     * @param obj
     */
    const setImageObject = (obj) => state.imageObject = {...obj}

    /**
     *
     */
    const getPdfObject = computed(() => state.pdfObject)

    /**
     *
     * @param obj
     */
    const setPdfObject = (obj) => state.pdfObject = {...obj}

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
