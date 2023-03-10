export class UpdateCartItemData {
  docId: string;
  quantity: number;

  constructor(docId: string, quantity: number) {
    this.docId = docId;
    this.quantity = quantity;
  }
}
