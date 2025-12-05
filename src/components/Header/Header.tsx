import type { FC } from 'react';
import type { HeaderProps } from './types.tsx';
import { wonderHeaderProps } from './helper.ts';
import { useState, useEffect } from 'react';
import { CustomNavLink } from '../index.tsx';
import { auth } from '../../firebase/auth.ts';
import { useNavigate } from 'react-router-dom';
import { defaultSVGs } from '../../assets/SVGs.ts'

import classes from './Header.module.scss';

const Header: FC<HeaderProps> = ({ logo, navMenuSet, avatarLink }) => {

  // const [user, setUser] = useState(auth.currentUser);
  // const [isWindowSmall, setIsWindowSmall] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 500) {
  //       setIsWindowSmall(true);
  //     } else {
  //       setIsWindowSmall(false);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setUser(auth.currentUser);
  // }, [auth.currentUser]);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>{logo}</h1>
          <div className={classes.header__content}>
            <nav className={classes.header__content__navContainer}>
              {navMenuSet.map((listItem) => (
                <CustomNavLink {...listItem} className={classes.header__content__navLink} key={listItem.title} />
              ))}
            </nav>
            <div className={classes.header_avatar}>
              {avatarLink ? <img className={classes.header__content__avatar} src={avatarLink} alt="User avatar" /> : defaultSVGs.userAstronaut}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
