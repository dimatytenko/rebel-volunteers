import { CommonType } from './common';

export interface DonorProps extends CommonType {
  data: {
    text: string;
    list: DonorItemProps[];
  };
}

export interface DonorItemProps {
  id: string;
  title: string;
  description: string;
}
