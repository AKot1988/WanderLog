import type { FC } from 'react';
import type { CustomInputProps } from './helper.ts';

const Input: FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>;
    </>
  );
};

export default Input;
