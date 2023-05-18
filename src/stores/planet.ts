import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { SortPlanet, type IPlanet } from '@/models/planet'

const sortMethods = {
  [SortPlanet.DEFAULT]: (planets: IPlanet[]) => planets,
  [SortPlanet.NAME]: (planets: IPlanet[]) => planets.sort((a, b) => a.name <= b.name ? -1 : 1),
  [SortPlanet.DIAMETER]: (planets: IPlanet[]) => planets.sort((a, b) => a.diameter - b.diameter),
  [SortPlanet.POPULATION]: (planets: IPlanet[]) => planets.sort((a, b) => a.population - b.population),
}

export const usePlanetStore = defineStore('planet', () => {
  const allPlanets = ref<IPlanet[]>([])
  const searchByNameText = ref('')
  const loading = ref(false)
  const currentPage = ref(1);
  const sortPlanet = ref<SortPlanet>(SortPlanet.DEFAULT)


  const filteredPlanets = computed(() => {
    const filtered = searchByNameText.value
      ? allPlanets.value.filter(
        (planet) => planet.name.toLowerCase().includes(searchByNameText.value.toLocaleLowerCase())
      )
      : allPlanets.value;
    return sortMethods[sortPlanet.value](filtered);
  })

  const getPlanets = async (page = 1) => {
    loading.value = true;
    const response = await fetch(`https://swapi.dev/api/planets?page=${page}`);
    const responseData = await response.json();
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

  return { filteredPlanets, loading, searchByNameText, sortPlanet, getPlanet, getPlanets, getMorePlanets }
})
