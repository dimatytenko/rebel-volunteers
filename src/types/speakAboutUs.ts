import { CommonType } from './common';

export interface SpeakAboutUsProps extends CommonType {
  data?: SpeakAboutUsState[];
}

export interface SpeakAboutUsState {
  id: string;
  title_uk: string;
  title_en: string;
  text_en?: string;
  text_uk?: string;
  image?: string;
  news_url?: string;
  // textButton: string;
}
