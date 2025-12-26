import { type ReactNode } from 'react';

export interface TemporaryRenderProps {
  children: ReactNode;
  duration?: number; // час у мс, за замовчуванням 5000
}
