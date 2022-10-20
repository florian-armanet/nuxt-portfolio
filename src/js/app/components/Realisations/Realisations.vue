<template>
    <div :data-scroll-target="getSectionRealisations.code"
         class="text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8">
        <div class="o-container o-container--lg">
            <div class="js-appear flex-flow-centerY mb-8">
                <span class="Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6">
                    0{{ getSectionRealisations.position }}.
                </span>
                <h2 class="Title">{{ getSectionRealisations.value }}</h2>
                <span class="Line"></span>
            </div>
        </div>

        <div class="js-appear flex-flow-center mb-12">
            <a href="/pages/react.html" target="_blank" class="Button m-4 lg:flex-flow-center lg-down:text-center">
                <span class="leading-none">Voir mon application React</span>
                <i class="Icon-arrow-right text-xl font-bold ml-4"></i>
            </a>
        </div>

        <div v-for="(realisation, index) in getDataRealisationsLimited"
             :key="index"
             class="flex lg-down:flex-col lg:flex-flow-center js-appear relative mb-12 lg:mb-24 lg-down:mx-4"
             :class="{'lg:flex-row-reverse': index % 2 === 0}">
            <Realisation :realisation="realisation" :index="index" :key="index"/>
        </div>

        <div class="flex-flow-center">
            <button class="m-4 Button Button--small" v-show="getLimit <= getDataRealisationsLimited.length"
                    @click="moreData">
                {{ getDataTranslations.see_more }}
            </button>
            <button class="m-4 Button Button--small"
                    v-show="getDataRealisationsLimited.length > startNumberRealisation"
                    @click="lessData">
                {{ getDataTranslations.see_less }}
            </button>
            <a href="/pages/react.html" target="_blank" class="Button Button--small m-4 lg:flex-flow-center lg-down:text-center">
                <span class="leading-none">Voir mon application React</span>
                <i class="Icon-arrow-right text-xl font-bold ml-4"></i>
            </a>
        </div>
    </div>
</template>

<script>
import { ref, onUpdated } from 'vue'
import useStore from '../../store'
import Appear from '../../../../../plugins/animations/appear'
import SlideFromTop from '../../../../../plugins/animations/slide-from-top'
import { positionY } from '../../../../../plugins/common/utils/positionY'
import Realisation from './Realisation.vue'

export default {
    name: 'Realisations',
    components: { Realisation },
    setup () {
        const {
                  getDataRealisationsLimited,
                  getSectionRealisations,
                  getLimit,
                  limitUp,
                  limitDown
              } = useStore.realisations()

        const { getDataTranslations } = useStore.translations()

        const startNumberRealisation = ref(4)
        const lastRealisation        = ref()

        /**
         *
         * @param event
         */
        const moreData = (event) => {
            if (startNumberRealisation.value > getDataRealisationsLimited.value.length) return
            limitUp()
        }

        /**
         *
         * @param event
         */
        const lessData = (event) => {
            if (startNumberRealisation.value >= getDataRealisationsLimited.value.length) return
            limitDown()

            setTimeout(() => {
                if (!lastRealisation.value.length) return

                window.scrollTo({
                    top: positionY(lastRealisation.value[0]),
                    behavior: 'smooth'
                })
            }, 50)
        }

        onUpdated(() => {
            Appear()
            SlideFromTop()
        })

        return {
            getDataRealisationsLimited,
            moreData,
            lessData,
            getLimit,
            startNumberRealisation,
            getSectionRealisations,
            getDataTranslations,
            lastRealisation,
        }
    }
}
</script>
