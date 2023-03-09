import { CreateUserData } from '../../types/users/CreateUserData';
import { UpdateUserData } from '../../types/users/UpdateUserData';
import { FireStoreDB } from './../../utils/firebase/Configuration';
import {
  collection,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  DocumentData,
  getDocs,
  QuerySnapshot
} from 'firebase/firestore';

class UserRepository {
  async addUserAsync(uid: string, user: CreateUserData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'users', uid), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserAsync(uid: string, user: UpdateUserData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'users', uid), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(uid: string): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'users', uid));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserListAsync(): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(FireStoreDB, 'users'));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserByIdAsync(uid: string): Promise<DocumentData> {
    try {
      const docRef = doc(FireStoreDB, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap;
      } else {
        // doc.data() will be undefined in this case
        throw new Error('Users not found');
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new UserRepository();
