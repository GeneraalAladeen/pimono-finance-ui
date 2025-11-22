<template>
    <label for="hs-basic-usage" class="relative inline-block w-12 h-7 cursor-pointer">
        <input
            type="checkbox"
            :value="toggleValue"
            @change="$emit('toggle', toggleValue)"
            id="hs-basic-usage"
            class="peer sr-only"
        />
        <span
            class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-black dark:bg-white dark:peer-checked:bg-black peer-disabled:opacity-50 peer-disabled:pointer-events-none"
        ></span>
        <span
            class="absolute top-1/2 start-0.5 -translate-y-1/2 size-5.5 flex justify-center items-center bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-black dark:peer-checked:bg-white font-bold"
            >t</span
        >
    </label>
</template>

<script setup>
import { ref } from 'vue'

const toggleValue = ref(true)
</script>
