import { defineStore } from 'pinia'
import { ref } from 'vue'

import { IFilm } from '@/models/film'

export const useFilmStore = defineStore('film', () => {
  const allFilms = ref<IFilm[]>([])
  const loading = ref(false)

  const getFilms = async (page = 1) => {
    if (allFilms.value.length === 0) {
      loading.value = true;
      const response = await fetch(`https://swapi.dev/api/films?page=${page}`);
      const responseData = await response.json();
      loading.value = false;
      if (!response.ok) {
        const error = new Error(responseData.message || 'Error getting films');
        throw error;
      }

      allFilms.value = responseData.results;
    }
  }

  return { allFilms, loading, getFilms }
})
