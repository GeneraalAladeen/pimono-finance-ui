<script setup>
  import Header from './components/layout/Header.vue'
  import BottomNavBar from './components/layout/BottomNavBar.vue'
  import OfferCard from '@/components/OfferCard'
  import TransactionHistory from '@/components/TransactionHistory'
  import Card from '@/components/common/Card.vue'

  import superman from '@/assets/superman.svg';
  import garanti from '@/assets/garanti.png';

  import stat from '@/assets/stat.png';
  import web from '@/assets/web.png';

  import { Icon } from "@iconify/vue";

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



  const offers = [
    {
      icon: superman,
      text:'Papara Sticker Card',
      pinned: true
    },
    {
      icon: superman,
      text:'Papara Superman Card',
      pinned: true
    },
      {
      icon: superman,
      text:'e-Sans 150 TL Hediye',
      pinned: false
    },
      {
      icon: superman,
      text:'Yatirim Hesabi',
      pinned: false
    },
      {
      icon: superman,
      text:'Altin Hediye',
      pinned: false
    },
  ]
</script>

<template>
  <Header />

  <div class="overflow-hidden flex mb-4">
    <OfferCard 
      v-for="(offer, index) in offers" 
      :key="index" 
      :pinned="offer.pinned" 
      :text="offer.text" 
      :icon="offer.icon" />
  </div>

  <div class="overflow-hidden flex gap-4 mt-6 pl-4">
    <Card>
      <div class="flex gap-3">
          <div class="bg-[#0098C9] rounded-full p-1">
            <Icon icon="carbon:analytics" :height="14" color="#fff" />
          </div>

          </div>
      <div class="flex mb-4 items-center">
        <div class="grow">
          <p class="text-[26px] font-medium text-white leading-7 mb-2">Yetirim<br /> Hesabi</p>
          <p class="text-xs">(Altin, gumus, Platin)</p>
        </div>
        <img :src="stat" class="h-25" />
      </div>

      <button class="w-full justify-between inline-flex rounded-xl border-[#37383C] border p-4 bg-[#121317]">
        <span class="text-white">Yatirim hesabi Olustur</span>
        <span>></span>
      </button>
    </Card>


    <Card>
      <button class="w-full justify-between inline-flex rounded-xl border-[#37383C] border p-6 bg-[#121317] grow">
        <span>Yatirim</span>
        <span>></span>
      </button>
    </Card>
  </div>

  <TransactionHistory :transactions="transactions" :loading="false" />


  <BottomNavBar />
</template>

