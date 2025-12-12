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

export const authFormPropSet: { [key: string]: { [key: string]: FormProps } } = {
  SIGNInFormProps: {
    data: {
      formType: 'signup',
      title: 'Sign Up to WanderLog',
      action: '/login',
      method: 'post',
      inputs: [
        {
          id: 'email',
          type: 'email',
          placeHolder: 'Enter your email',
          name: 'email',
          required: true,
        },
        {
          id: 'password',
          type: 'password',
          placeHolder: 'Enter your password',
          name: 'password',
          required: true,
        },
      ],
      button: {
        text: 'Log In',
        clickHandler: () => {
          () => console.log('Sign Up button clicked');
        },
      },
      redirect: '',
      // redirect: '/places',
    },
  },
  logInFormProps: {
    data: {
      formType: 'login',
      title: 'Log In to WanderLog',
      action: '/login',
      method: 'post',
      inputs: [
        // {
        //   id: 'email',
        //   type: 'email',
        //   placeHolder: 'Enter your email',
        //   name: 'email',
        //   required: true,
        // },
        // {
        //   id: 'password',
        //   type: 'password',
        //   placeHolder: 'Enter your password',
        //   name: 'password',
        //   required: true,
        // },
      ],
      button: {
        text: 'Log In',
        clickHandler: () => {
          () => console.log('Log In button clicked');
        },
      },
      redirect: '',
      // redirect: '/places',
    },
  },
};

// export const logInFormProps: FormProps = {
//   formType: 'login',
//   title: 'Log In to WanderLog',
//   action: '/login',
//   method: 'post',
//   inputs: [
//     {
//       id: 'email',
//       type: 'email',
//       placeHolder: 'Enter your email',
//       name: 'email',
//       required: true,
//     },
//     {
//       id: 'password',
//       type: 'password',
//       placeHolder: 'Enter your password',
//       name: 'password',
//       required: true,
//     },
//   ],
//   button: {
//     text: 'Log In',
//     clickHandler: () => {
//       () => console.log('Log In button clicked');
//     },
//   },
//   redirect: '/places',
// };
