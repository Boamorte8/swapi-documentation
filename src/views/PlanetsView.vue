<script setup lang="ts">
import { RouterLink } from 'vue-router';

import AppHeader from '@/components/AppHeader.vue';
import PlanetsFilters from '@/components/PlanetsFilters.vue';
import { usePlanetStore } from '@/stores/planet';

const planetStore = usePlanetStore();

planetStore.getPlanets();
</script>

<template>
  <AppHeader />

  <BaseLayout class="pb-10">
    <BackButton to="/" />

    <h1 class="font-bold text-2xl text-center mb-6 text-yellow-500">Planets</h1>
    <p class="text-center mb-10">These are planets that you can find on Start Wars</p>
    <section v-if="planetStore.loading" class="w-full p-4 h-40">
      <BaseSpinner />
    </section>
    <template v-else>
      <PlanetsFilters />

      <section class="flex flex-wrap gap-4 justify-center mb-7">
        <RouterLink v-for="{ name } in planetStore.filteredPlanets"
            class="border rounded-lg w-64 p-4"
            :to="`/planet/${name}`"
            :key="name">
          {{ name }}
        </RouterLink>
      </section>

      <section class="flex justify-center">
        <button class="text-yellow-500 font-semibold hover:underline" @click="planetStore.getMorePlanets()">
          Load more
        </button>
      </section>
    </template>
  </BaseLayout>
</template>
