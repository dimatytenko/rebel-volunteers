import superagent from 'superagent';
import { SERVER_URL } from '../constants/env';

export const getQuery = (query: string) => {
  return superagent.get(`${SERVER_URL}/api${query}`);
};
