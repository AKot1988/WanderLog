import type { FC } from 'react';
import type { CustomInputProps } from './helper.ts';
import {fakeRequest} from './promise_test.ts';


fakeRequest(1000, 1500).then((res) => {
  console.log('Request resolved:', res);
}).catch((err) => {
  console.log('Request rejected:', err);
});






const Input: FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>;
      {/* {
        console.log('Input component rendered')
      } */}
    </>
  );
};


export default Input;
