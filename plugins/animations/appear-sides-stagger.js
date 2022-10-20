import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import rootMarginValue from './root-margin'

const animationCallback = (entry) => {
    const targets = entry.target.querySelectorAll('.js-appear-sides-stagger-target')
    gsap.to(targets, {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        transform: 'translateX(0)'
    })
}

export default () => {
    const elementsAppearing = document.querySelectorAll('.js-appear-sides-stagger-trigger')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: rootMarginValue() }
    })
}
