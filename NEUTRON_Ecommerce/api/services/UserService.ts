import CardRepository from '../repositories/CardRepository';
import { CardModel } from '../../types/cards/CardModel';
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
  async loginAsync(
    credentials: AuthenticationData
  ): Promise<void> {
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
      const uid: string | null = await ExpoLocalStorage.getTokenFromLocalStorageAsync();

      if(uid === null) {
        throw new Error('Token not found');
      }

      await UserRepository.updateUserAsync(uid,user);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteCardAsync(docId: string): Promise<void> {
    try {
      await CardRepository.getCardByIdAsync(docId);
      await CardRepository.deleteCardAsync(docId);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getCardListAsync(): Promise<CardModel[]> {
    try {
      const cards: CardModel[] = [];
      const uid: string | null =
        await ExpoLocalStorage.getTokenFromLocalStorageAsync();

      if (!uid) {
        return cards;
      }

      const querySnapshots: QuerySnapshot<DocumentData> =
        await CardRepository.getCardListAsync();

      if (querySnapshots.docs.length > 0) {
        querySnapshots.docs.map((doc) => {
          const card = doc.data();
          if (uid == card['uid']) {
            cards.push(
              new CardModel(
                doc.id,
                card['displayName'],
                card['cardNumber'],
                card['nameOnCard'],
                card['expiryDate'],
                card['uid']
              )
            );
          }
        });
      }

      return cards;
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
