
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAsAjkjqEjyA37m3udux5tbOiwLIKmr5jM',
    authDomain: 'ctsereactnativeneutron.firebaseapp.com',
    projectId: 'ctsereactnativeneutron',
    storageBucket: 'ctsereactnativeneutron.appspot.com',
    messagingSenderId: '903672387594',
    appId: '1:903672387594:web:ea722c9046369bd29927f3'
  };

const app = initializeApp(firebaseConfig);
const Store = getFirestore(app);

export { Store, Store as default };