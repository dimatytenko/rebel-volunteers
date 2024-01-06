import { CommonType } from './common';

export interface OurSupportComponentProps extends CommonType {
  data?: OurSupportData[];
}

export interface OurSupportData {
  id: string;
  logo: string;
  name_en: string;
  name_uk: string;
  link: string;
}
