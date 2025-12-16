import type { LoaderFunctionArgs } from 'react-router-dom';

export const fetchPlaceDetails = async (id: LoaderFunctionArgs) => {
  let thisData: number = +id
  new Promise((res, rej) => {
    setTimeout(() => res(25 * thisData), 1000);
    if (thisData > 5 || typeof thisData !== 'number') {rej('server error' + thisData + 'не є числом або більше 5')}
    setTimeout(() => {
      () => rej('server error' + 'довго немає відповіді');
    }, 2000);
  });
};


