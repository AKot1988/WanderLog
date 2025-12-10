import { initializeApp } from 'firebase/app';
import { app } from './firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

import type { UserCredentialsEmailProps } from './types';

export const auth = getAuth(app);
export const AUTH_USER_ROLE = {
  AUTHORIZED: 'authorized',
  GUEST: 'guest',
  ADMIN: 'admin',
} as const;

onAuthStateChanged(auth, (user) => {
  if (user) {
    return auth.currentUser;
  } else {
    return auth.currentUser;
  }
});

export const createUserEmailPassword = async ({ email, password }: UserCredentialsEmailProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch {
    (error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      throw new Error('Email authentification error: ' + errorMessage + errorCode);
      // ..here will be call of error Component. which will show errorMessage and some animation.
    };
  }
};

// export const signInByGoogle = async () => {};
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'ukrainian';

export const googleSignIn = async (): any => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    const token = credential?.accessToken;
    // IdP data available using getAdditionalUserInfo(result)
    const user = result.user;
    return { user, token };
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    throw new Error(`Google sign-in error: ${errorMessage} (${errorCode})`);
  }
};

export const sinInByEmailCredentials = async (email: string, password: string) => {
  try {
    (userCredential: any) => {
      // Signed in
      const user = userCredential.user;
      // ...
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};
// export const signInWithEmailAndPassword(auth, email, password)
