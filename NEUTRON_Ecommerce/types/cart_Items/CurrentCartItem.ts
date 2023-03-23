export class CurrentCartItem {
  docId: string;
  currentQuantity: number;

  constructor(docId: string, currentQuantity: number) {
    this.docId = docId;
    this.currentQuantity = currentQuantity;
  }
}
