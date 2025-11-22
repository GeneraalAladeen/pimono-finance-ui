<script setup>
  import Header from './components/layout/Header.vue'
  import BottomNavBar from './components/layout/BottomNavBar.vue'
  import OfferCard from '@/components/OfferCard'
  import TransactionHistory from '@/components/TransactionHistory'
  import Card from '@/components/common/Card.vue'
  import Carousel from '@/components/common/Carousel.vue'
  import PromoCard from '@/components/PromoCard'
  import ActionCard from '@/components/ActionCard'
  import AccountCard from '@/components/AccountCard'

  import IconPreciousMetals from '@/components/icons/IconPreciousMetals.vue'
  import IconAnalytics from '@/components/icons/IconAnalytics.vue'
  import IconBars from '@/components/icons/IconBars.vue'

  import superman from '@/assets/images/superman.svg';
  import garanti from '@/assets/images/garanti.png';

  import stat from '@/assets/images/stat.png';
  import web from '@/assets/images/web.png';
  import graph from '@/assets/images/graph.png';
  import gift from '@/assets/images/gift.png';
  import money from '@/assets/images/money.png';
  import bar from '@/assets/images/bar.png';
  import jar from '@/assets/images/jar.png';

  import { Icon } from "@iconify/vue";
  import { computed , ref } from 'vue'

  const currentPromoPage = ref(1)

  const handlePageChange = (pageNumber) => {
    currentPromoPage.value = pageNumber
  }

  const transactions = [
     {
      image: garanti,
      title:'Hidayet Salt',
      description:'FAST Para Transferi',
      type: 'debit',
      amount: 20000,
      date: '11 Nov 2025 12:12'
    },
    {
      image: garanti,
      title:'Garanti BBVA',
      description:'FAST Para Transferi',
      type: 'credit',
      amount: 20000,
      date: '11 Nov 2025 12:12'
    },
  ]

   const promos = [
    {
      icon: 'tdesign:upload-1',
      text:'Hesabina Para Yatir',

    },
    {
      icon: 'zondicons:credit-card',
      text:'Papara Card Iste',
    },
      {
      icon: 'fa7-regular:user-large',
      text:'e-Sans 150 TL Hediye',

    },
  ]



  const offers = [
    {
      icon: money,
      text:'Papara Sticker Card',
      pinned: true
    },
    {
      icon: superman,
      text:'Papara Superman Card',
      pinned: true
    },
      {
      icon: gift,
      text:'e-Sans 150 TL Hediye',
      pinned: false
    },
      {
      icon: stat,
      text:'Yatirim Hesabi',
      pinned: false
    },
      {
      icon: graph,
      text:'Altin Hediye',
      pinned: false
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
        :icon="offer.icon" />
    </Carousel>
  </div>

  <div class="mt-4 pl-4">
    <Carousel :item-count="4">
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
        title="Kiyetli Madenler"
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
      <div class="flex items-center gap-2 ">
          <p class="text-xs text-[#6A6B6F]">DAHA IYI BIR PAPARA DENEYIMI</p>
          <Icon icon="mingcute:arrow-right-line" />
      </div>
      <p class="text-[#DCA36C] text-xs">{{ currentPromoPage }} / 5</p>
    </div>
    <div class=" px-4">
      <Carousel @current-page="handlePageChange"  :item-count="promos.length" :show-indicators="false">
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

