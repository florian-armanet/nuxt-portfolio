<template>
    <div :data-scroll-target="getSectionContact.code"
         class="js-appear-opacity text-tertiary-base py-8" data-animation-spedd="0.25">
        <div class="o-container o-container--lg text-center mb-20">
            <button @click="redirectToMail"
                    class="Button">
                {{ getSectionContact.value }}
            </button>
        </div>

        <div class="flex-flow-center mb-20">
            <a :href="getDataContact.linkedin"
               target="_blank"
               class="block transition-fast hover:-translate-y-1"
               rel="noopener"
               aria-label="Linkedin">
                <i class="Icon-linkedin text-3xl text-primary-base transition-fast transform hover:text-primary-hover"></i>
            </a>
        </div>

        <p class="max-w-sm w-full mx-auto text-center p-4">{{ getDataTranslations.portfolio_development_details }}</p>
    </div>
</template>

<script>
import { ref } from 'vue'
import useStore from '../store'

export default {
    name: 'Contact',
    setup () {
        const { getDataContact, getSectionContact } = useStore.contact()
        const { getDataTranslations } = useStore.translations()

        const imageObject = ref('')

        /**
         *
         * @param event
         */
        const redirectToMail = (event) => window.location.href = `mailto:${ getDataContact.value.mail }`

        return {
            getDataContact,
            getSectionContact,
            getDataTranslations,
            imageObject,
            redirectToMail,
        }
    }
}
</script>
