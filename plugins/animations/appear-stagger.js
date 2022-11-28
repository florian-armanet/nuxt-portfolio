import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import rootMarginValue from './root-margin'

const animationCallback = (entry) => {
    const targets = entry.target.querySelectorAll('.js-appear-stagger-child')
    gsap.to(targets, {
        opacity: 1,
        stagger: entry.target.dataset?.stagger ?? 0.2,
        transform: 'translateY(0)'
    })
}

export default defineNuxtPlugin((nuxtApp) => {
    const elementsAppearing = document.querySelectorAll('.js-appear-stagger')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: rootMarginValue() }
    })
})
