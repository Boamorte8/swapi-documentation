import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { SortPlanet, type IPlanet } from '@/models/planet'

export const usePlanetStore = defineStore('planet', () => {
  const allPlanets = ref<IPlanet[]>([])
  const searchByNameText = ref('')
  const loading = ref(false)
  const loaded = ref(false)
  const currentPage = ref(1);
  const sortPlanet = ref<SortPlanet>(SortPlanet.DEFAULT)

  const filteredPlanets = computed(() => allPlanets.value)


  const getPlanets = async (page = 1) => {
    loading.value = true;
    loaded.value = false;
    const response = await fetch(`https://swapi.dev/api/planets?page=${page}`);
    const responseData = await response.json();
    loaded.value = true;
    loading.value = false;
    if (!response.ok) {
      const error = new Error(responseData.message || 'Error getting planets');
      throw error;
    }

    if (page > 1) {
      allPlanets.value = allPlanets.value.concat(...responseData.results);
    } else {
      allPlanets.value = responseData.results;
    }
  }

  const getMorePlanets = async () => {
    currentPage.value += 1;
    await getPlanets(currentPage.value);
  }

  const getPlanet = (name: string) => filteredPlanets.value.find((planet) => planet.name === name);

  return { filteredPlanets, loading, loaded, searchByNameText, sortPlanet, getPlanet, getPlanets, getMorePlanets }
})
