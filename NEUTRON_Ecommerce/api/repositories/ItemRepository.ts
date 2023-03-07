import { FireStoreDB } from './../../utils/firebase/Configuration';
import { collection, addDoc } from 'firebase/firestore';

class ItemRepository {
  async AddItemAsync(): Promise<void> {
    try {
      const docRef = await addDoc(collection(FireStoreDB, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}

export default new ItemRepository();
