<template>
    <div :data-scroll-target="getSectionContact.code"
         class="js-appear-opacity o-container o-container--lg text-tertiary-base py-8"
         data-animation-speed="0.25">
        <div class="flex-flow-centerY sm:flex-flow-center mb-8">
            <span class="Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6">
                0{{ getSectionContact.position }}.
            </span>
            <h2 class="Title">{{ getSectionContact.value }}</h2>
            <span class="Line"></span>
        </div>

        <Transition name="Animation-opacity">
            <p v-if="hasSent"
               class="max-w-sm mx-auto bg-secondary-hover rounded p-8 mb-20 text-center text-primary-base font-bold">
                {{ getDataTranslations.sent }}
            </p>
        </Transition>

        <template v-if="!hasSent">
            <div class="max-w-sm mx-auto mb-20 flex flex-col">
                <input type="text" name="name" placeholder="Nom *" class="Input" v-model="name">
                <input type="email" name="email" placeholder="Email *" class="Input" v-model="email">
                <textarea name="message" placeholder="Message *" rows="6" class="Input" v-model="message"></textarea>

                <div class="flex-flow-center mt-8">
                    <button @click="onSubmit" class="Button" :class="{'Button--disabled' : !validityForm}">
                        <span v-show="formSendingLoading">{{ getDataTranslations.sending }}</span>
                        <span v-show="!formSendingLoading">{{ getDataTranslations.send }}</span>
                    </button>
                </div>
            </div>
        </template>

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
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import { CONTACT } from '~/src/js/app/constants'

const { fetchDataContact, getDataContact, getSectionContact } = useStore.contact()
const { getDataTranslations }                                 = useStore.translations()

const name               = ref('')
const email              = ref('')
const message            = ref('')
const formSendingLoading = ref(false)
const hasSent            = ref(false)

const inputsValues = computed(() => ( {
    name: name.value,
    email: email.value,
    message: message.value,
} ))

const validityForm = computed(() => Object.entries(inputsValues.value).every(([key, value]) => {
    return key && value && email.value.includes('@')
}))

const { data: { value: { data: dataContact } } } = await useAsyncData(CONTACT, () => $fetch(API_URL + CONTACT))
fetchDataContact(dataContact.attributes)
emailjs.init(getDataContact.value?.emailjs?.public_key)

/**
 *
 */
const onSubmit = () => {
    if (!validityForm.value || formSendingLoading.value || !getDataContact.value?.emailjs?.service_id || !getDataContact.value?.emailjs?.template_id) return

    formSendingLoading.value = true

    emailjs.send(getDataContact.value.emailjs.service_id, getDataContact.value.emailjs.template_id, inputsValues.value)
        .then(res => {
            formSendingLoading.value = false
            hasSent.value            = true
        })
        .catch(err => console.log(err))
}
</script>
