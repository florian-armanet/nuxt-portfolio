import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import { isTablet } from '../common/utils/viewport'

const animationCallback = (entry) => {
    gsap.to(entry.target, {
        duration: entry.target.dataset.animationSpeed ?? 1,
        delay: Number(entry.target.dataset.animationDelay) ?? 0,
        opacity: 1,
    })
}

export default defineNuxtPlugin((nuxtApp) => {
    const elementsAppearing = document.querySelectorAll('.js-appear-opacity')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: isTablet() ? '-100px' : '-200px' },
    })
})
