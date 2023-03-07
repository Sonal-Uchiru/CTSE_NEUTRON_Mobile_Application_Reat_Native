import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAsAjkjqEjyA37m3udux5tbOiwLIKmr5jM',
    authDomain: 'ctsereactnativeneutron.firebaseapp.com',
    projectId: 'ctsereactnativeneutron',
    storageBucket: 'ctsereactnativeneutron.appspot.com',
    messagingSenderId: '903672387594',
    appId: '1:903672387594:web:ea722c9046369bd29927f3'
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const Stroage = getStorage(app);
export const FireStoreDB = getFirestore(app);
export const Auth = getAuth(app);
