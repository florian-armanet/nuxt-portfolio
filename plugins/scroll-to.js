export default defineNuxtPlugin(nuxtApp => {
    const triggers = document.querySelectorAll('[data-scroll-trigger]')
    const targets  = document.querySelectorAll('[data-scroll-target]');

    [...triggers].forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault()
            const { scrollTrigger } = e.currentTarget.dataset

            const target = [...targets].find(el => el.dataset.scrollTarget === scrollTrigger)
            if (!target) return

            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    })
})
