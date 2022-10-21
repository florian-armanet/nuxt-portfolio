<template>
    <nav>
        <div class="z-3 fixed top-4 left-4 lg:top-8 lg:left-8 w-8 h-8 flex-flow-center bg-secondary-base border-2 border-primary-base leading-none pt-1 font-bold transition-fast hover:rounded-lg">
            FA
        </div>

        <div class="Menu"
             :class="{ 'isActive': menuIsActive }"
             @click="onClickMenu">
            <span class="Menu-line"></span>
            <span class="Menu-line"></span>
            <span class="Menu-line"></span>
        </div>

        <div class="Menu-content" :class="{ 'isActive': menuIsActive }">
            <ul class="Menu-items">
                <li v-for="itemMenu in getDataSections"
                    :data-scroll-trigger="itemMenu.code"
                    @click="onClickMenuItem"
                    class="Menu-item gsap-menu-item has-underline">
                    <span class="mr-2">0{{ itemMenu.position }}.</span>
                    <span>{{ itemMenu.value }}</span>
                </li>
                <li class="Menu-item gsap-menu-item has-underline mt-16">
                    <a href="/cv_armanet_florian.pdf" target="_blank" rel="noopener">
                        <i class="Icon-download mr-4"></i>
                        <span>Mon CV</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../store/index'
import { gsap } from 'gsap'

const { getDataSections } = useStore.sections()

const menuIsActive = ref(false)
const tl           = gsap.timeline({ paused: true })

/**
 *
 * @param tl
 * @param target
 */
const gsapMenuItem = (tl, target) => {
    tl.to(target, {
        duration: 0.5,
        stagger: 0.1,
        transform: 'translateY(0)',
        ease: 'Power2.easeOut',
        opacity: 1,
    }, '<0.5')
}

/**
 *
 * @param event
 */
const onClickMenu = (event) => {
    document.body.parentNode.classList.toggle('overflow-hidden')

    if (!menuIsActive.value) {
        const menuItems = document.querySelectorAll(`.gsap-menu-item`)

        gsapMenuItem(tl, menuItems)

        menuIsActive.value = true

        tl.timeScale(1).play()

        return
    }

    tl.timeScale(3).reverse()

    tl.eventCallback('onReverseComplete', () => {
        menuIsActive.value = false
    })
}

const onClickMenuItem = (event) => {
    document.body.parentNode.classList.toggle('overflow-hidden')

    tl.timeScale(4).reverse()

    tl.eventCallback('onReverseComplete', () => {
        menuIsActive.value = false
    })
}
</script>
