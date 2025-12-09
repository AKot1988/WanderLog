import type { CustomNavLinkProps } from '../../components/CustomNavLink/types'
import { createUserEmailPassword, sinInByEmailCredentials, googleSignIn } from '../../firebase/auth';
import { defaultSVGs } from '../../assets/SVGs';

export const authPagePropsSet: CustomNavLinkProps[] = [
  {
    title: 'Sign In email',
    className: 'auth__SignInEmailButton',
    path: '/',
    onClick: () => {},
    // children: defaultSVGs.signInSVG,
    children: defaultSVGs.signInSVG,
  },
  {
    title: 'Log In email',
    className: 'auth__LogInInEmailButton',
    path: '/',
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