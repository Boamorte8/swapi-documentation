<script setup lang="ts">
import { useRouter } from 'vue-router';

import FilmIcon from '@/components/icons/IconFilm.vue'
import PlanetIcon from '@/components/icons/IconPlanet.vue'
import QuestionIcon from '@/components/icons/IconQuestion.vue'

const icons = {
  film: FilmIcon,
  planet: PlanetIcon,
  question: QuestionIcon,
};

type IconType = keyof typeof icons;

interface IPage {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

const pages: IPage[] = [
  {
    id: 1,
    icon: 'film',
    title: 'Films',
    description: 'All information about Star Wars films',
    link: '/films',
  },
  {
    id: 2,
    icon: 'planet',
    title: 'Planets',
    description: 'All information about Star Wars planets',
    link: '/planets',
  },
  {
    id: 0,
    icon: 'question',
    title: 'Questions',
    description: 'Answers to questions',
    link: '/questions',
  },
];

const router = useRouter();


const onClick = (route: string) => {
  router.push(route);
}
</script>

<template>
  <header class="flex flex-col items-center text-white mb-16 px-4">
    <img alt="Star Wars logo" src="@/assets/swlogo.webp" width="300" height="300" />

    <h1 class="text-4xl mb-7 font-bold">Star Wars Documentation</h1>

    <p class="text-lg">In this page you will find information about Star Wars</p>
  </header>

  <main class="flex flex-wrap gap-6 mx-10 justify-center mb-10">
    <article v-for="page in pages"
            :key="page.id"
            class="flex gap-4 cursor-pointer p-4 border rounded-2xl w-80"
            @click="onClick(page.link)">
      <component :is="icons[page.icon]" class="text-white h-7 w-7 mt-1"></component>
      <div class="text-white">
        <h2 class="text-xl mb-4 font-medium">{{ page.title }}</h2>
        <p>{{ page.description }}</p>
      </div>
    </article>
  </main>

  <footer class="text-white text-center">Made by <a href="https://boamorte.dev" target="_blank" rel="noopener" class="text-yellow-600">Esteban Salazar Zapata</a></footer>
</template>
