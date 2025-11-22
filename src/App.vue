<script setup>
import Header from './components/layout/Header.vue'
import BottomNavBar from './components/layout/BottomNavBar.vue'
import OfferCard from '@/components/OfferCard'
import TransactionHistory from '@/components/TransactionHistory'
import Card from '@/components/common/Card.vue'
import Switch from '@/components/common/Switch.vue'
import Carousel from '@/components/common/Carousel.vue'
import PromoCard from '@/components/PromoCard'
import ActionCard from '@/components/ActionCard'
import AccountCard from '@/components/AccountCard'
import IconButton from '@/components/IconButton'

import IconPreciousMetals from '@/components/icons/IconPreciousMetals.vue'
import IconAnalytics from '@/components/icons/IconAnalytics.vue'
import IconBars from '@/components/icons/IconBars.vue'

import superman from '@/assets/images/superman.svg'
import garanti from '@/assets/images/garanti.png'
import stat from '@/assets/images/stat.png'
import web from '@/assets/images/web.png'
import graph from '@/assets/images/graph.png'
import gift from '@/assets/images/gift.png'
import money from '@/assets/images/money.png'
import bar from '@/assets/images/bar.png'
import jar from '@/assets/images/jar.png'

import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

import { formatAmount } from '@/utils/formatter.js'

const currentPromoPage = ref(1)

const handlePageChange = (pageNumber) => {
    currentPromoPage.value = pageNumber
}

const transactions = [
    {
        image: garanti,
        title: 'Hidayet Salt',
        description: 'FAST Para Transferi',
        type: 'debit',
        amount: 20000,
        date: '11 Nov 2025 12:12',
    },
    {
        image: garanti,
        title: 'Garanti BBVA',
        description: 'FAST Para Transferi',
        type: 'credit',
        amount: 20000,
        date: '11 Nov 2025 12:12',
    },
]

const promos = [
    {
        icon: 'tdesign:upload-1',
        text: 'Hesabina Para Yatir',
    },
    {
        icon: 'zondicons:credit-card',
        text: 'Papara Card Iste',
    },
    {
        icon: 'fa7-regular:user-large',
        text: 'e-Sans 150 TL Hediye',
    },
]

const offers = [
    {
        icon: money,
        text: 'Papara Sticker Card',
        pinned: true,
    },
    {
        icon: superman,
        text: 'Papara Superman Card',
        pinned: true,
    },
    {
        icon: gift,
        text: 'e-Sans 150 TL Hediye',
        pinned: false,
    },
    {
        icon: stat,
        text: 'Yatirim Hesabi',
        pinned: false,
    },
    {
        icon: graph,
        text: 'Altin Hediye',
        pinned: false,
    },
]
</script>

