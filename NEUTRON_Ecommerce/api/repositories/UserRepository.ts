import { CreateUserData } from '../../types/users/CreateUserData';
import { UpdateUserData } from '../../types/users/UpdateUserData';
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

class UserRepository {
  async addUserAsync(user: CreateUserData): Promise<void> {
    try {
      await addDoc(collection(FireStoreDB, `users/${user.uid}`), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserAsync(user: UpdateUserData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'users', user.uid), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(docId: string): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'cards', docId));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserListAsync(): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(FireStoreDB, 'cards'));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserByIdAsync(docId: string): Promise<DocumentData> {
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

export default new UserRepository();
