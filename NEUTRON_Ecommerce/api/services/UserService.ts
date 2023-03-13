import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import ExpoLocalStorage from '../../authentication/secure_stores/ExpoLocalStorage';
import { CreateUserData } from '../../types/users/CreateUserData';
import AuthenticationRepository from '../repositories/AuthenticationRepository';
import { AuthenticationData } from '../../types/authentication/AuthenticationData';
import { User, UserCredential } from 'firebase/auth';
import UserRepository from '../repositories/UserRepository';
import { UserModel } from '../../types/users/UserModel';
import { UpdateUserData } from '../../types/users/UpdateUserData';
import { uploadFile } from '../../utils/firebase/cloud_storage/UploadFile';
import { ImagePickerAsset } from 'expo-image-picker';

export class UserService {
  async loginAsync(credentials: AuthenticationData): Promise<void> {
    try {
      await AuthenticationRepository.loginAsync(credentials);

      const user: UserModel = await this.getUserAsync();

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

      await ExpoLocalStorage.setRoleToLocalStorageAsync(user.role);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateUserAsync(user: UpdateUserData): Promise<void> {
    try {
      await UserRepository.getUserAsync();
      const currentUser: User =
        await AuthenticationRepository.getLoggedInUserAsync();
      user.email = currentUser.email!;
      await UserRepository.updateUserAsync(user);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUserAsync(): Promise<void> {
    try {
      await UserRepository.getUserAsync();
      await AuthenticationRepository.deleteAsync();
      await UserRepository.deleteUserAsync();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getUserListAsync(): Promise<UserModel[]> {
    try {
      const users: UserModel[] = [];

      const querySnapshots: QuerySnapshot<DocumentData> =
        await UserRepository.getUserListAsync();

      if (querySnapshots.docs.length > 0) {
        querySnapshots.docs.map((doc) => {
          const user = doc.data();
          users.push(
            new UserModel(
              doc.id,
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

  async getUserAsync(): Promise<UserModel> {
    try {
      const querySnapshot: DocumentData = await UserRepository.getUserAsync();
      const content = querySnapshot.data();
      return new UserModel(
        querySnapshot.id,
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

  async updateUserProfilePictureAsync(imageAssest: ImagePickerAsset): Promise<string> {
    try {
      const user: UserModel = await this.getUserAsync();

      const profileImageUrl: string | null = await uploadFile(
        imageAssest,
        'users',
        `${user.uid}_profile_image`
      );

      if(profileImageUrl == null) throw new Error('profile url not found');

      return profileImageUrl;

    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async signOut(): Promise<void> {
    try {
      await AuthenticationRepository.signOutAsync();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new UserService();
