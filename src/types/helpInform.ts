import { CommonType } from './common';

export interface HelpInformProps extends CommonType {
  data: HelpInformItem[];
}

export interface HelpInformItem {
  id: string;
  title_uk: string;
  title_en: string;
  description_uk: string;
  description_en: string;
  img: string;
}
