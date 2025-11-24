<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import Modal from '@/components/common/Modal.vue'

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
                <div class="flex gap-4 text-white 0">
                    <div class="grid place-content-center">
                        <Icon
                            :height="18"
                            icon="fa-send-o"
                        />
                    </div>
                    <div class="border-b py-3 w-full border-b-[#3A3A3C]">
                        <p class="font-medium">Para Gonder</p>
                    </div>
                </div>
                <div class="flex gap-4 text-white 0">
                    <div class="grid place-content-center">
                        <Icon
                            :height="18"
                            icon="cil:transfer"
                        />
                    </div>
                    <div class="border-b py-3 w-full border-b-[#3A3A3C]">
                        <p class="font-medium">Para Iste</p>
                    </div>
                </div>
                <div class="flex gap-4 text-white 0">
                    <div class="grid place-content-center">
                        <Icon
                            :height="18"
                            icon="streamline-plump:web"
                        />
                    </div>
                    <div class="border-b py-3 w-full border-b-[#3A3A3C]">
                        <p class="font-medium">Yurt Didi Para Transferi</p>
                    </div>
                </div>
                <div class="flex gap-4 text-white 0">
                    <div class="grid place-content-center">
                        <Icon
                            :height="18"
                            icon="tdesign:secured"
                        />
                    </div>
                    <div class="border-b py-3 w-full border-b-[#3A3A3C]">
                        <p class="font-medium">Guvenli Odeme Islemi</p>
                    </div>
                </div>
                <div class="flex gap-4 text-white 0">
                    <div class="grid place-content-center">
                        <Icon
                            :height="18"
                            icon="pajamas:retry"
                        />
                    </div>
                    <div class="py-3 w-full border-b-[#3A3A3C]">
                        <p class="font-medium">Dezenli Transfer</p>
                    </div>
                </div>
            </div>
        </Modal>
    </nav>
</template>
