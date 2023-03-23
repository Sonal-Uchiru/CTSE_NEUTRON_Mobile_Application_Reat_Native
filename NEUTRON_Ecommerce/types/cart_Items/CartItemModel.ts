import { ItemModel } from "../items/ItemModel";

export class CartItemModel {
    docId: string;
    item: ItemModel;
    quantity: number;
    uid: string;
    
    constructor(docId: string, item: ItemModel, qunatity: number, uid: string) {
        this.docId = docId;
        this.item = item;
        this.quantity = qunatity;
        this.uid = uid;
    }
}