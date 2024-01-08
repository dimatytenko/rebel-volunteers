import { CommonType } from './common';

export interface SpeakAboutUsProps extends CommonType {
  data: SpeakAboutUsState[];
}

export interface SpeakAboutUsState {
  id: string;
  title: string;
  description?: string;
  img?: string;
  link?: string;
  textButton: string;
}
