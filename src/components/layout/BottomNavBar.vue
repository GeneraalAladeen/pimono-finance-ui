<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const selectedItem = ref('Home')

const navItems = [
    {
        icon: 'iconamoon:home',
        name: 'Home',
        route: '',
    },
    {
        icon: 'ic:baseline-qr-code',
        name: 'QR islemleri',
        route: '',
    },
    {
        icon: 'fa-send-o',
        name: 'Para Transferi',
        route: '',
    },
    {
        icon: 'carbon:report',
        name: 'Odemeler',
        route: '',
    },
    {
        icon: 'zondicons:credit-card',
        name: 'Papara Card',
        route: '',
    },
]

const selectItem = (item) => {
    selectedItem.value = item.name
}
</script>

<template>
    <nav class="fixed bottom-0 left-0 right-0 bg-[#121317]">
        <div class="flex justify-around items-center py-1">
            <button
                v-for="item in navItems"
                :key="item.name"
                @click="selectItem(item)"
                class="flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200"
                :class="[selectedItem === item.name ? 'text-white ' : 'text-gray-400 ']"
            >
                <Icon
                    :height="26"
                    :icon="item.icon"
                    class="text-2xl mb-1 transition-all duration-200"
                />
                <span class="text-[10px]">{{ item.name }}</span>
            </button>
        </div>
    </nav>
</template>
