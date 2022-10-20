import { removeClassByPrefix } from './common/utils/remove-class-by-prefix'

class SeeMore {
    constructor (target) {
        this.target  = target
        this.trigger = [...document.querySelectorAll('[data-see-more-trigger]')]
            .find(trigger => trigger.dataset.seeMoreTrigger === this.target.dataset.seeMoreTarget)
        this.triggerToDisable = [...document.querySelectorAll('[data-see-more-disable]')]
            .find(triggerToDisable => triggerToDisable.dataset.seeMoreDisable === this.target.dataset.seeMoreTarget)
        this.seeMoreLines = Number(this.target.dataset.seeMoreLines)
    }

    /**
     *
     * @returns {number}
     */
    nbLines () {
        const lineHeightValuePx = window.getComputedStyle(this.target).getPropertyValue('line-height')
        const lineHeightInt     = parseInt(lineHeightValuePx.replace('px', ''))
        return Math.ceil(this.target.offsetHeight / lineHeightInt)
    }

    /**
     *
     */
    hideLines () {
        this.target.classList.add(`line-clamp-${ this.seeMoreLines }`)
    }

    /**
     *
     */
    init () {
        if (!this.trigger) return;

        if (this.seeMoreLines >= this.nbLines()) {
            this.trigger.classList.add('hidden')
            return
        }

        this.hideLines()

        this.trigger.addEventListener('click', (e) => {
            removeClassByPrefix(this.target, 'line-clamp-')
            this.trigger.classList.add('hidden')
            this.triggerToDisable.classList.remove('hidden')
        })

        this.triggerToDisable.addEventListener('click', (e) => {
            this.hideLines()
            this.triggerToDisable.classList.add('hidden')
            this.trigger.classList.remove('hidden')
        })
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const targets = document.querySelectorAll('[data-see-more-target]');

    [...targets].forEach(target => {
        const instanceSeeMore = new SeeMore(target)
        instanceSeeMore.init()
    })
})
