import { CardBaseModel } from './CardBaseModel';
export class CreateCardData extends CardBaseModel {
  constructor(
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: Date,
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, '');
  }
}
