import { CommonType } from './common';

export interface IFirstAidKitProps extends CommonType {
  data: IFirstAidKit;
}

export interface IFirstAidKit {
  text_uk: string;
  text_en: string;
  img: string;
  list: {
    uk: string[];
    en: string[];
  };
}
