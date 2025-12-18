import { db } from './firebase';
import { UserData } from './types';
import { doc, setDoc, getDoc, collection, serverTimestamp } from 'firebase/firestore';

// const dbRef = ref(database);

const usersCollectionRef = collection(db, 'usersExtendedData');
const placesCollectionRef = collection(db, 'places');

// пишемо дані користувача у базу даних, саме в розділ "users" в юзерІД. Автоматом створюється новий документ і колекція, якщо їх нема (якщо немає)
export const writeUserData = async (data: UserData): Promise<void> => {
  await setDoc(doc(usersCollectionRef, data.userId), {
    ...data,
    surname: data.surname ?? null,
    imageUrl: data.imageUrl ?? null,
    birthdate: data.birthdate ?? null,
    updatedAt: serverTimestamp(),
  });
};

export const readUserData = async ({ userId }: any) => {
  let usData: any = null;
  const usDataRef = doc(usersCollectionRef, `${userId}`);
  const usDataSnap = await getDoc(usDataRef);
  if (usDataSnap.exists()) {
    usData = usDataSnap.data();
  } else {
    console.log('No such document!');
  }
  return usData;
};

import type { LoaderFunctionArgs } from 'react-router-dom';

export const fetchPlaceDetails = async (id: LoaderFunctionArgs) => {
  let thisData: number = +id;
  new Promise((res, rej) => {
    setTimeout(() => res(25 * thisData), 1000);
    if (thisData > 5 || typeof thisData !== 'number') {
      rej('server error' + thisData + 'не є числом або більше 5');
    }
    setTimeout(() => {
      () => rej('server error' + 'довго немає відповіді');
    }, 2000);
  });
};
