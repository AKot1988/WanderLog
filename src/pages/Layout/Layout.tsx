import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { wonderHeaderProps } from '../../components/Header/helper';
import type { HeaderProps } from '../../components/Header/types';
import { auth } from '../../firebase/auth';
import { AuthUserRole } from '../../firebase/types';
import { useEffect, useState } from 'react';
import classes from './Layout.module.scss';

const Layout = () => {
  const [currentUser, setCurrentUser] = useState<AuthUserRole>('guest');
  let headerProps: HeaderProps = wonderHeaderProps['guest'];
  useEffect(() => {
    // тут треба додати сценарій перевірки юзера на адміна
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser('authorized');
        headerProps = wonderHeaderProps['authorized'];
        headerProps.avatarLink = user.photoURL || '';
      } else if (user?.id === 'admin-id') {
        setCurrentUser('admin');
        headerProps = wonderHeaderProps['admin'];
      } else {
        setCurrentUser('guest');
        headerProps = wonderHeaderProps['guest'];
      }
    });
    return () => unsubscribe();
  }, []);
  if (currentUser === 'admin') {
    headerProps = wonderHeaderProps['admin'];
  } else if (currentUser === 'authorized') {
    headerProps = wonderHeaderProps['authorized'];
  } else {
    headerProps = wonderHeaderProps['guest'];
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