<template>
    <Header />

    <div class="mb-2 pl-3">
        <Carousel :item-count="offers.length" :show-indicators="false">
            <OfferCard
                v-for="(offer, index) in offers"
                :key="index"
                :pinned="offer.pinned"
                :text="offer.text"
                :icon="offer.icon"
            />
        </Carousel>
    </div>

    <div class="mt-4 pl-4">
        <Carousel :item-count="6">
            <Card>
                <div class="flex flex-col justify-between grow">
                    <div class="flex gap-2 items-center pb-4 border-b border-b-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 64 64"
                        >
                            <circle cx="32" cy="32" r="30" fill="#df1529" />
                            <g fill="#fff">
                                <path
                                    d="m41.3 39l.1-5.4L36 32l5.4-1.6l-.1-5.4l3.3 4.3l5.4-1.6l-3.3 4.3l3.3 4.3l-5.4-1.6z"
                                />
                                <path
                                    d="M33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1C37.3 19 33.3 17 28.8 17C20.6 17 14 23.7 14 32s6.6 15 14.8 15c4.5 0 8.5-2 11.2-5.1c-1.9 1.3-4.2 2.1-6.8 2.1"
                                />
                            </g>
                        </svg>
                        <p class="text-[#FBFBFB]/75 text-xs">Turk Lirasi Hesabi</p>
                    </div>
                    <div class="py-4 grow">
                        <span>
                            <p class="font-medium text-4xl text-white">{{ formatAmount(0) }}</p>
                            <p class="text-xs mt-1">IBAN: B124 Y123 G463</p>
                        </span>
                    </div>
                    <div class="flex gap-2">
                        <button
                            @click="emit('click')"
                            class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-3 bg-[#121317]"
                        >
                            <span class="text-white">Yatir / Cek</span>
                            <IconButton
                                variant="secondary"
                                size="small"
                                icon="fluent:wallet-32-regular"
                            />
                        </button>
                        <button
                            @click="emit('click')"
                            class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-3 bg-[#121317]"
                        >
                            <span class="text-white">Gunder</span>
                            <IconButton variant="secondary" size="small" icon="fa-send-o" />
                        </button>
                    </div>
                </div>
            </Card>
            <AccountCard
                title="Yetirim Hesabi"
                description="(Altin, gumus, Platin)"
                buttonLabel="Yatirim hesabi Olustur"
                :image="stat"
            >
                <IconAnalytics />
            </AccountCard>
            <AccountCard
                title="Dolar Hesabi"
                description="(Altin, gumus, Platin)"
                buttonLabel="Yatirim hesabi Olustur"
                :image="web"
            >
                <Icon icon="circle-flags:us" :height="24" />
            </AccountCard>
            <AccountCard
                title="Kiymetli Madenler"
                description="(Altin, gumus, Platin)"
                buttonLabel="Kiymetli Madenler Hesabi Ac"
                :image="bar"
            >
                <IconPreciousMetals />
            </AccountCard>
            <AccountCard
                title="Birikim Hesabi"
                description="(Altin, gumus, Platin)"
                buttonLabel="Yatirim hesabi Olustur"
                :image="jar"
            >
                <IconBars />
            </AccountCard>
            <Card>
                <div class="flex gap-2 items-center pb-4">
                    <img
                        class="h-4 rounded-full"
                        src="https://www.papara.com/icon/apple-touch-icon.png"
                    />
                    <p class="text-white/80 text-xs">Tum Varliklarim</p>
                </div>
                <div class="flex justify-between mb-4">
                    <p class="font-medium text-4xl text-white">{{ formatAmount(0) }}</p>
                    <Switch />
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex justify-between">
                        <span class="flex gap-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 64 64"
                            >
                                <circle cx="32" cy="32" r="30" fill="#df1529" />
                                <g fill="#fff">
                                    <path
                                        d="m41.3 39l.1-5.4L36 32l5.4-1.6l-.1-5.4l3.3 4.3l5.4-1.6l-3.3 4.3l3.3 4.3l-5.4-1.6z"
                                    />
                                    <path
                                        d="M33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1C37.3 19 33.3 17 28.8 17C20.6 17 14 23.7 14 32s6.6 15 14.8 15c4.5 0 8.5-2 11.2-5.1c-1.9 1.3-4.2 2.1-6.8 2.1"
                                    />
                                </g>
                            </svg>
                            <p class="text-[#FBFBFB]/75 text-xs">Turk Lirasi Hesabi</p>
                        </span>
                        <p class="text-white">{{ formatAmount(0) }}</p>
                    </div>
                    <div class="flex justify-between">
                        <span class="flex gap-2 items-center">
                            <img
                                class="h-4 w-4 border-white rounded-full"
                                src="https://dkto9gpxgolik.cloudfront.net/icons/currencies/xau.svg"
                            />
                            <p class="text-[#FBFBFB]/75 text-xs">Kiymetli Madenler</p>
                        </span>
                        <Icon icon="octicon:dash-16" :height="20" />
                    </div>
                    <div class="flex justify-between">
                        <span class="flex gap-2 items-center">
                            <div class="bg-[#0098C9] rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="#fff"
                                        stroke-linecap="square"
                                        stroke-width="2"
                                    >
                                        <path d="M21 21H3V3" />
                                        <path
                                            d="m6 14l5-5l4 4c.42-.421 1.549-1.547 2.715-2.71m1.592-1.588l1.697-1.692zm0 0l-.004.004m0 0l-1.588 1.584m1.588-1.584l-1.588 1.584M17 7h4v4"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <p class="text-[#FBFBFB]/75 text-xs">Yatirim hesabi</p>
                        </span>
                        <Icon icon="octicon:dash-16" :height="20" />
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="flex gap-2 items-center">
                            <div class="bg-[#A14CCC] rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="#fff"
                                        d="m905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1c4.3-.7 7.3-4.8 6.6-9.2m-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1c4.4-.7 7.3-4.8 6.6-9.2zM342 472h342c.4 0 .9 0 1.3-.1c4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8"
                                    />
                                </svg>
                            </div>
                            <p class="text-[#FBFBFB]/75 text-xs">Birikim Hesabi</p>
                        </span>
                        <Icon icon="octicon:dash-16" :height="20" />
                    </div>
                </div>
            </Card>
        </Carousel>
    </div>

    <section class="p-4">
        <ActionCard
            :notification-count="5"
            icon="streamline-ultimate:analytics-board-graph-line"
            time="Bugun 08:00"
            title="Aylik hesap ozetin olustruldu"
            description=" hesap Aylik olustruldu Aylik olustruldu"
        />
    </section>

    <div class="mt-2">
        <div class="flex justify-between px-4 pb-3">
            <div class="flex items-center gap-2">
                <p class="text-xs text-[#6A6B6F]">DAHA IYI BIR PAPARA DENEYIMI</p>
                <Icon icon="mingcute:arrow-right-line" />
            </div>
            <p class="text-[#DCA36C] text-xs">{{ currentPromoPage }} / 5</p>
        </div>
        <div class="px-4">
            <Carousel
                @current-page="handlePageChange"
                :item-count="promos.length"
                :show-indicators="false"
            >
                <PromoCard
                    v-for="(promo, index) in promos"
                    :key="index"
                    :text="promo.text"
                    :icon="promo.icon"
                />
            </Carousel>
        </div>
    </div>

    <TransactionHistory :transactions="transactions" :loading="false" />
    <BottomNavBar />
</template>
