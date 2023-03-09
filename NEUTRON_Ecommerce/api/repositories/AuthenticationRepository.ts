import { AuthenticationData } from '../../types/authentication/AuthenticationData';
import { Auth, FireStoreDB } from '../../utils/firebase/Configuration';
import {
  UserCredential,
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword
} from 'firebase/auth';

class AuthenticationRepository {
  async registerAsync(userData: AuthenticationData): Promise<UserCredential> {
    try {
      const user: UserCredential = await createUserWithEmailAndPassword(
        Auth,
        userData.email,
        userData.password
      );

      return user;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async loginAsync(credentials: AuthenticationData): Promise<any> {
    try {
      const user: UserCredential = await signInWithEmailAndPassword(
        Auth,
        credentials.email,
        credentials.password
      );

      return user;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  
  async deleteAsync(): Promise<void> {
    try {
      const user = Auth.currentUser;
      if (user == null) {
        throw new Error('unauthorized');
      }
      await deleteUser(user!);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new AuthenticationRepository();
