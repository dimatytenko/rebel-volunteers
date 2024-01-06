import { CommonType } from './common';

export interface OurAtivityComponentProps extends CommonType {
  data?: OurAtivityProps;
}

export interface OurAtivityProps {
  id: string;
  photos: {
    id: string;
    image: string;
  }[];
  text: {
    id: string;
    text_en: string;
    text_uk: string;
  }[];
}
