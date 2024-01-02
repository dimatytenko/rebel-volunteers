import { LangValueType } from './common';

export interface OurAtivityComponentProps extends LangValueType {
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
