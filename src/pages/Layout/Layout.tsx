import { Outlet, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { wonderHeaderProps } from '../../components/Header/helper';
import type { HeaderProps } from '../../components/Header/types';
import { auth } from '../../firebase/auth';
import { readUserData, getUserData } from '../../firebase/api';
import { AuthUserRole } from '../../firebase/types';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { useEffect, useState, useContext } from 'react';
import classes from './Layout.module.scss';

export const LayoutLoaderFunc = async (): Promise<any> => {
  const userData = await getUserData();
  return userData;
};

const Layout = () => {
  const userData = useLoaderData();
  console.log(userData);
  const authContext = useContext(AuthContext);
  let headerProps: HeaderProps = wonderHeaderProps[`${authContext?.role}`];

  if (userData) {
    headerProps.avatarLink = userData.photoURL;
  } else if (userData === null) {
    headerProps.avatarLink = authContext?.currentUser?.photoURL as string;
  }
  return (
    <>
      <div className={classes.layout__container}>
        <Header {...headerProps} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
