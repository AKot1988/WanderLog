import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  adminUserRoutes,
  authorizedUserRoutes,
  commonUserRoutes,
} from './routes';
import { auth } from '../firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import type { RouteObject } from 'react-router-dom';
import { AUTH_USER_ROLE } from '../firebase/types';
import { Layout } from '../pages';

const createRoutesByRole = (userRole: any): RouteObject[] => {
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
  console.log(auth.currentUser);
  const role = auth.currentUser ? AUTH_USER_ROLE.AUTHORIZED : AUTH_USER_ROLE.GUEST;
  // console.log('Initial role:', role);
  const [currentRole, setRole] = useState<any>(role);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      currentUser ? setRole(AUTH_USER_ROLE.AUTHORIZED) : setRole(AUTH_USER_ROLE.GUEST);
      // console.log('Auth state changed, current role:', currentRole);
    });

    return () => unsubscribe();
  }, []);

  const appRoutes = createRoutesByRole(currentRole);
  console.log('App routes:', appRoutes);
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
