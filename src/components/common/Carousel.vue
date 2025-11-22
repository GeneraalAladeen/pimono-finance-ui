<template>
    <div
        ref="carouselRef"
        @scroll="handleScroll"
        class="overflow-scroll snap-mandatory scroll-smooth snap-x flex gap-2"
    >
        <slot></slot>
    </div>

    <div v-show="showIndicators" class="flex justify-center mt-4 space-x-3">
        <button
            v-for="(slide, index) in totalItems"
            :key="index"
            @click="scrollToItem(index)"
            class="w-2 h-2 rounded-full"
            :class="currentIndex === index ? 'bg-white' : 'bg-[#393A3E] hover:bg-gray-400'"
        ></button>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'

const currentIndex = ref(0)
const carouselRef = ref(null)
const props = defineProps({
    itemCount: {
        type: Number,
        required: true,
    },
    showIndicators: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['currentPage'])

const totalItems = Array.from({ length: props.itemCount }, (_, index) => index + 1)
let scrollTimeout = null

const scrollToItem = (index) => {
    if (carouselRef.value) {
        const scrollWidth = carouselRef.value.scrollWidth
        const itemWidth = scrollWidth / totalItems.length
        carouselRef.value.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth',
        })
        currentIndex.value = index
        emit('currentPage', index + 1)
    }
}

const scrollToNext = () => {
    if (currentIndex.value < totalItems.length - 1) {
        scrollToItem(currentIndex.value + 1)
    }
}

const scrollToPrev = () => {
    if (currentIndex.value > 0) {
        scrollToItem(currentIndex.value - 1)
    }
}

const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
        if (carouselRef.value) {
            const scrollLeft = carouselRef.value.scrollLeft
            const scrollWidth = carouselRef.value.scrollWidth
            const itemWidth = scrollWidth / totalItems.length
            const newIndex = Math.round(scrollLeft / itemWidth)

            if (newIndex !== currentIndex.value) {
                currentIndex.value = Math.max(0, Math.min(newIndex, totalItems.length - 1))
            }

            emit('currentPage', currentIndex.value + 1)
        }
    }, 100)
}
</script>
