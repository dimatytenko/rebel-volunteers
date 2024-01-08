import { CommonType } from './common';

export interface Ilink {
  id: string;
  href: string;
  text: string;
}

export interface OrganisationLabelProps extends CommonType {
  links: Ilink[];
}
