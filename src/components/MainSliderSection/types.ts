export interface MainSliderSectionProps {
  title: string;
  data: {
    galleryID: string;
    images: {
      id: string;
      img: string;
    }[];
  };
  height: number;
}
