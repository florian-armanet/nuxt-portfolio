import { gsap } from 'gsap'
import { processObserver } from '../common/utils/intersectionObserver'

const animationCallback = (entry) => {
    gsap.to(entry.target, {
        duration: 1,
        opacity: 1,
        transform: 'translateX(0)'
    })
}

export default () => {
    const elementsAppearing = document.querySelectorAll('.js-appear-sides')
    processObserver({ callback: animationCallback, elementsObserved: elementsAppearing })
}
