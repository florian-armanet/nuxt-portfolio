import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import rootMarginValue from './root-margin'

const animationCallback = (entry) => {
    if (!entry.target) return

    const targets = entry.target.querySelectorAll('.js-appear-defer-child')

    gsap.to(targets, {
        stagger: entry.target.dataset && entry.target.dataset.stagger ? entry.target.dataset.stagger : 0.13,
        opacity: 1,
        transform: 'translateY(0)',
    })
}

export default () => {
    const elementsAppearing = document.querySelectorAll('.js-appear-defer')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: rootMarginValue() },
    })
}
