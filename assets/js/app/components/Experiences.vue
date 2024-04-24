<template>
    <div v-if="getSectionExperiences && getDataExperiences.length && getCurrentExperience"
         :data-scroll-target="getSectionExperiences.code"
         class="text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8">
        <div class="js-appear-defer o-container o-container--lg">
            <div class="js-appear-defer-child flex-flow-centerY mb-8">
                <span class="Title Title--6xl text-tertiary-hover mr-6">
                    0{{ getSectionExperiences.position }}.
                </span>
                <h2 class="Title">{{ getSectionExperiences.value }}</h2>
                <span class="Line"></span>
            </div>

            <div class="js-appear-defer-child flex mb-8 overflow-x-auto Scrollbar Scrollbar--light md-down:pb-4">
                <button v-for="xp in getDataExperiences"
                        @click="onClickItem($event, xp.position)"
                        class="min-w-56 mx-2 font-bold py-2 md:py-3 px-4 md:px-6 transition-fast text-sm rounded md-down:leading-none"
                        :class="[xp.position === getCurrentPosition ? 'bg-gradient-to-r from-primary-base to-primary-dark text-secondary-base' : 'text-primary-base hover:bg-primary-base/10']">
                    {{ xp.date }}
                </button>
            </div>

            <div class="js-appear-defer-child" ref="currentExperienceContent">
                <div class="flex-flow-centerY mb-4">
                    <p class="mr-4 text-xl font-bold text-tertiary-base">{{ getCurrentExperience.job }}</p>
                    <a :href="getCurrentExperience.link_location"
                       class="font-bold has-underline has-underline--primary text-primary-base"
                       target="_blank"
                       rel="noopener"
                       :aria-label="getCurrentExperience.location_details">
                        {{ getCurrentExperience.location_details }}
                    </a>
                </div>

                <ul>
                    <li v-for="role in getCurrentExperience.roles" class="flex-flow-centerY mb-4 lg:mb-2">
                        <i class="Icon-angle-right text-primary-base mr-3 text-xl"></i>
                        <span class="flex-1">{{ role }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import useStore from '../store'
import { API_URL } from '../api/api'

const {
          fetchDataExperiences,
          getDataExperiences,
          getCurrentExperience,
          getCurrentPosition,
          setCurrentPosition,
          getSectionExperiences,
      } = useStore.experiences()

const currentExperienceContent = ref('')

/**
 *
 * @param event
 * @param position
 */
const onClickItem = (event, position) => {
    if (position === getCurrentPosition.value || !currentExperienceContent.value) return

    const tl = gsap.timeline({ paused: true })

    const updatePosition = () => setCurrentPosition(position)

    tl.to(currentExperienceContent.value, {
        opacity: 0,
        duration: 0.25,
        onComplete: updatePosition,
    })

    tl.to(currentExperienceContent.value, {
        opacity: 1,
        duration: 0.15,
    })

    tl.play()
}

const { data: { value: { data: dataExperiences } } } = await useAsyncData('experiences', () => $fetch(API_URL + 'experiences'))

const data = dataExperiences
    .map(({ attributes }) => attributes)
    .sort((a, b) => a.position - b.position)

fetchDataExperiences(data)
</script>
