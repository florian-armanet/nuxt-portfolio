<template>
    <header class="js-appear-defer h-screen flex-flow-center flex-col max-w-md mx-auto">
        <h1 class="js-appear-defer-child font-bold text-5xl md:text-6xl lg:text-7xl text-tertiary-base sm-down:text-center sm-down:leading-none sm-down:mb-4">
            {{ getDataIntroduction.title }}
        </h1>
        <h2 class="js-appear-defer-child text-2xl md:text-4xl lg:text-5xl font-heading text-tertiary-hover mb-8 sm-down:text-center">
            {{ getDataIntroduction.subtitle }}</h2>
        <p class="js-appear-defer-child text-center text-tertiary-hover mb-8">
            {{ getDataIntroduction.text }}
        </p>
        <div class="js-appear-defer-child">
            <button class="Button" :data-scroll-trigger="getSectionsCode[0]">
                {{ getDataIntroduction.label_button }}
            </button>
        </div>
    </header>
</template>

<script setup>
import useStore from '../store'
import { API_URL } from '../api/api'

const { fetchDataIntroduction, getDataIntroduction } = useStore.introduction()
const { getSectionsCode }     = useStore.sections()

const { data: { value: { data: dataIntroduction } } } = await useAsyncData('introduction', () => $fetch(API_URL + 'introduction'))
fetchDataIntroduction(dataIntroduction.attributes)
</script>
