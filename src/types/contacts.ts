import { Ilink } from './organisationLabel';
import { IHotLine } from './hotLines';
import { HelpListData } from './helpList';
import { CommonType } from './common';

export interface ContactsComponentProps extends CommonType {
  links: Ilink[];
  hotLines: IHotLine[];
  helpList: HelpListData;
}
