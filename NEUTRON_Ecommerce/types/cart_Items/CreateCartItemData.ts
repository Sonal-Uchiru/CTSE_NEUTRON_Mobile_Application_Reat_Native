export class CreateCartItemData {
  itemDocId: string;
  quantity: number;
  uid: string = '';

  constructor(itemDocId: string, quantity: number) {
    this.itemDocId = itemDocId;
    this.quantity = quantity;
  }
}
