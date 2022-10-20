import { ref, computed } from 'vue'
import { ApiFetchDataTools } from '../api/api'
import useStore from './index'

const state = ref({
    dataTools: {}
})

export default () => {
    const { addLoaders } = useStore.loaders()

    const fetchDataTools = () => ApiFetchDataTools()
        .then((data) => {
            state.value.dataTools = { ...data }
            addLoaders({
                code: 'tools'
            })
        })
        .catch(err => console.log(err))

    /**
     *
     */
    const getDataTools = computed(() => state.value.dataTools)

    return {
        fetchDataTools,
        getDataTools,
    }
}
