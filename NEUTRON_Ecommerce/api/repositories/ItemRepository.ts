import { CreateItemData } from '../../types/items/CreateItemData';
import { UpdateItemData } from '../../types/items/UpdateItemData';
import { FireStoreDB } from './../../utils/firebase/Configuration';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  DocumentData,
  getDocs,
  QuerySnapshot
} from 'firebase/firestore';

class ItemRepository {
  async addItemAsync(item: CreateItemData): Promise<void> {
    try {
      await addDoc(collection(FireStoreDB, 'items'), { ...item });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateItemAsync(item: UpdateItemData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'items', item.docId), { ...item });
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

  async getItemListAsync(): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(FireStoreDB, 'items'));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getItemByIdAsync(docId: string): Promise<DocumentData> {
    try {
      const docRef = doc(FireStoreDB, 'items', docId);
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
