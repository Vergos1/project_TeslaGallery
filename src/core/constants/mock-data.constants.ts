import Model3Image from '@assets/images/model-3.png'
import ModelSImage from '@assets/images/model-s.png'
import ModelXImage from '@assets/images/model-x.png'
import ModelYImage from '@assets/images/model-y.png'
import { TeslaModel, TeslaModelName, TeslaTagColor } from '@core/types'

export const TeslaModelNamesList: TeslaModel[] = [
  {
    id: 0,
    name: TeslaModelName.ModelS,
    color: TeslaTagColor.Blue,
    image: ModelSImage
  },
  {
    id: 1,
    name: TeslaModelName.Model3,
    color: TeslaTagColor.Red,
    image: Model3Image
  },
  {
    id: 2,
    name: TeslaModelName.ModelX,
    color: TeslaTagColor.White,
    image: ModelXImage
  },
  {
    id: 3,
    name: TeslaModelName.ModelY,
    color: TeslaTagColor.White,
    image: ModelYImage
  }
]
