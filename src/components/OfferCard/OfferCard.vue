<script setup>
    import { defineProps } from 'vue'

    import { Icon } from "@iconify/vue";

    defineProps({
        pinned: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="flex flex-col items-center w-22 gap-2 grow-0 shrink-0">
        <div class="relative rounded-full grow-0 border-3 p-1 border-white">
            <div v-show="pinned" class="absolute rounded-full top-0 -right-2 p-1 bg-white">
                <Icon icon="sidekickicons:pin-20-solid" :height="18" color="#000"  />
            </div>
            <img :src="icon" class="h-13 w-13" />
        </div>
        <p class="text-xs text-center text-[#FDFEFF/1] leading-3">{{  text }}</p>
    </div>

</template>

