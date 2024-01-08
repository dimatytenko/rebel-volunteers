import { CommonType } from './common';

export interface BlockListsProps extends CommonType {
  title: string;
  list: {
    id: string;
    img: string;
    title: string;
    list: string[];
  }[];
}
