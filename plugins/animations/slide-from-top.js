import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import { isTablet } from '../common/utils/viewport'

const animationCallback = (entry) => {
    gsap.to(entry.target, {
        duration: entry.target.dataset.animationSpeed ?? 2,
        delay: Number(entry.target.dataset.animationDelay) ?? 0,
        transform: 'translateY(0)',
    })
}

export default defineNuxtPlugin((nuxtApp) => {
    if (isTablet()) return

    const elementsAppearing = document.querySelectorAll('.js-slide-from-top, .js-slide-from-bottom')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: '-50px' },
    })
})
