<template>
    <div :data-scroll-target="getSectionRealisations.code"
         class="text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8">
        <div class="o-container o-container--lg">
            <div class="js-appear flex-flow-centerY mb-8">
                <span class="Title Title--6xl leading-none text-tertiary-hover mr-6">
                    0{{ getSectionRealisations.position }}.
                </span>
                <h2 class="Title">{{ getSectionRealisations.value }}</h2>
                <span class="Line"></span>
            </div>
        </div>

        <div v-for="(realisation, index) in getDataRealisationsLimited"
             :key="index"
             class="flex lg-down:flex-col lg:flex-flow-center js-appear relative mb-12 lg:mb-24 lg-down:mx-4"
             :class="{'lg:flex-row-reverse': index % 2 === 0}">
            <Realisation :realisation="realisation" :index="index" :key="index"/>
        </div>

        <div class="flex-flow-center">
            <button class="m-4 Button Button--small"
                    v-show="getLimit < getDataRealisations.length"
                    @click="moreData">
                {{ getDataTranslations.see_more }}
            </button>
            <button class="m-4 Button Button--small"
                    v-show="getDataRealisationsLimited.length > START_NUMBER_REALISATION"
                    @click="lessData">
                {{ getDataTranslations.see_less }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { onUpdated } from 'vue'
import useStore from '../../store'
import Appear from '../../../../../plugins/animations/appear'
import SlideFromTop from '../../../../../plugins/animations/slide-from-top'
// import { positionY } from '../../../../../plugins/common/utils/positionY'
import Realisation from './Realisation.vue'
import { API_URL } from '../../api/api'
import { START_NUMBER_REALISATION } from '~/assets/js/app/constants'

const {
          fetchDataRealisations,
          getDataRealisations,
          getDataRealisationsLimited,
          getSectionRealisations,
          getLimit,
          incrementLimit,
          decrementLimit
      } = useStore.realisations()

const { getDataTranslations } = useStore.translations()

/**
 *
 * @param event
 */
const moreData = (event) => {
    if (getLimit.value >= getDataRealisations.value.length) return
    incrementLimit()
}

/**
 *
 * @param event
 */
const lessData = (event) => {
    if (START_NUMBER_REALISATION >= getDataRealisationsLimited.value.length) return
    decrementLimit()
}

onUpdated(() => {
    Appear()
    SlideFromTop()
})

const { data: { value: { data: dataRealisations } } } = await useAsyncData('realisations', () => $fetch(API_URL + 'realisations?populate=image'))

const data = dataRealisations
    .map(({ attributes }) => attributes)
    .sort((a, b) => a.position - b.position)

fetchDataRealisations(data)
</script>
