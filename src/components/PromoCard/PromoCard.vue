<script setup>
    import { defineProps } from 'vue'
    import { Icon } from "@iconify/vue";

    defineProps({
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
    <div class="flex rounded-xl grow-0 shrink-0 border border-[#37383C] p-4 items-center w-45 gap-3">
        <div class="rounded-full bg-[#F4F4D9] p-3">
            <Icon :icon="icon" :height="20" color="#000"  />
        </div>
        <p class="grow text-base font-medium text-white leading-5">{{  text }}</p>
    </div>
</template>

