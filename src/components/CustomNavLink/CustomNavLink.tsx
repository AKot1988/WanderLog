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
          {title.toUpperCase()}
        </NavLink>
      ) : (
        <NavLink to={path} className={className} onClick={onClick}>
            {title.toUpperCase()}
        </NavLink>
      )}
    </>
  );
};

export default CustomNavLink;
