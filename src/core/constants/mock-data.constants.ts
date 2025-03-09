import Model3Image from '@assets/images/model-3.png'
import ModelSImage from '@assets/images/model-s.png'
import ModelXImage from '@assets/images/model-x.png'
import ModelYImage from '@assets/images/model-y.png'
import { TeslaModel, TeslaTagColor } from '@core/types'

export const teslaModelsList = [
  {
    name: TeslaModel.ModelS,
    color: TeslaTagColor.Blue,
    image: ModelSImage
  },
  {
    name: TeslaModel.Model3,
    color: TeslaTagColor.Red,
    image: Model3Image
  },
  {
    name: TeslaModel.ModelX,
    color: TeslaTagColor.White,
    image: ModelXImage
  },
  {
    name: TeslaModel.ModelY,
    color: TeslaTagColor.White,
    image: ModelYImage
  }
]
