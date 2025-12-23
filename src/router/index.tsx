import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  adminUserRoutes,
  authorizedUserRoutes,
  commonUserRoutes,
} from './routes';
import { getUserData } from '../firebase/api';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { useContext } from 'react';
import type { RouteObject } from 'react-router-dom';
import { AUTH_USER_ROLE } from '../firebase/types';
import { Layout } from '../pages';

const createRoutesByRole = (userRole: 'guest' | 'authorized' | 'admin'): RouteObject[] => {
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
  const authContext = useContext(AuthContext);
    if (!authContext) return null;
    const { role, loading } = authContext;
    if (loading) return <div>Loading</div>;
    const appRoutes = createRoutesByRole(role ?? 'guest');
  console.log('App routes:', appRoutes);
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: appRoutes,
      loader: getUserData,
    },
  ]);

  return <RouterProvider router={router} />;
};;

export default MyAppRouter;
