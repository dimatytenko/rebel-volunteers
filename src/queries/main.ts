import { mainQueryList } from '../constants/api';
import { getQuery } from './hooks';

export const getTeamQuery = async () => await getQuery(mainQueryList.team());
export const getHeroQuery = async () => await getQuery(mainQueryList.hero());
export const getOurActivityQuery = async () => await getQuery(mainQueryList.ourActivity());
export const getCollectionQuery = async () => await getQuery(mainQueryList.colection());
export const getMerchQuery = async () => await getQuery(mainQueryList.merch());
export const getSupportQuery = async () => await getQuery(mainQueryList.support());
export const getReportsQuery = async () => await getQuery(mainQueryList.reports());
export const getQuickDonateQuery = async () => await getQuery(mainQueryList.donate());
