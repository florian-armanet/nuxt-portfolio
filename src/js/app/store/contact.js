import { ref, computed } from 'vue'
import { ApiFetchDataContact } from '../api/api'
import useStore from './index'

const state = ref({
    dataContact: {}
})

export default () => {
    const { addLoaders }       = useStore.loaders()
    const { getSectionByCode } = useStore.sections()

    const fetchDataContact = () => ApiFetchDataContact()
        .then((data) => {
            state.value.dataContact = { ...data }
            addLoaders(getSectionContact.value)
        })
        .catch(err => console.log(err))

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
