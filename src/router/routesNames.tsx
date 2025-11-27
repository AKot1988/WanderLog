export const COMMON_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  AUTHORIZATION: '/authorization',
  NOT_FOUND: '/not-found',
} as const;

export const AUTH_USER_ROUTES = {
  WALL: '/wall',
  PLACES: '/places',
  PLACE: '/place',
  MAP: '/map',
  PROFILE: '/profile',
} as const;

export const ADMIN_ROUTES = {
  USERS: '/users',
  EVENTS: '/plases',
  SETTINGS: '/settings',
} as const;
