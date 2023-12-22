import { WithChildren } from '../../types/helpers';

export enum POINTS {
  s = 1160, // 1128 + 32
  m = 1224, // 1194 + 32
  l = 1382, // 1350 + 32
  xl = 1472, // 1440 + 32
}

export interface IContainerProps extends WithChildren {
  point?: POINTS;
}
