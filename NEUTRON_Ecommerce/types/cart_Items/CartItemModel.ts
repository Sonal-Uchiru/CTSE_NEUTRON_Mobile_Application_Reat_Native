import { ItemModel } from "../items/ItemModel";

export class CartItemModel {
    docId: string;
    item: ItemModel;
    uid: string;
    
    constructor(docId: string, item: ItemModel,uid: string) {
        this.docId = docId;
        this.item = item;
        this.uid = uid;
    }
}