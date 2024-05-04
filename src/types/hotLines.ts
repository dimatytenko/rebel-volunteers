import { CommonType } from './common';

export interface HotlinesProps extends CommonType {
  list: IHotLine[];
}
export interface IHotLine {
  id: string;
  title: string;
  img: string;
  info: {
    en: string[];
    uk: string[];
  };
}
