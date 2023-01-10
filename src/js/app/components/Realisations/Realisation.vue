<template>
    <span v-if="index === getDataRealisationsLimited.length -1" ref="lastRealisation" class="self-start"></span>
    <a :href="realisation.url"
       class="js-slide-from-bottom flex-1 max-h-[550px] h-full max-w-[940px] w-full z-0 relative overflow-hidden group"
       target="_blank"
       rel="noopener">
        <img src="/loading.png" :data-src="realisation?.image?.data?.attributes?.caption"
             :alt="realisation.name" class="lazyload z-1 relative">
        <span
            class="z-2 absolute inset-0 bg-secondary-base/10 group-hover:bg-secondary-base/0 transition-fast"></span>

        <p class="z-1 absolute top-0 right-0 bg-secondary-light px-2 py-1 leading-none">
            {{ realisation.year }}
        </p>
    </a>

    <div class="transform"
         :class="[index % 2 === 0 ? 'lg:translate-x-16' : 'lg:-translate-x-16']">
        <div class="js-slide-from-top lg-down:p-4 lg:p-10 bg-secondary-lighter lg:max-w-96 w-full">
            <a :href="realisation.url"
               target="_blank"
               class="Title Title--2xl block mb-4 font-bold transition-fast hover:text-primary-hover">
                {{ realisation.name }}
            </a>

            <ul v-if="realisation?.tags && realisation.tags.length" class="flex flex-wrap">
                <li v-for="tag in realisation.tags.filter(rea => rea)"
                    class="px-2 py-1 mr-2 mb-2 border border-primary-base rounded lg:text-sm">
                    {{ tag }}
                </li>
            </ul>

            <a :href="realisation.url"
               target="_blank"
               rel="noopener"
               class="Button-link mt-4">
                <span class="Button-link-circle" aria-hidden="true">
                  <span class="Button-link-icon arrow"></span>
                </span>
                <span class="Button-link-text">{{ getDataTranslations.see_website }}</span>
            </a>

            <!--            <button class="Button-link">-->
            <!--                <span class="Button-link-circle" aria-hidden="true">-->
            <!--                  <span class="Button-link-circle-arrow"></span>-->
            <!--                </span>-->
            <!--                <span class="Button-link-text">Learn More</span>-->
            <!--            </button>-->
        </div>
    </div>
</template>

<script setup>
import useStore from '../../store'

const { getDataRealisationsLimited } = useStore.realisations()
const { getDataTranslations }        = useStore.translations()

const props                  = defineProps({
    realisation: Object,
    index: Number,
})
const { realisation, index } = props
</script>
