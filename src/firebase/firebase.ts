import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: 'AIzaSyCE-CYTHJmb9pWG97GD2IncbXnSgv5MBQU',
  authDomain: 'wanderlogakot.firebaseapp.com',
  projectId: 'wanderlogakot',
  storageBucket: 'wanderlogakot.firebasestorage.app',
  messagingSenderId: '976096974898',
  appId: '1:976096974898:web:7ec91950ee4a7eadcdc42b',
  measurementId: 'G-C530FR5169',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);
