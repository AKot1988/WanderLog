import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import classes from './Layout.module.scss';
import { wonderHeaderProps } from '../../components/Header/helper'

const Layout = () => {
  return (
    <>
      <div className={classes.layout__container}>
        <Header {...wonderHeaderProps.guest} />
        <div className={classes.layout__container__content__container}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
