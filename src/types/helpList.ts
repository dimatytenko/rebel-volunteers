import { CommonType } from './common';

export interface HelpListProps extends CommonType {
  data: HelpListData;
}

export interface HelpListData {
  img: string;
  list: HelpListDataItem[];
}

interface HelpListDataItem {
  id: string;
  title: string;
  info: {
    en: string[];
    uk: string[];
  };
}
