import type { FC } from 'react';
import { googleSignIn } from '../../firebase/auth';
import { CustomNavLink } from '../../components';
import { authPagePropsSet } from './helper';
import classes from './Authorization.module.scss';

const AuthorizationPage: FC<any> = () => {
  return (
    <>
      <div className={classes.auth}>
        {authPagePropsSet.map((linkProps) => (
          <CustomNavLink key={linkProps.title + linkProps.className} {...linkProps} className={classes[linkProps.className]} />
        ))}
      </div>
    </>
  );
};
export default AuthorizationPage;
