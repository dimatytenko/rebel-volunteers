export interface ReportsSliderProps {
  title: string;
  data: {
    galleryID: string;
    images: {
      id: string;
      img?: string;
      src?: string;
    }[];
  };
}
