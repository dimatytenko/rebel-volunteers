import { CommonType } from './common';

export interface HelpMoreProps extends CommonType {
  data: HelpMoreItem[];
}

export interface HelpMoreItem {
  id: string;
  title_uk: string;
  title_en: string;
  description_uk: string;
  description_en: string;
  img: string;
}
