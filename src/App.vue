<script setup>
  import Header from './components/layout/Header.vue'
  import BottomNavBar from './components/layout/BottomNavBar.vue'
  import OfferCard from '@/components/OfferCard'
  import TransactionHistory from '@/components/TransactionHistory'
  import Card from '@/components/common/Card.vue'
  import Carousel from '@/components/common/Carousel.vue'
  import PromoCard from '@/components/PromoCard'

  import superman from '@/assets/superman.svg';
  import garanti from '@/assets/garanti.png';

  import stat from '@/assets/stat.png';
  import web from '@/assets/web.png';

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

  <div class="overflow-hidden flex mb-4 pl-3">
    <Carousel :item-count="offers.length" :show-indicators="false">
      <OfferCard 
        v-for="(offer, index) in offers" 
        :key="index" 
        :pinned="offer.pinned" 
        :text="offer.text" 
        :icon="offer.icon" />
    </Carousel>
  </div>

  <div class="mt-6 pl-4">
    <Carousel :item-count="3">
        <Card>
          <div class="flex gap-3">
              <div class="bg-[#0098C9] rounded-full p-1">
                <Icon icon="carbon:analytics" :height="14" color="#fff" />
              </div>
    
              </div>
          <div class="flex mb-4 items-center">
            <div class="grow">
              <p class="text-[26px] font-medium text-white leading-7 mb-2">Yetirim<br /> Hesabi</p>
              <p class="text-xs text-[#6A6B6F]">(Altin, gumus, Platin)</p>
            </div>
            <img :src="stat" class="h-25" />
          </div>
    
          <button class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-4 bg-[#121317]">
            <span class="text-white">Yatirim hesabi Olustur</span>
            <Icon icon="tabler:chevron-right" color="#fff" />
          </button>
        </Card>

        <Card>
          <div class="flex gap-3">
              <div class="bg-[#0098C9] rounded-full p-1">
                <Icon icon="carbon:analytics" :height="14" color="#fff" />
              </div>
    
              </div>
          <div class="flex mb-4 items-center">
            <div class="grow">
              <p class="text-[26px] font-medium text-white leading-7 mb-2">Yetirim<br /> Hesabi</p>
              <p class="text-xs text-[#6A6B6F]">(Altin, gumus, Platin)</p>
            </div>
            <img :src="stat" class="h-25" />
          </div>
    
          <button class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-4 bg-[#121317]">
            <span class="text-white">Yatirim hesabi Olustur</span>
            <Icon icon="tabler:chevron-right" color="#fff" />
          </button>
        </Card>
         <Card>
          <div class="flex gap-3">
              <div class="bg-[#0098C9] rounded-full p-1">
                <Icon icon="carbon:analytics" :height="14" color="#fff" />
              </div>
    
              </div>
          <div class="flex mb-4 items-center">
            <div class="grow">
              <p class="text-[26px] font-medium text-white leading-7 mb-2">Yetirim<br /> Hesabi</p>
              <p class="text-xs text-[#6A6B6F]">(Altin, gumus, Platin)</p>
            </div>
            <img :src="stat" class="h-25" />
          </div>
    
          <button class="w-full justify-between items-center inline-flex rounded-xl border-[#37383C] border p-4 bg-[#121317]">
            <span class="text-white">Yatirim hesabi Olustur</span>
            <Icon icon="tabler:chevron-right" color="#fff" />
          </button>
        </Card>
    </Carousel>
  </div>

  <div class="gap-2 ">
    <div class="flex justify-between p-4">
      <div class="flex items-center gap-2 ">
          <p class="text-xs text-[#6A6B6F]">DAHA IYI BIR PAPARA DENEYIMI</p>
          <Icon icon="mingcute:arrow-right-line" />
      </div>
      <p class="text-[#DCA36C]">{{ currentPromoPage }} / 5</p>
    </div>
    <div class="overflow-hidden gap-2  flex mb-2 px-4">
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

