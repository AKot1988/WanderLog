import type { CustomNavLinkProps } from "../CustomNavLink/CustomNavLink.tsx";

export type HeaderProps = {
  logo: string;
  navMenu: CustomNavLinkProps[];
  onClick?: () => void;
  avatarLink?: string;
};