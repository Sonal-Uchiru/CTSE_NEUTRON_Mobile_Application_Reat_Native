import { CardBaseModel } from './CardBaseModel';
export class UpdateCardData extends CardBaseModel {
  docId: string;

  constructor(
    docId: string,
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: Date,
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, '');
    this.docId = docId;
  }
}
