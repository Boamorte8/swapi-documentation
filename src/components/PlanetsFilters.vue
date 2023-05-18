<script setup lang="ts">
import { SortPlanet } from '@/models/planet';
import { usePlanetStore } from '@/stores/planet';

const planetStore = usePlanetStore();
</script>

<template>
  <section class="flex justify-center gap-6 p-2 mb-10">
    <div class="flex flex-col">
      <label for="search" class="mb-2 text-yellow-500">Search by name</label>
      <input type="text"
        id="search"
        name="search"
        placeholder="Search by name"
        class="p-2 bg-slate-900 border border-white rounded-lg"
        v-model="planetStore.searchByNameText">
    </div>

    <div class="flex flex-col">
      <label for="sort" class="mb-2 text-yellow-500">Sort by</label>
      <select name="sort" id="sort"
        class="p-2 bg-slate-900 border border-white rounded-lg"
        v-model="planetStore.sortPlanet">
        <option :value="SortPlanet.DEFAULT">Default</option>
        <option :value="SortPlanet.NAME">Name</option>
        <option :value="SortPlanet.DIAMETER">Diameter</option>
        <option :value="SortPlanet.POPULATION">Population</option>
      </select>
    </div>
  </section>
</template>
