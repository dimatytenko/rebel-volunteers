export interface PassedProps {
  data: PassedItem[];
}

interface PassedItem {
  id: string;
  title?: string;
  subtitle?: string;
  img?: string;
  count?: number;
  descr?: string;
}
