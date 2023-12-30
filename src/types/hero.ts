import { LangValueType } from './common';

export interface HeroT {
  id: 'string';
  name: 'hero';
  photos: PhotoT[];
  text_en: string;
  text_uk: string;
}

export interface PhotoT {
  id: string;
  image: string;
}

export interface HeroComponentProps extends LangValueType {
  data?: HeroT;
}
