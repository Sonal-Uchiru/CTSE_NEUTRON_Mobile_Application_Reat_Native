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
import AuthenticationRepository from './AuthenticationRepository';

class UserRepository {
  async addUserAsync(uid: string, user: CreateUserData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'users', uid), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserAsync(user: UpdateUserData): Promise<void> {
    try {
      await setDoc(
        doc(
          FireStoreDB,
          'users',
          await AuthenticationRepository.getLoggedInUserUid()
        ),
        { ...user }
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(): Promise<void> {
    try {
      await deleteDoc(
        doc(
          FireStoreDB,
          'users',
          await AuthenticationRepository.getLoggedInUserUid()
        )
      );
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

  async getUserAsync(): Promise<DocumentData> {
    try {
      const docRef = doc(
        FireStoreDB,
        'users',
        await AuthenticationRepository.getLoggedInUserUid()
      );
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
