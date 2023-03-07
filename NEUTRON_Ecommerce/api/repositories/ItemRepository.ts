import { ICreateItem } from '../../types/items/ICreateItemData';
import { IUpdateItemData } from '../../types/items/IUpdateItemData';
import { FireStoreDB } from './../../utils/firebase/Configuration';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore';

class ItemRepository {
  async addItemAsync(item: ICreateItem): Promise<void> {
    try {
      await addDoc(collection(FireStoreDB, 'items'), item);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateItemAsync(item: IUpdateItemData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'items', item.docId), item);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteItemAsync(docId: string): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'items', docId));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getItemListAsync(): Promise<QueryDocumentSnapshot<DocumentData>> {
    try {
      const docRef = doc(FireStoreDB, 'items');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap;
      } else {
        // doc.data() will be undefined in this case
        throw new Error('items not found');
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new ItemRepository();
