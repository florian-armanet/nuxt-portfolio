<template>
    <p class="max-w-sm w-full mx-auto text-center px-4 mb-8">{{ getDataFooter.text }}</p>
    <ul class="flex-flow-center mb-12">
        <li v-for="(link, icon) in getDataFooter.brands">
            <a :href="link"
               :aria-label="uppercaseFirstLetter(icon)"
               target="_blank"
               rel="noopener"
               class="w-12 h-12 rounded-full bg-primary-base mx-2 flex-flow-center shadow-lg shadow-primary-base/50 transition-fast hover:shadow-md hover:shadow-sm">
                <i :class="[`Icon-${icon}`]" class="text-4xl text-secondary-base leading-none"></i>
            </a>
        </li>
    </ul>
</template>

<script setup>
import useStore from '../store'
import { API_URL } from '../api/api'
import uppercaseFirstLetter from '~/plugins/common/utils/uppercaseFirstLetter'

const { fetchDataFooter, getDataFooter } = useStore.footer()

const { data: { value: { data: dataFooter } } } = await useAsyncData('footer', () => $fetch(API_URL + 'footer'))
fetchDataFooter(dataFooter.attributes)
</script>
