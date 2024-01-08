import { CommonType } from './common';

export interface HelpInformProps extends CommonType {
  data: HelpInformItem[];
}

export interface HelpInformItem {
  id: string;
  title: string;
  description: string;
  img: string;
}
