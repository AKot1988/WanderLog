import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { wonderHeaderProps } from '../../components/Header/helper';
import classes from './Layout.module.scss';

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
