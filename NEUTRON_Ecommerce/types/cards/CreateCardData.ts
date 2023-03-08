import { CardBaseModel } from './CardBaseModel';
export class CreateCardData extends CardBaseModel {
  constructor(
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: Date,
    uid: string
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, uid);
  }
}
