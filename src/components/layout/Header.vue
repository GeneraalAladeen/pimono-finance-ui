<script setup>
  import IconButton from '@/components/IconButton'
</script>

<template>
  <header class="flex justify-between p-5">
    <div class="flex gap-2">
      <IconButton icon="mynaui:menu" :fill="true" />
      <IconButton icon="jam:messages" />
    </div>
    <div class="flex gap-2 items-end text-xs">
      <p class="py-3">Papara No: 122131373</p>
      <IconButton icon="fa7-regular:user-large" />
    </div>
  </header>


</template>