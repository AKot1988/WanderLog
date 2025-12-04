import type { CustomNavLinkProps } from '../../components/CustomNavLink/types';

export type HeaderProps = {
  logo: string;
  navMenuSet: {
    [key: string]: CustomNavLinkProps[];
  };
  onClick?: () => void;
  avatarLink?: string;
};
