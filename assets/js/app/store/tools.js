import { computed, reactive } from 'vue'

const state = reactive({
    dataTools: {}
})

export default () => {
    /**
     *
     * @param tools
     * @returns {{}}
     */
    const fetchDataTools = (tools = {}) => {
        state.dataTools = tools
    }

    /**
     *
     */
    const getDataTools = computed(() => state.dataTools)

    return {
        fetchDataTools,
        getDataTools,
    }
}
