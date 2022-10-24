<template>
    <div class="flex-flow-center flex-col h-screen text-white">
        <template v-if="Number(error.statusCode) === 404">
            <p class="text-3xl mb-8">{{ getDataTranslations.page_not_found }}</p>
        </template>
        <a href="/" class="Button">{{ getDataTranslations.back }}</a>
    </div>
</template>

<script setup>
import useStore from './src/js/app/store'

const props = defineProps({
    error: Object
})

const { getDataTranslations } = useStore.translations()

</script>
