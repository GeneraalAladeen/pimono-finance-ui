<template>
    <div class="h-screen p-4 flex flex-col">
        <button @click="router.back()">
            <Icon icon="ic:baseline-chevron-left" color="#fff" :width="40" />
        </button>
        <div class="grow text-center p-4 flex flex-col gap-6">
            <p class="text-3xl font-semibold text-white">Akbank ATM'leri tamamen ucretsiz.</p>
            <p class="px-2">
                Papara Card ile tum ATM'lerden para cekebilir Akbank ATM'lerinde tamamen ucretsiz
                para yatirabilir ve cekebilirsin
            </p>
            <img :src="cards" class="my-6" />
        </div>
        <div class="gap-4 flex flex-col">
            <Button>ATM Bul</Button>
            <Button variant="secondary">Papara Card Iste</Button>
        </div>
    </div>
</template>

<script setup>
import cards from '@/assets/images/cards.png'
import { Icon } from '@iconify/vue'
import Button from '@/components/common/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
