import { CardBaseModel } from './CardBaseModel';

export class CardModel extends CardBaseModel {
  docId: string;
  type: string;

  constructor(
    docId: string,
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: string,
    type: string,
    uid: string
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, uid);
    this.docId = docId;
    this.type = type;
  }
}
