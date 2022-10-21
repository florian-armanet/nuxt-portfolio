import { computed, ref } from 'vue'
import useStore from './index'

const state = ref({
    dataContact: {}
})

export default () => {
    const { getSectionByCode } = useStore.sections()

    /**
     *
     * @param contact
     * @returns {{}}
     */
    const fetchDataContact = (contact = {}) => state.dataContact = contact

    /**
     *
     */
    const getDataContact = computed(() => state.value.dataContact)

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
