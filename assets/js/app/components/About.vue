<template>
    <div :data-scroll-target="getSectionAbout.code"
         class="text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8">
        <div class="js-appear-defer o-container o-container--lg">
            <div class="js-appear-defer-child flex-flow-centerY mb-4 sm:mb-8">
                <span class="Title Title--6xl leading-none text-tertiary-hover mr-6">
                    0{{ getSectionAbout.position }}.
                </span>
                <h2 class="Title">{{ getSectionAbout.value }}</h2>
                <span class="Line"></span>
            </div>

            <div class="o-grid sm:o-grid--loose md-down:items-center">
                <div class="js-appear-defer-child o-col-12 md:o-col-7 flex flex-col justify-center sm-down:order-2">
                    <p class="">{{ getDataAbout.text }}</p>
                </div>
                <div
                    class="js-appear-defer-child o-col-12 md:o-col-5 sm-down:flex-flow-center sm-down:mb-2 sm-down:order-1">
                    <img :data-src="getImageObject?.caption"
                         :alt="getImageObject?.name"
                         class="lazyload rounded-full border-4 border-primary-base w-32 md:w-56 h-32 md:h-56 mb-4">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useStore from '../store'
import { API_URL } from '../api/api'

const { fetchDataAbout, getDataAbout, getSectionAbout, getImageObject, setImageObject, setPdfObject } = useStore.about()

const { data: { value: { data: dataAbout } } } = await useAsyncData('about', () => $fetch(API_URL + 'about?populate=image,pdf'))
fetchDataAbout(dataAbout.attributes)
setImageObject(getDataAbout.value?.image?.data?.attributes || null)
setPdfObject(getDataAbout.value?.pdf?.data?.attributes || null)
</script>
