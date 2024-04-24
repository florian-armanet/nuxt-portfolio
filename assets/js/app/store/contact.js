import { computed, reactive } from 'vue'
import useStore from './index'

const state = reactive({
    dataContact: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param contact
     * @returns {{}}
     */
    const fetchDataContact = (contact = {}) => {
        state.dataContact = contact
    }

    /**
     *
     */
    const getDataContact = computed(() => state.dataContact)

    /**
     *
     */
    const getSectionContact = computed(() => getSectionByCode('contact'))

    return {
        fetchDataContact,
        getDataContact,
        getSectionContact,
    }
}
