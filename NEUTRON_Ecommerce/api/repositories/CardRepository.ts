import { CreateCardData } from '../../types/cards/CreateCardData';
import { UpdateCardData } from '../../types/cards/UpdateCardData';
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

class CardRepository {
  async addCardAsync(card: CreateCardData): Promise<void> {
    try {
      await addDoc(collection(FireStoreDB, 'cards'), { ...card });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateCardAsync(docId: string, card: UpdateCardData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'cards', docId), { ...card });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteCardAsync(docId: string): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'cards', docId));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCardListAsync(): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(FireStoreDB, 'cards'));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCardByIdAsync(docId: string): Promise<DocumentData> {
    try {
      const docRef = doc(FireStoreDB, 'cards', docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap;
      } else {
        // doc.data() will be undefined in this case
        throw new Error('Cards not found');
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new CardRepository();
