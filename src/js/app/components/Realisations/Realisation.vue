<template>
    <span v-if="index === getDataRealisationsLimited.length -1" ref="lastRealisation" class="self-start"></span>
    <a :href="realisation.url"
       class="flex-1 max-h-[550px] h-full max-w-[940px] w-full z-0 relative overflow-hidden group"
       target="_blank"
       rel="noopener">
        <img :data-src="realisation?.image?.data?.attributes?.url"
             :alt="realisation.name" class="lazyload z-1 relative">
        <span
            class="z-2 absolute inset-0 bg-secondary-base/10 group-hover:bg-secondary-base/0 transition-fast"></span>

        <p class="z-1 absolute top-0 right-0 bg-secondary-light px-2 py-1 leading-none">
            {{ realisation.year }}
        </p>
    </a>

    <div class="transform"
         :class="[index % 2 === 0 ? 'lg:translate-x-16' : 'lg:-translate-x-16']">
        <div class="lg-down:p-4 lg:p-10 bg-secondary-lighter lg:max-w-96 w-full">
            <a :href="realisation.url"
               class="Title Title--2xl block mb-4 font-bold">
                {{ realisation.name }}
            </a>

            <ul class="flex flex-wrap">
                <li v-for="tag in realisation.tags.filter(rea => rea)"
                    class="px-2 py-1 mr-2 mb-2 border border-primary-base rounded lg:text-sm">
                    {{ tag }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import useStore from '../../store'

export default {
    name: 'Realisation',
    props: {
        realisation: Object,
        index: Number,
    },
    setup () {
        const { getDataRealisationsLimited } = useStore.realisations()

        return {
            getDataRealisationsLimited,
        }
    }
}
</script>
