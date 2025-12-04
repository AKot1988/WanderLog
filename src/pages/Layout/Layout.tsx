import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import classes from './Layout.module.scss';
import { wonderHeaderProps } from '../../components/Header/helper'

const Layout = () => {
  return (
    <>
      <div className={classes.layout__container}>
        <Header {...wonderHeaderProps.guest} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
