import { useState, useEffect, type FC } from 'react';
import type { TemporaryRenderProps } from './types'

const TemporaryMessage: FC<TemporaryRenderProps> = ({ children, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <>{children}</>;
};

export default TemporaryMessage;
