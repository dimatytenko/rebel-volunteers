export interface HelpListProps {
  data: HelpListData;
}

export interface HelpListData {
  img: string;
  list: HelpListDataItem[];
}

interface HelpListDataItem {
  id: string;
  title: string;
  info: string[];
}
