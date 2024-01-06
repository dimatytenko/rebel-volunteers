import { LangValueType } from './common';

export interface MerchProps extends LangValueType {
  data?: MerchData;
}

export interface MerchData {
  id: string;
  photos: {
    id: string;
    image: string;
  }[];
  text_en: string;
  text_uk: string;
}
