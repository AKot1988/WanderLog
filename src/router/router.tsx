import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  adminUserRoutes,
  authorizedUserRoutes,
  commonUserRoutes,
} from './routes';
import type { RouteObject } from 'react-router-dom';
import { AUTH_USER_ROLE } from '../firebase/auth';
import { Layout } from '../pages';

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

const MyAppRouter = () => {
  const appRoutes = createRoutesByRole();
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: appRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyAppRouter;
