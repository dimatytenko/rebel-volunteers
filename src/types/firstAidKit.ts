import { CommonType } from './common';

export interface IFirstAidKitProps extends CommonType {
  data: IFirstAidKit;
}

export interface IFirstAidKit {
  text: string;
  img: string;
  list: string[];
}
