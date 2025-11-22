<script setup>
import { defineProps, defineEmits } from 'vue'

import { Icon } from '@iconify/vue'

defineProps({
    variant: {
        type: String,
        default: 'neutral',
        validator: (value) => ['primary', 'secondary', 'neutral'].includes(value),
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
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

const emit = defineEmits(['click'])
</script>

<template>
    <button
        @click="emit('click')"
        :class="[
            'relative rounded-xl grow-0 border border-[#37383C]',
            {
                'bg-[#323232]': variant === 'primary',
                'bg-[#ffffff]': variant === 'secondary',
                '': variant === 'neutral',
            },
            {
                'p-3': size === 'medium',
                'p-1.5': size === 'small',
                'p-5': size === 'large',
            },
        ]"
    >
        <p
            v-show="notificationCount > 0"
            class="text-xs text-white absolute -right-1 -top-1 h-4 w-4 flex justify-center rounded-full bg-[#FF2541]"
        >
            {{ notificationCount }}
        </p>
        <Icon :icon="icon" :height="24" :color="variant === 'secondary' ? '#000' : '#fff'" />
    </button>
</template>
