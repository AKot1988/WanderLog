import type { CustomNavLinkProps } from '../../components/CustomNavLink/types';

export type HeaderProps = {
  logo: string;
  navMenuSet: CustomNavLinkProps[];
  onClick?: () => void;
  avatarLink?: string | undefined;
};

export type HeaderPropsSET = {
  [k: string]: HeaderProps
}
