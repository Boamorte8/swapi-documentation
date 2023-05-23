<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { useFilmStore } from '@/stores/film';

const filmStore = useFilmStore();

filmStore.getFilms();
</script>

<template>
  <AppHeader />

  <BaseLayout class="pb-10">
    <BackButton to="/" />

    <h1 class="font-bold text-2xl text-center mb-6 text-yellow-500">Films</h1>
    <p class="text-center mb-10">These are all films that you can find on Start Wars</p>
    <section v-if="filmStore.loading" class="w-full p-4 h-40">
      <BaseSpinner />
    </section>
    <template v-else>
      <ul class="flex flex-wrap gap-4 justify-center mb-7">
        <li v-for="{ title, opening_crawl, episode_id, release_date, director } in filmStore.allFilms"
            class="border rounded-lg w-80 p-4"
            :key="episode_id">
          <dl class="flex flex-col items-center">
            <dd class="font-semibold text-yellow-600 mb-2">{{ title }}</dd>
            <dd class="italic mb-2">{{ release_date }}</dd>
            <dd class="italic mb-2">{{ director }}</dd>
            <dd class="mb-2">{{ opening_crawl }}</dd>
          </dl>
        </li>
      </ul>
    </template>
  </BaseLayout>
</template>
