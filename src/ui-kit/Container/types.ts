import { WithChildren } from '../../types/helpers';

export enum POINTS {
  s = 1158, // 1128 + 30
  m = 1224, // 1194 + 30
  l = 1380, // 1350 + 30
  xl = 1470, // 1440 + 30
}

export interface IContainerProps extends WithChildren {
  point?: POINTS;
}
