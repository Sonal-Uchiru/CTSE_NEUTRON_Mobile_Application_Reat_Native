export class UpdateCardData {
    docId: string;
    displayName: string;
    cardNumber: number;
    nameOnCard: string;
    expiryDate: Date;
    uid: string;
  
    constructor(
      docId: string,  
      displayName: string,
      cardNumber: number,
      nameOnCard: string,
      expiryDate: Date,
      uid: string
    ) {
      this.docId = docId;
      this.displayName = displayName;
      this.cardNumber = cardNumber;
      this.nameOnCard = nameOnCard;
      this.expiryDate = expiryDate;
      this.uid = uid;
    }
}