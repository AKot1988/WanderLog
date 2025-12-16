import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'wanderlogakot.firebaseapp.com',
  projectId: 'wanderlogakot',
  storageBucket: 'wanderlogakot.firebasestorage.app',
  messagingSenderId: '976096974898',
  appId: '1:976096974898:web:7ec91950ee4a7eadcdc42b',
  measurementId: 'G-C530FR5169',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
