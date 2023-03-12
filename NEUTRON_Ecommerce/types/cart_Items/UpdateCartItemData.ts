export class UpdateCartItemData {
  docId: string;
  quantity: number;
  uid: string = '';

  constructor(docId: string, quantity: number) {
    this.docId = docId;
    this.quantity = quantity;
  }
}
