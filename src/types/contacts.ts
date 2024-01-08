import { Ilink } from './organisationLabel';
import { DetailsBlockData } from './detailsBlock';
import { IHotLine } from './hotLines';
import { HelpListData } from './helpList';
import { CommonType } from './common';

export interface ContactsComponentProps extends CommonType {
  links: Ilink[];
  data: DetailsBlockData;
  hotLines: IHotLine[];
  helpList: HelpListData;
}
