import { CommonType } from './common';

export interface CollectionComponentProps extends CommonType {
  data?: CollectionT;
}

export interface CollectionT {
  id: string;
  donata_link: string;
  goal_en: string;
  goal_uk: string;
  text_en: string;
  text_uk: string;
  photos: {
    id: string;
    image: string;
  }[];
}
