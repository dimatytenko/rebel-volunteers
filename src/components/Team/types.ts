import { LangValueType } from '../../types/common';

export interface TeamMemberT {
  name_en?: string;
  name_uk?: string;
  role_en?: string;
  role_uk?: string;
  image_data: string;
  insta_link?: string;
  nickname?: string;
  id: string;
}

export interface TeamProps extends LangValueType {
  team: TeamMemberT[];
}

export interface TeamMemberProps extends LangValueType {
  member: TeamMemberT;
}
