<script setup lang="ts">
import { RouterLink } from 'vue-router';

import ArrowLeftIcon from './icons/IconArrowLeft.vue';

defineProps(['to'])
</script>

<template>
  <RouterLink class="flex gap-2 items-center text-yellow-500 hover:underline" :to="to">
    <ArrowLeftIcon class="h-6 w-6" />
    <span>Back</span>
  </RouterLink>
</template>
