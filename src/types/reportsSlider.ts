import { CommonType } from './common';

export interface ReportsSliderProps extends CommonType {
  title: string;
  data: {
    galleryID: string;
    images: {
      id: string;
      img?: string;
      src?: string;
    }[];
  };
}
