import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import type {CustomNavLinkProps} from './types.ts'

const CustomNavLink: FC<CustomNavLinkProps> = ({
  title,
  path,
  className,
  onClick,
  children,
}) => {
  return (
    <>
      {children ? (
        <NavLink to={path} className={className} onClick={onClick}>
          {children}
          {title}
        </NavLink>
      ) : (
        <NavLink to={path} className={className} onClick={onClick}>
          {title}
        </NavLink>
      )}
    </>
  );
};

export default CustomNavLink;
