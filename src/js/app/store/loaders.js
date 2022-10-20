import { computed, reactive } from 'vue'

const state = reactive({
    loaders: [],
})

export default () => {
    /**
     *
     */
    const getLoaders = computed(() => state.loaders)

    /**
     *
     */
    const getLoadersCode = computed(() => state.loaders.map(loader => loader.code).filter(loader => loader))

    /**
     *
     * @param code
     */
    const getLoaderByCode = (code) => state.loaders.find(({ code: c }) => c === code)

    /**
     *
     * @param obj
     * @returns {number}
     */
    const addLoaders = (obj) => state.loaders.push(obj)

    return {
        getLoaders,
        getLoadersCode,
        getLoaderByCode,
        addLoaders,
    }
}
