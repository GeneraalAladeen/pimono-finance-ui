<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary'].includes(value),
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
})

const emit = defineEmits(['click'])
</script>

<template>
    <button
        @click="emit('click')"
        :class="[
            'rounded-xl w-full border-2 border-white p-3  font-medium',
            {
                'bg-[#121317] text-white': variant === 'primary',
                'bg-[#ffffff] text-black': variant === 'secondary',
            },
            {
                'p-3': size === 'medium',
                'p-1.5': size === 'small',
                'p-5': size === 'large',
            },
        ]"
    >
        <slot></slot>
    </button>
</template>
