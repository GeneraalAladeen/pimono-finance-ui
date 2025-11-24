<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import Modal from '@/components/common/Modal.vue'
import ListItem from '@/components/common/ListItem.vue'

const showModal = ref(false)

const selectedItem = ref('Home')

const navItems = [
    {
        icon: 'iconamoon:home',
        name: 'Home',
        route: '/home',
    },
    {
        icon: 'ic:baseline-qr-code',
        name: 'QR islemleri',
        route: 'qr',
    },
    {
        icon: 'fa-send-o',
        name: 'Para Transferi',
        route: '',
    },
    {
        icon: 'carbon:report',
        name: 'Odemeler',
        route: 'report',
    },
    {
        icon: 'zondicons:credit-card',
        name: 'Papara Card',
        route: '',
    },
]

const selectItem = (item) => {
    selectedItem.value = item.name

    if (item.route === '') {
        showModal.value = true
    }
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
        <Modal v-model="showModal" title="Basic Modal">
            <div class="pl-4">
                <ListItem icon="fa-send-o">Para Gonder</ListItem>
                <ListItem icon="cil:transfer">Para Iste</ListItem>
                <ListItem icon="streamline-plump:web">Yurt Didi Para Transferi</ListItem>
                <ListItem icon="tdesign:secured">Guvenli Odeme Islemi</ListItem>
                <ListItem icon="pajamas:retry">Dezenli Transfer</ListItem>
            </div>
        </Modal>
    </nav>
</template>
