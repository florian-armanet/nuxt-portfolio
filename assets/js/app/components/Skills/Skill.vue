<template>
    <li @mouseenter="tooltipOpened = true" @mouseleave="tooltipOpened = false"
        class="relative flex-flow-centerY mb-6">
        <transition name="Animation-fade">
            <span v-show="tooltipOpened && !isMobile()"
                  class="z-2 absolute top-0 bg-gradient-to-r from-primary-dark to-primary-hover text-secondary-base font-bold py-1 px-2 rounded">
                {{ skillName }}
            </span>
        </transition>
        <p class="w-40 mr-4 sm:line-clamp-1 sm-down:w-full">{{ skillName }}</p>
        <p class="relative flex-1 mr-4 h-3">
            <span class="absolute top-0 left-0 bg-gradient-to-r from-primary-dark to-primary-base h-full w-0 js-score-value rounded-xl"></span>
        </p>
        <span class="">{{ skillValue }}%</span>
    </li>
</template>

<script>
import { ref } from 'vue'
import { isMobile } from '../../../../../plugins/common/utils/viewport'

export default {
    name: 'Skill',
    props: {
        skillName: String,
        skillValue: Number,
    },
    setup () {
        const tooltipOpened = ref(false)

        return {
            tooltipOpened,
            isMobile,
        }
    }
}
</script>
