import { CommonType } from './common';

export interface HelpMoreProps extends CommonType {
  data: HelpMoreItem[];
}

export interface HelpMoreItem {
  id: string;
  title: string;
  description: string;
  img: string;
}
