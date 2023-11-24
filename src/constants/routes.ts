import { Route } from '../helpers/Route';

export const route = {
  main: Route.of({ path: '/' }),
  about: Route.of({ path: '/about' }),
  join: Route.of({ path: '/join' }),
  contacts: Route.of({ path: '/contacts' }),
  reports: Route.of({ path: '/reports' }),
  details: Route.of({ path: '/details' }),

  uikit: Route.of({ path: '/ui-kit' }),
};
