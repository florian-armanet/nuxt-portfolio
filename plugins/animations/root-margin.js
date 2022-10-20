import { getViewport } from '../common/utils/viewport'

export default defineNuxtPlugin(nuxtApp => getViewport().width > 1024 ? '-200px' : '-50px')
