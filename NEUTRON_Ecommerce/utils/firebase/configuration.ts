// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAsAjkjqEjyA37m3udux5tbOiwLIKmr5jM',
  authDomain: 'ctsereactnativeneutron.firebaseapp.com',
  projectId: 'ctsereactnativeneutron',
  storageBucket: 'ctsereactnativeneutron.appspot.com',
  messagingSenderId: '903672387594',
  appId: '1:903672387594:web:ea722c9046369bd29927f3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Firebase = getStorage(app);
Firebase.firestore();

export { Firebase, Firebase as default };
