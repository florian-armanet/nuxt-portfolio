import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataFooter: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param footer
     * @returns {{}}
     */
    const fetchDataFooter = (footer = {}) => {
        state.dataFooter = footer
    }

    /**
     *
     */
    const getDataFooter = computed(() => state.dataFooter)

    /**
     *
     */
    const getSectionFooter = computed(() => getSectionByCode('footer'))

    return {
        fetchDataFooter,
        getDataFooter,
        getSectionFooter,
    }
}
