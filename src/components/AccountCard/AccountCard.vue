<script setup>
    import { defineProps } from 'vue'
    import { Icon } from "@iconify/vue";
    import Card from '@/components/common/Card.vue'

    defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        buttonLabel: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits(['click'])

</script>

<template>
    <Card>
        <slot></slot>
        <div class="flex mb-4 items-center">
            <div class="grow">
                <p class="text-[26px] font-medium text-white leading-7 mb-2 w-10">{{ title }}</p>
                <p class="text-xs text-[#6A6B6F]">{{ description }}</p>
            </div>
            <img :src="image" class="h-25" />
        </div>
        <button @click="emit('click')" class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-4 bg-[#121317]">
            <span class="text-white">{{ buttonLabel }}</span>
            <Icon icon="tabler:chevron-right" color="#fff" />
        </button>
    </Card>
</template>

