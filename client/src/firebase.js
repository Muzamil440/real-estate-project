// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: AIzaSyDw8SdE - Gt6qmXm8eISsPulHi4IvnPPcSY,
  authDomain: 'mern-projects-ad017.firebaseapp.com',
  projectId: 'mern-projects-ad017',
  storageBucket: 'mern-projects-ad017.firebasestorage.app',
  messagingSenderId: '284789784003',
  appId: '1:284789784003:web:8addde5b693395c5f11176',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
