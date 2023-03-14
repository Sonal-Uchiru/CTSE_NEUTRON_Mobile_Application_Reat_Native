import { CardBaseModel } from './CardBaseModel';

export class CardModel extends CardBaseModel {
  docId: string;

  constructor(
    docId: string,
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: Date,
    uid: string
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, uid);
    this.docId = docId;
  }
}
