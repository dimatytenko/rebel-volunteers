export interface SpeakAboutUsProps {
  data: SpeakAboutUsState[];
}

export interface SpeakAboutUsState {
  id: string;
  title: string;
  description?: string;
  img?: string;
  link?: string;
  textButton: string;
}
