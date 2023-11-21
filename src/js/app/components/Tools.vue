<template>
    <div class="o-container o-container--sm mb-12 sm:mb-24 lg:mb-40">
        <h2 class="js-appear-opacity Title Title--2xl mb-4">{{ getDataTools.title }}</h2>

        <ul class="js-appear-stagger flex flex-wrap" data-stagger="0.05">
            <li v-for="tool in getDataTools.tools"
                class="js-appear-stagger-child px-2 py-1 mr-2 mb-2 border border-primary-base rounded">
                {{ tool }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import useStore from '../store'
import { API_URL } from '../api/api'

const { fetchDataTools, getDataTools } = useStore.tools()

const { data: { value: { data: dataTools } } } = await useAsyncData('tool', () => $fetch(API_URL + 'tool'))
fetchDataTools(dataTools.attributes)
</script>
