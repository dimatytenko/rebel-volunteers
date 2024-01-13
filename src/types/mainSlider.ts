import { CommonType } from './common';

export interface MainSliderSectionProps extends CommonType {
  title: string;
  data?: IData;
  height: number;
}

export interface IData {
  galleryID: string;
  images: {
    id: string;
    image: string;
  }[];
}
