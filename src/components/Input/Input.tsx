import type { FC } from 'react';
import type { CustomInputProps } from './helper.ts';
import { data } from 'react-router';
import { b, th, tr } from 'framer-motion/client';
// import {fakeRequest} from './promise_test.ts';

// fakeRequest(1000, 1500).then((res) => {
//   console.log('Request resolved:', res);
// }).catch((err) => {
//   console.log('Request rejected:', err);
// });

// -------------------------------------------------------------------------------------
// 1 Створи функцію, яка через 2 секунди повертає число 10. Виклич її через await і виведи результат.**
// const twoSecTimer = () => {
//   return new Promise<number>((resolve, reject) => {
//     setTimeout(() => resolve(10), 500);
//     setTimeout(() => reject('Timer error'), 1000);
//   });
// };

// twoSecTimer()
//   .then((res: any) => {
//     console.log('Two second timer resolved:', res);
//   })
//   .catch((err: any) => {
//     console.log('Two second timer rejected:', err);
//   });

// const secondAsyncFunction = async (
//   sucsTime: number,
//   erTime: number
// ): Promise<any> => {
//   const smth = new Promise((res, rej) => {
//     setTimeout(() => res(10), sucsTime);
//     setTimeout(() => rej('Async error'), erTime);
//   });
//   return smth;
// };

// --------------await call

// const asyncCall = await secondAsyncFunction(4000, 3000)
//   .then((res) => {
//     console.log('Second async function resolved:', res);
//   })
//   .catch((err) => {
//     console.log('Second async function rejected:', err);
//   });

// -------------------try|catch call:
// try {
//   const result = await secondAsyncFunction(11500, 1500);
//   console.log('Second async function resolved:', result);
// } catch (error) {
//   console.log('Second async function rejected:', error);
// }

// ------------------------------------------------------------------------------------

// 2 Створи функцію, яка:робить fetch на будь-який публічний API (наприклад https://jsonplaceholder.typicode.com/todos/1)повертає JSONВиклич її через .then().
// const fetchFunction = (linkToFetch: string): Promise<any> => {
//   return fetch(linkToFetch);
// };
// fetchFunction('4rfds').then((res) =>
//   console.log(res)
// ).catch((err) => console.log('Fetch error:', err.status));

// 3 Напиши async-функцію, яка повертає число. Перевір, що всередині .then(result => ...) ти отримуєш саме це число.**
// async function numberReturner (): Promise<number>{
//   return 42;
// }

// const result = await numberReturner().then((response) => response)
// console.log('Number returned:', result);

// -------------------------------------------------------------------------------------

// **4) Напиши проміс, який через 1 сек reject-иться текстом "Error". Оброби його через try/catch з await.**

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('sucsess'), 2000);
//   setTimeout(() => reject('failure'), 3000);
// });

// try {
//   newPromise.then(res=>console.log('Promise resolved:', res));
// } catch (error) {
//   console.log('Caught error:', error);
// }

// **5) Напиши функцію delay(ms), яка повертає проміс, що чекає ms мілісекунд. Використай її з async/await.**

// const delay = async (ms: number) => {
//   const constWithDelayPromise = new Promise<string>((resolve) => {
//     setTimeout(() => resolve('its alive'), ms);
//   });
//   return constWithDelayPromise;
// };
// await delay(2000).then((res) => {
//   console.log(res + ' нормасіо');
// });

// **6) Напиши async-функцію, яка всередині повертає інший проміс. Переконайся, що await дає тобі кінцеве значення, а не проміс.**

// async function nestedPromiseFunction(): Promise<string> {
//   const innerPromise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => resolve('Inner promise resolved'), 1000);
//     setTimeout(() => reject('Inner promise rejected'), 2000);
//   })
//   return innerPromise;
// }

// const finalResult = await nestedPromiseFunction();
// console.log('Final result from nested promise function:', finalResult);

// -------------------------------------------------------------------------------------

// **7) Створи проміс, який резолвиться числом 5. Потім створи async-функцію, яка чекає цей проміс і повертає його значення, помножене на 2, а потім ще помножене на 3. Виклич цю функцію і виведи результат в консоль.**
// const number5Returner =  async (): Promise<number> => {
//   return new Promise<number>((resolve, reject) => {
//     resolve(5);
//     reject('Error: could not resolve to 5');
//   });
// }
// const result = await number5Returner().then((num) => {
//   const multiplied = num * 2;
//   console.log('After multiplying by 2:', multiplied);
//   return multiplied;
// }

