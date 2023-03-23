export class CreateCartItemData {
  itemDocId: string;
  quantity: number;
  uid: string = '';

  constructor(itemDocId: string) {
    this.itemDocId = itemDocId;
    this.quantity = 1
  }
}
