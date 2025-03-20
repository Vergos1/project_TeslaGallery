export enum TeslaModelName {
  ModelS = 'Model S',
  Model3 = 'Model 3',
  ModelX = 'Model X',
  ModelY = 'Model Y'
}

export enum TeslaTagColor {
  Blue = 'blue',
  Red = 'red',
  White = 'white'
}

export interface TeslaModel {
  id: number
  name: TeslaModelName
  color: TeslaTagColor
  image: string
}
