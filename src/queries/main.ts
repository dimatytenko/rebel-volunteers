import { mainQueryList } from '../constants/api';
import { getQuery } from './hooks';

export const getTeamQuery = async () => await getQuery(mainQueryList.team());
export const getHeroQuery = async () => await getQuery(mainQueryList.hero());
export const getOurActivityQuery = async () => await getQuery(mainQueryList.ourActivity());
