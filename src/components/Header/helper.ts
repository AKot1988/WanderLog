import type { HeaderPropsSET } from "./types"
import { COMMON_ROUTES, AUTH_USER_ROUTES, ADMIN_ROUTES } from '../../router/routesNames';
import { signOutUser } from '../../firebase/auth';

export const wonderHeaderProps: HeaderPropsSET = {
  guest: {
    logo: 'WONDERlog',
    navMenuSet: [
      {
        title: 'проєкт',
        path: COMMON_ROUTES.ABOUT,
        className: 'header_link',
      },
      {
        title: 'авторизація',
        path: COMMON_ROUTES.AUTHORIZATION,
        className: 'header_link',
      },
      {
        title: 'контакти',
        path: COMMON_ROUTES.CONTACTS,
        className: 'header_link',
      },
    ],
    avatarLink: undefined,
  },
  authorized: {
    logo: 'WONDERlog',
    navMenuSet: [
      {
        title: 'стіна',
        path: AUTH_USER_ROUTES.WALL,
        className: 'header_link',
      },
      {
        title: 'мої місця',
        path: AUTH_USER_ROUTES.PLACES,
        className: 'header_link',
      },
      {
        title: 'мапа',
        path: AUTH_USER_ROUTES.MAP,
        className: 'header_link',
      },
      {
        title: 'профіль',
        path: AUTH_USER_ROUTES.PROFILE,
        className: 'header_link',
      },
      {
        title: 'вихід',
        path: COMMON_ROUTES.HOME,
        className: 'header_link',
        onClick: () => {
          signOutUser();
        },
      },
    ],
    avatarLink: '',
  },
  admin: {
    logo: 'WONDERlog',
    navMenuSet: [
      {
        title: 'стіна',
        path: AUTH_USER_ROUTES.WALL,
        className: 'header_link',
      },
      {
        title: 'мої місця',
        path: AUTH_USER_ROUTES.PLACES,
        className: 'header_link',
      },
      {
        title: 'мапа',
        path: AUTH_USER_ROUTES.MAP,
        className: 'header_link',
      },
      {
        title: 'профіль',
        path: AUTH_USER_ROUTES.PROFILE,
        className: 'header_link',
      },
      {
        title: 'вихід',
        path: AUTH_USER_ROUTES.LOGOUT,
        className: 'header_link',
      },
    ],
  },
};

