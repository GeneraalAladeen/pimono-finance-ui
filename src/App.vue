<script setup>
  import Header from './components/layout/Header.vue'
  import OfferCard from '@/components/OfferCard'

  import superman from '@/assets/superman.svg';


  const offers = [
    {
      icon: superman,
      text:'Papara Sticker Card',
      pinned: true
    },
    {
      icon: superman,
      text:'Papara Superman Card',
      pinned: false
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

  <div class="overflow-hidden flex">
    <OfferCard 
      v-for="(offer, index) in offers" 
      :key="index" 
      :pinned="offer.pinned" 
      :text="offer.text" 
      :icon="offer.icon" />
  </div>



</template>

