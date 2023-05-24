import FilmIcon from '@/components/icons/IconFilm.vue';
import PlanetIcon from '@/components/icons/IconPlanet.vue';
import QuestionIcon from '@/components/icons/IconQuestion.vue';

export const icons = {
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

export const pages: IPage[] = [
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
