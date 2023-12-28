import { mainQueryList } from '../constants/api';
import { getQuery } from './hooks';

export const getTeamQuery = async () => await getQuery(mainQueryList.team());
