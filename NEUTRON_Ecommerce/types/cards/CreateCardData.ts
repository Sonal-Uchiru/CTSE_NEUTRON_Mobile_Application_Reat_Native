import { CardBaseModel } from './CardBaseModel';
export class CreateCardData extends CardBaseModel {
  constructor(
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: string,
  ) {
    super(displayName, cardNumber, nameOnCard, expiryDate, '');
  }
}
