<script setup>
    import { defineProps } from 'vue'

    import { Icon } from "@iconify/vue";

    defineProps({
        fill: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div :class="[ 
        'rounded-xl grow-0 border border-sm border-[#37383C] p-4',
        {
            'bg-[#323232]': fill
        }
        ]">
        <Icon :icon="icon" :height="25" color="#fff"  />

    </div>

</template>

