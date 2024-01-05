export interface DonorProps {
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
