<script setup lang="ts">
import { useRouter } from 'vue-router';

import PlanetIcon from '../components/icons/IconPlanet.vue'
import QuestionIcon from '../components/icons/IconQuestion.vue'

const icons = {
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
  <header class="flex flex-col items-center text-white mb-16">
    <img alt="Star Wars logo" class="logo" src="@/assets/swlogo.webp" width="300" height="300" />

    <h1 class="text-4xl mb-7 font-bold">Star Wars Documentation</h1>

    <p class="text-lg">In this page you will find information about Star Wars</p>
  </header>

  <main class="flex flex-wrap gap-6 mx-10 justify-center">
    <article v-for="page in pages"
            :key="page.id"
            class="flex gap-5 cursor-pointer p-4 border rounded-2xl w-80"
            @click="onClick(page.link)">
      <component :is="icons[page.icon]" class="text-white h-7 w-7"></component>
      <div class="text-white">
        <h2 class="text-xl mb-4 font-medium">{{ page.title }}</h2>
        <p>{{ page.description }}</p>
      </div>
    </article>
  </main>
</template>
