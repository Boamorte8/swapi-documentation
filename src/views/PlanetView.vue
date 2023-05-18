<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { usePlanetStore } from '@/stores/planet';

const props = defineProps(['name'])
const planetStore = usePlanetStore();

const planet = planetStore.getPlanet(props.name);

</script>

<template>
  <AppHeader />
  <main class="text-white max-w-5xl mx-auto px-5">
    <BackButton to="/planets" />

    <h1 class="font-bold text-2xl text-center mb-6 text-yellow-500">Planet: {{ name }}</h1>
    <p class="text-center mb-10">Details about the planet</p>
    <dl class="flex flex-col items-center">
      <dt>Name</dt>
      <dd>{{ planet?.name }}</dd>

      <dt>Climate</dt>
      <dd>{{ planet?.climate }}</dd>

      <dt>Diameter</dt>
      <dd>{{ planet?.diameter }}</dd>

      <dt>Population</dt>
      <dd>{{ planet?.population }}</dd>

      <dt>Orbital period</dt>
      <dd>{{ planet?.orbital_period }}</dd>

      <dt>Rotation period</dt>
      <dd>{{ planet?.rotation_period }}</dd>
    </dl>
  </main>
</template>

<style scoped>
dt {
  @apply font-semibold text-yellow-600
}

dd:not(:last-child) {
  @apply mb-5
}
</style>
