import { CreateCardData } from '../../types/cards/CreateCardData';
import CardRepository from '../repositories/CardRepository';
import { UpdateCardData } from '../../types/cards/UpdateCardData';
import { CardModel } from '../../types/cards/CardModel';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import AuthenticationRepository from '../repositories/AuthenticationRepository';
import { getCardType } from '../../shared/CreditCard';


export class CardService {
  async addCardAsync(card: CreateCardData): Promise<void> {
    try {
      card.uid = await AuthenticationRepository.getLoggedInUserUid();
      await CardRepository.addCardAsync(card);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateCardAsync(docId: string, card: UpdateCardData): Promise<void> {
    try {
      await CardRepository.getCardByIdAsync(docId);
      card.uid = await AuthenticationRepository.getLoggedInUserUid();
      await CardRepository.updateCardAsync(docId, card);
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
      const uid: string = await AuthenticationRepository.getLoggedInUserUid();

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
                getCardType(card['cardNumber'].toString()),
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

  async getCardByIdAsync(docId: string): Promise<CardModel> {
    try {
      const querySnapshot: DocumentData = await CardRepository.getCardByIdAsync(
        docId
      );
      const content = querySnapshot.data();
      return new CardModel(
        querySnapshot.id,
        content['displayName'],
        content['cardNumber'],
        content['nameOnCard'],
        content['expiryDate'],
        getCardType(content['cardNumber'].toString()),
        content['uid']
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default new CardService();
