export const colorOptions = <const>['primary', 'secondary', 'black', 'grey', 'greyHover', 'none', 'green'];
export type color = (typeof colorOptions)[number];

export const iconOptions = <const>[
  'mail',
  'instagram',
  'facebook',
  'arrow',
  'arrow-short',
  'arrow-long',
  'phone',
  'donate',
  'donate-eng',
  'donate-heart',
  'copy',
];
export type icon = (typeof iconOptions)[number];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fill?: color | 'none';
  fillChildren?: color | 'none';
  stroke?: color;
  strokeWidth?: number;
  viewBox?: string;
}
