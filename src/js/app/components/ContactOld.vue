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

    </div>
</template>

<script setup>
import useStore from '../store'
import { API_URL } from '../api/api'

const { fetchDataContact, getDataContact, getSectionContact } = useStore.contact()

/**
 *
 * @param event
 */
const redirectToMail = (event) => window.location.href = `mailto:${ getDataContact.value.mail }`

await useAsyncData(
    'contact',
    () => $fetch(API_URL + 'contact')
).then(res => {
    fetchDataContact(res.data.value.data.attributes)
})
</script>
