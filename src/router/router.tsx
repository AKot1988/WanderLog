import { createBrowserRouter } from 'react-router';
import {
  adminUserRoutes,
  authorizedUserRoutes,
  commonUserRoutes,
  MockComponent,
} from './routes';
import type { RouteObject } from 'react-router-dom';
import { AUTH_USER_ROLE } from '../firebase/auth';

const checkUserRole = (): string => {
  return AUTH_USER_ROLE.GUEST;
};

const createRoutesByRole = (): RouteObject[] => {
  const userRole = checkUserRole();

  switch (userRole) {
    case AUTH_USER_ROLE.GUEST:
      return [...commonUserRoutes];
    case AUTH_USER_ROLE.AUTHORIZED:
      return [...commonUserRoutes, ...authorizedUserRoutes];
    case AUTH_USER_ROLE.ADMIN:
      return [...adminUserRoutes, ...commonUserRoutes];
    default:
      return [...commonUserRoutes];
  }
};

const appRouter = () => {
  const appRoutes = createRoutesByRole();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MockComponent text="Hyi" />,
      children: appRoutes,
    },
  ]);

  return router;
};

export const Router = appRouter();
