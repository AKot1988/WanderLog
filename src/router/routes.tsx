import { COMMON_ROUTES, AUTH_USER_ROUTES, ADMIN_ROUTES } from './routesNames';
import type { FC } from 'react';

export type RouteObject = {
  path: string;
  component: FC;
  children?: RouteObject[];
  action?: Function;
  // loader?: LoaderFunction або boolean;
};

// -----------------------------------------------
// DELETE THIS Component

type MockComponentProps = {
  text: string;
};

export const MockComponent: FC<MockComponentProps> = ({ text }) => {
  return <h1>{text}</h1>;
};
// -----------------------------------------------

export const adminUserRoutes: RouteObject[] = [
  {
    path: ADMIN_ROUTES.USERS,
    component: () => <MockComponent text={ADMIN_ROUTES.USERS} />,
  },
  {
    path: ADMIN_ROUTES.EVENTS,
    component: () => <MockComponent text={ADMIN_ROUTES.EVENTS} />,
  },
  {
    path: ADMIN_ROUTES.SETTINGS,
    component: () => <MockComponent text={ADMIN_ROUTES.SETTINGS} />,
  },
];

export const authorizedUserRoutes: RouteObject[] = [
  {
    path: AUTH_USER_ROUTES.WALL,
    component: () => <MockComponent text={AUTH_USER_ROUTES.WALL} />,
  },
  {
    path: AUTH_USER_ROUTES.PLACES,
    component: () => <MockComponent text={AUTH_USER_ROUTES.PLACES} />,
  },
  {
    path: AUTH_USER_ROUTES.PLACE,
    component: () => <MockComponent text={AUTH_USER_ROUTES.PLACE} />,
  },
  {
    path: AUTH_USER_ROUTES.PROFILE,
    component: () => <MockComponent text={AUTH_USER_ROUTES.PROFILE} />,
  },
];

export const commonUserRoutes: RouteObject[] = [
  {
    path: COMMON_ROUTES.AUTHORIZATION,
    component: () => <MockComponent text={COMMON_ROUTES.AUTHORIZATION} />,
  },
  {
    path: COMMON_ROUTES.ABOUT,
    component: () => <MockComponent text={COMMON_ROUTES.ABOUT} />,
  },
  {
    path: COMMON_ROUTES.CONTACTS,
    component: () => <MockComponent text={COMMON_ROUTES.CONTACTS} />,
  },
  {
    path: COMMON_ROUTES.NOT_FOUND,
    component: () => <MockComponent text={COMMON_ROUTES.CONTACTS} />,
  },
];
