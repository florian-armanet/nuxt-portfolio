import { computed, ref } from 'vue'

const state = ref({
    dataTools: {}
})

export default () => {
    /**
     *
     * @param tools
     * @returns {{}}
     */
    const fetchDataTools = (tools = {}) => state.value.dataTools = tools

    /**
     *
     */
    const getDataTools = computed(() => state.value.dataTools)

    return {
        fetchDataTools,
        getDataTools,
    }
}
