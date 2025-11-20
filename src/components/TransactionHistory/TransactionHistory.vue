<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { Icon } from "@iconify/vue";


const props = defineProps({
  transactions: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
})


const formatAmount = (amount, options = {}) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return ''
  }

  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}


const getAmountClass = (transaction) => {
  return transaction.type === 'debit' ? 'text-[#FF4136]' : 'text-[#68A33E]'
}

</script>

<template>
  <div class="p-4">
    <div class="flex items-center gap-2  mb-4">
        <p class=" ">HESAP HAREKETLERI</p>
        <Icon icon="mingcute:arrow-right-line" />
    </div>

    <div v-if="loading" class="flex flex-col gap-6">
      <div v-for="n in 2" :key="n" class="animate-pulse gap-6">
        <div class="h-14 bg-[#272727] rounded"></div>
      </div>
    </div>

    <div v-else>
      <div v-if="transactions.length === 0" class="text-center py-8 text-gray-500">
        No transactions found.
      </div>

      <div v-else class="flex flex-col gap-6">
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
          class="flex justify-between items-center "
        >
            <div class="flex items-center gap-4">
                <img :src="transaction.image" class="h-14 rounded-full" />
                <div>
                    <p class="text-white font-medium text-base ">{{  transaction.title }}</p>
                    <p  class="text-xs">{{  transaction.description }}</p>
                </div>
            </div>
            <div>
                <p :class="[' text-right text-base font-bold', getAmountClass(transaction)]">{{ formatAmount(transaction.amount)}}</p>
                <p class="text-xs">{{ transaction.date }}</p>
            </div>
            
        </div>
      </div>

    </div>
  </div>
</template>
