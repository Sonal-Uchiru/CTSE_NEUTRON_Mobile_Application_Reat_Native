import { CreateUserData } from '../../types/users/CreateUserData';
import { UpdateUserData } from '../../types/users/UpdateUserData';
import { Auth, FireStoreDB } from './../../utils/firebase/Configuration';
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

  async updateUserAsync(user: UpdateUserData): Promise<void> {
    try {
      await setDoc(doc(FireStoreDB, 'users', this.getLoggedInUserId()), { ...user });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserProfilePicture(profileImageUrl: string) {
    try {
      await setDoc(doc(FireStoreDB, 'users', this.getLoggedInUserId()), {
        profileImageUrl: profileImageUrl
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(): Promise<void> {
    try {
      await deleteDoc(doc(FireStoreDB, 'users', this.getLoggedInUserId()));
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
      const user = Auth.currentUser;
      const docRef = doc(FireStoreDB, 'users', user!.uid);
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

  private getLoggedInUserId(): string {
    const user = Auth.currentUser;
    if (!user) {
      throw new Error('Unauthorized');
    }

    return user.uid;
  }
}

export default new UserRepository();
