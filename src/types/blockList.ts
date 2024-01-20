import { CommonType } from './common';

export interface BlockListsProps extends CommonType {
  title: string;
  list?: IList[];
  img: string[];
}

export interface IList {
  id: string;
  title_uk: string;
  title_en: string;
  items: {
    id: string;
    title_uk: string;
    title_en: string;
    quantity: number;
  }[];
}
