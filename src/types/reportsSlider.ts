import { CommonType } from './common';

export interface ReportsSliderProps extends CommonType {
  title: string;
  data?: ReportsSliderState;
}

export interface ReportsSliderState {
  id: string;
  photo: {
    id: string;
    image: string;
  }[];
  video: {
    id: string;
    video_url: string;
  }[];
}
[];
