import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'
import rootMarginValue from './root-margin'

const animationCallback = (entry) => {
    gsap.to(entry.target, {
        duration: entry.target.dataset.animationSpeed ?? 0.6,
        delay: Number(entry.target.dataset.animationDelay) ?? 0,
        opacity: 1,
        transform: 'translateY(0)',
    })
}

export default () => {
    const elementsAppearing = document.querySelectorAll('.js-appear')
    processObserver({
        callback: animationCallback,
        elementsObserved: elementsAppearing,
        options: { root: null, rootMargin: '-50px' },
    })
}
