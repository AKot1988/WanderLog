import { db } from './firebase';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';

// const dbRef = ref(database);

const usersCollectionRef = collection(db, 'usersExtendedData');
const placesCollectionRef = collection(db, 'places');

interface UserData {
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
}
// пишемо дані користувача у базу даних, саме в розділ "users" в юзерІД. Пропси поки ені, проте треба буде типізувати
export const writeUserData = async ({ userId, name, email, imageUrl }: UserData): Promise<void> => {
  await setDoc(doc(usersCollectionRef, '123123123'), {
    userId,
    email,
    imageUrl,
    name,
  });
};

// export getUsersData = async (userID): Promise<any> => {
//  reyrn doc(dbRef, 'usersExtendedData', `${userID}`)
// }

export const readUserData = async ({ userID }: any) => {
  let usData: any = null;
  const usDataRef = doc(usersCollectionRef, `${userID}`);
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
