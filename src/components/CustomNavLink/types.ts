import type { ReactNode } from 'react';

export type CustomNavLinkProps = {
  title: string;
  path: string;
  className: string;
  onClick?: () => void;
  children?: ReactNode;
};
