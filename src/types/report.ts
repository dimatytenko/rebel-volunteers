import { CommonType } from './common';

export interface ReportProps extends CommonType {
  data?: ReportData;
}

export interface ReportData {
  id: string;
  text_en: string;
  text_uk: string;
  photos: PhotoT[];
}

export interface PhotoT {
  id: string;
  image: string;
  report: {
    id: string;
    quantity?: number;
    title_en?: string;
    title_uk?: string;
  };
  title_en: string;
  title_uk: string;
}
