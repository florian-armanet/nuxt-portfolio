<template>
    <div :data-scroll-target="getSectionSkills.code || 'skills'"
         class="text-tertiary-base mb-8 sm:mb-16 py-4 sm:py-8">
        <div class="js-appear-opacity o-container o-container--lg">
            <div class="flex-flow-centerY mb-8">
                <span class="Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6">
                    0{{ getSectionSkills.position }}.
                </span>
                <h2 class="Title">{{ getSectionSkills.value }}</h2>
                <span class="Line"></span>
            </div>

            <ul class="font-highlight js-score-values">
                <Skill v-for="(skillValue, skillName) in getDataSkills"
                       :skill-name="skillName"
                       :skill-value="skillValue"/>
            </ul>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { processObserver } from '../../../../../plugins/common/utils/intersectionObserver'
import Skill from './Skill.vue'
import useStore from '../../store'

export default {
    name: 'Skills',
    components: { Skill },
    setup () {
        const { getDataSkills, getSectionSkills } = useStore.skills()

        /**
         *
         * @param index
         * @returns {unknown}
         */
        const getScoreSkill = (index) => {
            const skillsValues = Object.values(getDataSkills.value)
            return skillsValues[index]
        }

        /**
         *
         */
        const objectGsap = () => {
            gsap.to('.js-score-value', {
                    duration: 1,
                    stagger: 0.15,
                    width: (index) => getScoreSkill(index) + '%'
                }
            )
        }

        /**
         *
         */
        const processAnimation = () => {
            const options = {
                root: null,
                rootMargin: '0px 0px -200px 0px'
            }

            const containerSkills = document.querySelectorAll('.js-score-values')
            processObserver({ callback: objectGsap, elementsObserved: containerSkills, options })
        }

        /**
         *
         */
        onMounted(() => {
            processAnimation()
        })

        return {
            getDataSkills,
            objectGsap,
            getSectionSkills,
        }
    }
}
</script>
