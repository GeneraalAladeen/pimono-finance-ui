<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
    time: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    notificationCount: {
        type: Number,
        required: false,
        default: 0,
    },
})
</script>

<template>
    <div class="relative">
        <div
            class="relative bg-[#121317] flex rounded-xl w-full border border-[#37383C] p-4 items-center gap-3"
        >
            <p
                v-show="notificationCount > 0"
                class="text-xs text-white absolute right-2 -top-2 h-4 w-4 flex justify-center rounded-full bg-[#FF2541]"
            >
                {{ notificationCount }}
            </p>
            <div class="flex gap-4">
                <div class="rounded-full bg-[#F46519] w-8 h-8 flex justify-center items-center">
                    <Icon :icon="icon" :height="16" color="#fff" />
                </div>
                <div class="flex flex-col grow">
                    <p class="text-xs text-[#6A6B6F]">{{ time }}</p>
                    <p class="grow text-base font-medium text-white leading-6">{{ title }}</p>
                    <p class="text-xs text-[#6A6B6F]">{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="absolute -z-10 -bottom-2 rounded-xl w-full scale-90 bg-[#202125] p-4"></div>
        <div class="absolute -z-20 -bottom-4 rounded-xl w-full scale-80 bg-[#17181C] p-4"></div>
    </div>
</template>
