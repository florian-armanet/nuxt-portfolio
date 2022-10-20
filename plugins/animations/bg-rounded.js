import { gsap } from 'gsap'
import { addClass, removeClass } from '../common/utils/handlerClass'

const tlBgRounded = (tl, target) => {
    tl.to(target, {
        duration: 1,
        scale: 2,
        y: '-50vw',
        x: '50vw',
        z: '0',
    })
}

const tlBgRoundedContent = (tl, target) => {
    tl.to(target, {
        duration: 0.5,
        stagger: 0.2,
        transform: 'translateY(0)',
        ease: 'Power1.easeOut',
        opacity: 1,
    }, '<0.5')
}

const processBgRounded = (el) => {
    const { bgRoundedTrigger } = el.dataset
    const target               = document.querySelector(`[data-bg-rounded-target=${ bgRoundedTrigger }]`)
    const bgRounded            = document.querySelector(`[data-bg-rounded=${ bgRoundedTrigger }]`)
    const bgRoundedContent     = document.querySelectorAll(`[data-bg-rounded-content=${ bgRoundedTrigger }]`)
    const tl                   = gsap.timeline({ paused: true })

    tlBgRounded(tl, bgRounded)
    tlBgRoundedContent(tl, bgRoundedContent)

    el.addEventListener('click', () => {
        ( !target.classList.contains('isActive') ) ? tl.timeScale(1).play() : tl.timeScale(2).reverse()

        addClass(target, el)
        document.body.parentNode.classList.toggle('overflow-hidden')

        tl.eventCallback('onReverseComplete', () => {
            removeClass(target, el)
        })

        const triggerBackTo = target.querySelector(`[data-bg-rounded-trigger=${ bgRoundedTrigger }]`)

        if (triggerBackTo) {
            triggerBackTo.addEventListener('click', () => {
                tl.timeScale(2).reverse()
            })
        }
    })
}

export default () => {
    const triggers = document.querySelectorAll('[data-bg-rounded-trigger]');

    [...triggers].forEach(trigger => {
        processBgRounded(trigger)
    })

}
