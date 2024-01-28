import { CommonType } from './common';

export interface DonorProps extends CommonType {
  data: {
    text_en: string;
    text_uk: string;
    list: DonorItemProps[];
  };
}

export interface DonorItemProps {
  id: string;
  title_uk: string;
  description_uk: string;
  title_en: string;
  description_en: string;
}
