import { LangValueType } from './common';

export interface OurSupportComponentProps extends LangValueType {
  data?: OurSupportData[];
}

export interface OurSupportData {
  id: string;
  logo: string;
  name_en: string;
  name_uk: string;
  link: string;
}
