export class CardBaseModel {
  displayName: string;
  cardNumber: number;
  nameOnCard: string;
  expiryDate: string;
  uid: string;

  constructor(
    displayName: string,
    cardNumber: number,
    nameOnCard: string,
    expiryDate: string,
    uid: string
  ) {
    this.displayName = displayName;
    this.cardNumber = cardNumber;
    this.nameOnCard = nameOnCard;
    this.expiryDate = expiryDate;
    this.uid = uid;
  }
}
