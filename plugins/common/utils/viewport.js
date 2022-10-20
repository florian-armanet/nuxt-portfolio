/**
 * @returns {{width: *, height: *}}
 */
export const getViewport = () => {
    let e = window, a = 'inner'
    if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
}

export default defineNuxtPlugin(nuxtApp => getViewport())


export const isTablet = () => {
    return getViewport().width < 1025
}

export const isMobile = () => {
    return getViewport().width < 768
}
