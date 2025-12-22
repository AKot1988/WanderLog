import type { UserCredentialsEmailProps } from './types';
import { app } from './firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    return auth.currentUser;
  } else {
    return auth.currentUser;
  }
});

export const createUserEmailPassword = async ({ email, password }: UserCredentialsEmailProps) => {
  console.log('Creating user with email:', email);
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

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'ukrainian';

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-out error:', error);
  }
};

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return { user, token };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Google sign-in error: ${errorMessage} (${errorCode})`);
  }
};

export const logInByEmailCredentials = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error('Email log-in error: ' + errorMessage + errorCode);
  }
};
