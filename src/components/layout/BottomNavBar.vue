<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import Modal from '@/components/common/Modal.vue'
import StatModal from '@/components/StatModal'
import ListItem from '@/components/common/ListItem.vue'
import router from '@/router'

import chart from '@/assets/images/chart.png'

const showModal = ref(false)
const statModal = ref(false)
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
        route: 'report',
    },
    {
        icon: 'zondicons:credit-card',
        name: 'Papara Card',
        route: '/card',
    },
]

const selectItem = (item) => {
    selectedItem.value = item.name

    if (item.name === 'Odemeler') {
        return (statModal.value = true)
    }

    if (item.route === '') {
        showModal.value = true
    } else {
        router.push(item.route)
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
        <Modal v-model="showModal">
            <div v-if="selectedItem == 'Para Transferi'" class="pl-4">
                <ListItem icon="fa-send-o">Para Gonder</ListItem>
                <ListItem icon="cil:transfer">Para Iste</ListItem>
                <ListItem icon="streamline-plump:web">Yurt Didi Para Transferi</ListItem>
                <ListItem icon="tdesign:secured">Guvenli Odeme Islemi</ListItem>
                <ListItem icon="pajamas:retry">Dezenli Transfer</ListItem>
            </div>

            <div v-else="selectedItem == 'QR islemleri'" class="pl-4">
                <ListItem icon="mdi:qrcode-plus">QR ile Odeme Yap</ListItem>
                <ListItem icon="mdi:qrcode-minus">QR ile Odeme AI</ListItem>
                <ListItem icon="iconoir:card-reader">QR ile ATM'den Para Cek</ListItem>
                <ListItem icon="iconoir:card-reader">QR ile ATM'den Para Yatir</ListItem>
            </div>
        </Modal>
        <StatModal v-model="statModal">
            <img :src="chart" class="w-3/4" />
            <div class="flex flex-wrap gap-4 w-3/4 text-sm justify-center">
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-sm bg-[#27AA73]"></div>
                    <p class="text-white">Ulasim Kartian</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-sm bg-[#6768F0]"></div>
                    <p class="text-white">Oyun & Dijital Kod</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-smd bg-[#126C95]"></div>
                    <p class="text-white">Sans Oyunlan</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-sm bg-red-500"></div>
                    <p class="text-white">Badis</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-smd bg-[#4EC4D5]"></div>
                    <p class="text-white">Findeks</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-sm bg-[#12859F]"></div>
                    <p class="text-white">Havalimani Hizmetieri</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="size-4 rounded-sm bg-[#D47E0D]"></div>
                    <p class="text-white">GSM TL/Paket</p>
                </div>
            </div>
            <p class="mt-6 text-3xl text-center font-semibold text-white">
                Odemelerini aylik olarak kategori bazli goruntuleyebilirsin
            </p>
        </StatModal>
    </nav>
</template>