// ).then((num) => {
//   const finalResult = num * 3;
//   console.log('After multiplying by 3:', finalResult);
//   return finalResult;
// } ).catch((err) => {
//   console.log('Error occurred:', err);
// });
// console.log('Final result:', result);

// -------------------------------------------------------------------------------------

// Рівень 3 — складніші, вже близько до реальної роботи
// 8) Створи функцію fetchUser(id), яка: робить запит на: https://jsonplaceholder.typicode.com/users/ID якщо id < 1 → одразу кидає throw new Error("Invalid ID"). Оброби виклик через try/catch.

// const fetcherID = async (id: number): Promise<any> => {
//   if (id < 1) {
//     throw new Error('Invalid ID');
//   }
//   try {
//     const char = await fetch(`https://swapi.dev/api/people/${id}`);
//     if (!char.ok) {
//       throw new Error(`HTTP error! status: ${char.status}`);
//     }

//     const data = char.json();
//     return data;
//   } catch (error) {
//     throw new Error('Fetch error: ' + error);
//   }
// };
// try {
//   const userData = await fetcherID(81);
//   console.log('User data fetched:', userData);
// } catch (error) {
//   console.log('Error fetching user data:', error);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9 що поверне консоль лог
// async function test() {
//   return Promise.resolve(
//     Promise.resolve(
//       Promise.resolve(10)
//     )
//   );
// }

// const r = await test();
// console.log(r);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10
// Умови:
// Функція робить fetch(url).
// Якщо запит успішний — повертає JSON.
// Якщо помилка мережі або status >= 500, то:
// чекає 5000ms
// повторює запит
// Після того як кількість спроб закінчилась, функція повинна викинути помилку.
// Статуси 400–499 НЕ треба повторювати — одразу кидати помилку.

// for()
// type FetchFunctionDataType = {
//   url: string;
//   options?: RequestInit;
//   retries: number;
//   retryDelay: number;
// };

// const functionWithFetch = async ({
//   url,
//   options,
//   retries,
//   retryDelay,
// }: FetchFunctionDataType): Promise<void | JSON> => {
//   let lastError;
//   for (let attempt = 1; attempt < retries; attempt++) {
//     console.log(`Attempt ${attempt}/${retries}`);
//     try {
//       const response = await fetch(url, options);
//       console.log(response);
//       debugger;
//       if (response.ok) {
//         const sucsessedFetcheadData: Promise<void | JSON> = response.json();
//         return sucsessedFetcheadData;
//       } else if (response.status >= 400 && response.status < 500) {
//         throw new Error(`Client error ${response.status}`);
//       } else if (response.status >= 500 && response.status < 599) {
//         throw new Error('Server error: ' + response.status);
//       }
//     } catch (error) {
//       lastError = error;
//     }
//     if (attempt < retries) {
//       await new Promise((r) => setTimeout(r, retryDelay));
//       continue;
//     }
//   }
//   throw lastError;
// };

// const character = await functionWithFetch({
//   url: 'https://swapi.dev/api/people/564',
//   retries: 5,
//   retryDelay: 1000,
// });
// console.log(character);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 11) Умови

// Є API: https://swapi.dev/api/starships/
// Кораблі приходять порційно (pagination) — по 10 штук.
// Властивість: hyperdrive_rating
// Потрібно:
// забрати всі сторінки з кораблями;
// відфільтрувати кораблі, де hyperdrive_rating < 1.0;
// відсортувати за name;
// повернути масив назв.
//  Розвязок:

type RequestFunctionProps = {
  url: string;
}
const fetchFastestShips = ({url}: RequestFunctionProps): Promise<[string]>=> {
  let shipsNamesArray: string[] = [];
  const fetchShip = fetch(url)
  

  return shipsNamesArray
}

const fetchProps: RequestFunctionProps = {url: 'https://swapi.dev/api/starships/'}
//
const result = fetchFastestShips(fetchProps).then((res) => {
  console.log('Fastest ships:', res);
}



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
