<script setup>
import { defineProps, ref } from 'vue'

import { Icon } from '@iconify/vue'

const props = defineProps({
    pinned: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
})

const isPinned = ref(props.pinned)

const togglePin = () => (isPinned.value = !isPinned.value)
</script>

<template>
    <button @click="togglePin" class="flex flex-col items-center w-20 gap-2 grow-0 shrink-0">
        <div class="relative rounded-full grow-0 border-3 p-2 border-white">
            <div v-show="isPinned" class="absolute rounded-full top-0 -right-2 p-1 bg-white">
                <Icon icon="sidekickicons:pin-20-solid" :height="18" color="#000" />
            </div>
            <img :src="icon" class="h-10 w-10" />
        </div>
        <p class="text-xs text-center text-[#FBFBFB]/75 leading-3">{{ text }}</p>
    </button>
</template>
