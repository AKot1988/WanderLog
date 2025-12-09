import { COMMON_ROUTES, AUTH_USER_ROUTES, ADMIN_ROUTES } from './routesNames';
import { AuthorizationPage } from '../pages';
import type { FC } from 'react';
import type { RouteObject } from "react-router-dom"
import { Home } from '../pages'


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
    element: <MockComponent text={ADMIN_ROUTES.USERS} />,
  },
  {
    path: ADMIN_ROUTES.EVENTS,
    element: <MockComponent text={ADMIN_ROUTES.EVENTS} />,
  },
  {
    path: ADMIN_ROUTES.SETTINGS,
    element: <MockComponent text={ADMIN_ROUTES.SETTINGS} />,
  },
];

export const authorizedUserRoutes: RouteObject[] = [
  {
    path: AUTH_USER_ROUTES.WALL,
    element: <MockComponent text={AUTH_USER_ROUTES.WALL} />,
  },
  {
    path: AUTH_USER_ROUTES.PLACES,
    element: <MockComponent text={AUTH_USER_ROUTES.PLACES} />,
  },
  {
    path: AUTH_USER_ROUTES.PLACE,
    element: <MockComponent text={AUTH_USER_ROUTES.PLACE} />,
  },
  {
    path: AUTH_USER_ROUTES.PROFILE,
    element: <MockComponent text={AUTH_USER_ROUTES.PROFILE} />,
  },
];


export const commonUserRoutes: RouteObject[] = [
  {
    path: COMMON_ROUTES.AUTHORIZATION,
    Component: AuthorizationPage,
  },
  {
    path: COMMON_ROUTES.ABOUT,
    element: <MockComponent text={COMMON_ROUTES.ABOUT} />,
  },
  {
    path: COMMON_ROUTES.CONTACTS,
    element: <MockComponent text={COMMON_ROUTES.CONTACTS} />,
  },
  {
    path: COMMON_ROUTES.NOT_FOUND,
    element: <MockComponent text={COMMON_ROUTES.NOT_FOUND} />,
  },
];
