<template>
    <div :data-scroll-target="getSectionAbout.code"
         class="text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8">
        <div class="js-appear-defer o-container o-container--lg">
            <div class="js-appear-defer-child flex-flow-centerY mb-4 sm:mb-8">
                <span class="Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6">
                    0{{ getSectionAbout.position }}.
                </span>
                <h2 class="Title">{{ getSectionAbout.value }}</h2>
                <span class="Line"></span>
            </div>

            <div class="o-grid sm:o-grid--loose md-down:items-center">
                <div class="js-appear-defer-child o-col-12 md:o-col-7 flex flex-col justify-center sm-down:order-2">
                    <p class="">{{ getDataAbout.text }}</p>
                </div>
                <div class="js-appear-defer-child o-col-12 md:o-col-5 sm-down:flex-flow-center sm-down:mb-2 sm-down:order-1">
                    <img :src="getImageObject?.url"
                         :alt="getImageObject?.name"
                         class="rounded-full border-4 border-primary-base w-32 md:w-64 h-32 md:h-64 mb-4">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useStore from '../store'

export default {
    name: 'About',
    setup () {
        const { getDataAbout, getSectionAbout, getImageObject } = useStore.about()

        return {
            getDataAbout,
            getSectionAbout,
            getImageObject,
        }
    }
}
</script>
