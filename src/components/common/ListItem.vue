<template>
    <div class="flex gap-4 text-white 0">
        <div v-if="icon" class="grid place-content-center">
            <Icon :height="18" :icon="icon" />
        </div>
        <div :class="[' py-3 w-full', { 'border-b border-b-[#3A3A3C]': !lastItem }]">
            <p class="font-medium"><slot></slot></p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
    icon: {
        type: String,
    },
    lastItem: {
        type: Boolean,
        default: false,
    },
})
</script>
