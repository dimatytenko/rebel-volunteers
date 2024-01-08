import { CommonType } from './common';
import { Ilink } from './organisationLabel';
import { DetailsBlockData } from './detailsBlock';

export interface DetailsProps extends CommonType {
  links: Ilink[];
  data: DetailsBlockData;
}
