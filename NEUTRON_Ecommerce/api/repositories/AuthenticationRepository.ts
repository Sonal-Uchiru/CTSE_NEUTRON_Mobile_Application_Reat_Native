import { AuthenticationData } from '../../types/authentication/AuthenticationData';
import { Auth } from '../../utils/firebase/Configuration';
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut
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
      const user = await this.getLoggedInUserAsync();
      await deleteUser(user);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getLoggedInUserAsync(): Promise<User> {
    try {
      const user = await Auth.currentUser;
      if (user == null) {
        throw new Error('unauthorized');
      }
      return user;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getLoggedInUserUid(): Promise<string> {
    const user = await this.getLoggedInUserAsync();
    return user.uid;
  }

  async signOutAsync(): Promise<void> {
    try {
      await signOut(Auth);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new AuthenticationRepository();
