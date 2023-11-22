export interface StyledIconProps {
  className?: string;
  type?: IconTypes;
  alt?: string;
  width?: string;
  height?: string;
}

export const iconTypesList = <const>['logo'];
export type IconTypes = (typeof iconTypesList)[number];
