export enum SortPlanet {
  DEFAULT = 'default',
  NAME = 'name',
  DIAMETER = 'diameter',
  POPULATION = 'population',
}

export interface IPlanet {
  name: string;
  climate: string;
  diameter: number;
  population: number;
  orbital_period: number;
  rotation_period: number;
}
