import { InputType } from './../../components/Input/type';
import { FormType } from './../../components/UniversalForm/types';
import type { ModalProps } from '../../components/UniversalModal/helper';
import type { FormProps } from '../../components/UniversalForm/types';
import type { CustomNavLinkProps } from '../../components/CustomNavLink/types';
import { createUserEmailPassword, logInByEmailCredentials, googleSignIn } from '../../firebase/auth';
import { defaultSVGs } from '../../assets/SVGs';

export const authNavLinkPropSet: CustomNavLinkProps[] = [
  {
    title: 'Sign Up email',
    className: 'auth__SignInEmailButton',
    path: '',
    onClick: () => {},
    children: defaultSVGs.signInSVG,
  },
  {
    title: 'Log In email',
    className: 'auth__LogInInEmailButton',
    path: '',
    onClick: () => {},
    children: defaultSVGs.mailLetterSVG,
  },
  {
    title: 'google',
    className: 'auth__GoogleButton',
    path: '/',
    onClick: googleSignIn,
    children: defaultSVGs.googleLogoSVG,
  },
];

export const authFormPropSet: { [key: string]: FormProps } = {
  SIGNInFormProps: {
    title: 'Sign Up to WanderLog',
    action: '/authorization',
    method: 'post',
    inputs: [
      {
        label: 'Email',
        id: 'email',
        type: 'email',
        placeHolder: 'Enter your email',
        name: 'email',
        required: true,
      },
      {
        label: 'Password',
        id: 'password',
        type: 'password',
        placeHolder: 'Create a password',
        name: 'password',
        required: true,
      },
      // {
      //   label: 'Confirm Password',
      //   id: 'password',
      //   type: 'password',
      //   placeHolder: 'Confirm your password',
      //   name: 'password',
      //   required: true,
      // },
      {
        id: 'formType',
        type: InputType.HIDDEN,
        value: FormType.SIGNUP,
        name: 'formType',
      },
    ],
    button: {
      text: 'Sign Up',
      clickHandler: () => {
        () => console.log('Sign Up button clicked');
      },
    },
  },
  logInFormProps: {
    title: 'Log In to WanderLog',
    action: '/authorization',
    method: 'post',
    inputs: [
      {
        label: 'Email',
        id: 'email',
        type: 'email',
        placeHolder: 'Enter your email',
        name: 'email',
        required: true,
      },
      {
        label: 'Password',
        id: 'password',
        type: 'password',
        placeHolder: 'Enter your password',
        name: 'password',
        required: true,
      },
      {
        id: 'formType',
        type: InputType.HIDDEN,
        value: FormType.LOGIN,
        name: 'formType',
      },
    ],
    button: {
      text: 'Log In',
      clickHandler: () => {
        () => console.log('Log In button clicked');
      },
    },
  },
};
