import { CommonType } from './common';

export interface MainSliderSectionProps extends CommonType {
  title: string;
  data: {
    galleryID: string;
    images: {
      id: string;
      img: string;
    }[];
  };
  height: number;
}
