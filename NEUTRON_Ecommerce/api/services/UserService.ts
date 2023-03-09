import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import ExpoLocalStorage from '../../authentication/secure_stores/ExpoLocalStorage';
import { CreateUserData } from '../../types/users/CreateUserData';
import AuthenticationRepository from '../repositories/AuthenticationRepository';
import { AuthenticationData } from '../../types/authentication/AuthenticationData';
import { UserCredential } from 'firebase/auth';
import UserRepository from '../repositories/UserRepository';
import { UserModel } from '../../types/users/UserModel';
import { UpdateUserData } from '../../types/users/UpdateUserData';

export class UserService {
  async loginAsync(credentials: AuthenticationData): Promise<void> {
    try {
      const userCredential: UserCredential =
        await AuthenticationRepository.loginAsync(credentials);

      const uid: string = userCredential.user.uid;

      const user: UserModel = await this.getUserByIdAsync(uid);

      await ExpoLocalStorage.setTokenToLocalStorageAsync(uid);
      await ExpoLocalStorage.setRoleToLocalStorageAsync(user.role);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async registerAsync(
    user: CreateUserData,
    credentials: AuthenticationData
  ): Promise<void> {
    try {
      const userCredential: UserCredential =
        await AuthenticationRepository.registerAsync(credentials);
      const uid: string = userCredential.user.uid;
      await UserRepository.addUserAsync(uid, user);

      await ExpoLocalStorage.setTokenToLocalStorageAsync(uid);
      await ExpoLocalStorage.setRoleToLocalStorageAsync(user.role);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserAsync(user: UpdateUserData): Promise<void> {
    try {
      const uid: string | null =
        await ExpoLocalStorage.getTokenFromLocalStorageAsync();

      if (uid === null) {
        throw new Error('Token not found');
      }

      await UserRepository.getUserByIdAsync(uid);
      await UserRepository.updateUserAsync(uid, user);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(uid: string): Promise<void> {
    try {
      await UserRepository.getUserByIdAsync(uid);
      await AuthenticationRepository.deleteAsync();
      await UserRepository.deleteUserAsync(uid);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserListAsync(): Promise<UserModel[]> {
    try {
      const users: UserModel[] = [];
      const uid: string | null =
        await ExpoLocalStorage.getTokenFromLocalStorageAsync();

      if (!uid) {
        return users;
      }

      const querySnapshots: QuerySnapshot<DocumentData> =
        await UserRepository.getUserListAsync();

      if (querySnapshots.docs.length > 0) {
        querySnapshots.docs.map((doc) => {
          const user = doc.data();
          users.push(
            new UserModel(
              user['email'],
              user['firstName'],
              user['lastName'],
              user['mobile'],
              user['address'],
              user['profileImageUrl'],
              user['role']
            )
          );
        });
      }

      return users;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserByIdAsync(uid: string): Promise<UserModel> {
    try {
      const querySnapshot: DocumentData = await UserRepository.getUserByIdAsync(
        uid
      );
      const content = querySnapshot.data();
      return new UserModel(
        content['email'],
        content['firstName'],
        content['lastName'],
        content['mobile'],
        content['address'],
        content['profileImageUrl'],
        content['role']
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new UserService();
