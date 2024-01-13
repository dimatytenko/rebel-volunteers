import { reportQueryList } from '../constants/api';
import { getQuery } from './hooks';

export const getOveralQuery = async () => await getQuery(reportQueryList.overal());
export const getPhotoVideoQuery = async () => await getQuery(reportQueryList.photoVideo());
export const getNewsQuery = async () => await getQuery(reportQueryList.news());
export const getThanksQuery = async () => await getQuery(reportQueryList.thanks());
export const getChevronsQuery = async () => await getQuery(reportQueryList.chevrons());
