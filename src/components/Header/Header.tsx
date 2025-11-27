import type { FC } from "react";
import type { HeaderProps } from "./types.tsx";

import { useState, useEffect } from "react";
import { CustomNavLink } from "../index.tsx";
import classes from "./Header.module.scss";
import { auth } from "../../firebase/auth.ts";
import { useNavigate } from "react-router-dom";


const Header: FC<HeaderProps> = ({
  logo,
  navMenu,
  onClick = () => {},
  avatarLink,
}) => {
  const [user, setUser] = useState(auth.currentUser);
  const [isWindowSmall, setIsWindowSmall] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setIsWindowSmall(true);
      } else {
        setIsWindowSmall(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  return (
    <>
      {isWindowSmall ? (
        <div className={classes.container}>
          <header className={classes.header}>
            <img src={logo} alt="logo" className={classes.headerLogo} />
            <div className={classes.headerNav}>
              <nav className={classes.headerNavMenu}>
                {navMenu.map((item, index) => (
                  <CustomNavLink
                    key={index}
                    title={item.title}
                    path={item.path}
                    className={classes.headerNavItem}
                  />
                ))}
              </nav>
              <div className={classes.avatarLogButtonSection}>
                {avatarLink ? (
                  <img
                    src={avatarLink as string}
                    alt="user"
                    className={classes.headerNavUserLogo}
                    onClick={() => navigate("/profile")}
                  />
                ) : (
                  auth.currentUser && (
                    <img
                      src={user?.photoURL as string}
                      alt="user"
                      className={classes.headerNavUserLogo}
                      onClick={() => navigate("/profile")}
                    />
                  )
                )}
                {auth.currentUser ? (
                  <CustomNavLink
                    title={"LogOut"}
                    path="/"
                    className={classes.headerNavButton}
                    onClick={onClick}
                  />
                ) : (
                  <CustomNavLink
                    title={"Login"}
                    path="/login"
                    className={classes.headerNavButton}
                    onClick={onClick}
                  />
                )}
              </div>
            </div>
          </header>
        </div>
      ) : (
        <div className={classes.container}>
          <header className={classes.header}>
            <img src={logo} alt="logo" className={classes.headerLogo} />
            <div className={classes.headerNav}>
              <nav className={classes.headerNavMenu}>
                {navMenu.map((item, index) => (
                  <CustomNavLink
                    key={index}
                    title={item.title}
                    path={item.path}
                    className={classes.headerNavItem}
                  />
                ))}
              </nav>
              {avatarLink ? (
                <img
                  src={avatarLink as string}
                  alt="user"
                  className={classes.headerNavUserLogo}
                  onClick={() => navigate("/profile")}
                />
              ) : (
                auth.currentUser && (
                  <img
                    src={user?.photoURL as string}
                    alt="user"
                    className={classes.headerNavUserLogo}
                    onClick={() => navigate("/profile")}
                  />
                )
              )}
              {auth.currentUser ? (
                <CustomNavLink
                  title={"LogOut"}
                  path="/"
                  className={classes.headerNavButton}
                  onClick={onClick}
                />
              ) : (
                <CustomNavLink
                  title={"Login"}
                  path="/login"
                  className={classes.headerNavButton}
                  onClick={onClick}
                />
              )}
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Header;
