import { CommonType } from './common';

export interface DetailsBlockProps extends CommonType {
  data: DetailsBlockData;
}

export interface DetailsBlockData {
  img: string;
  data: DetailsBlockDataItem[];
}

export interface DetailsBlockDataItem {
  id: string;
  name: string;
  img: string;
  details: {
    prev?: string;
    number: string;
  }[];
}
