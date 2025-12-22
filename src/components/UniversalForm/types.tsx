import { InputElementProps } from '../Input/type';
import { COMMON_ROUTES, AUTH_USER_ROUTES, ADMIN_ROUTES } from '../../router/routesNames';

export const Method = {
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
} as const;

export const FormType = {
  SIGNUP: 'signup',
  LOGIN: 'login',
} as const;

export type FormProps = {
  formType?: keyof typeof FormType;
  title: string;
  action: keyof typeof COMMON_ROUTES | keyof typeof AUTH_USER_ROUTES | keyof typeof ADMIN_ROUTES | string;
  method: (typeof Method)[keyof typeof Method];
  inputs: InputElementProps[];
  button: {
    text: string;
    clickHandler?: () => void;
  };
  redirect?: keyof typeof COMMON_ROUTES | keyof typeof AUTH_USER_ROUTES | keyof typeof ADMIN_ROUTES | string;
};