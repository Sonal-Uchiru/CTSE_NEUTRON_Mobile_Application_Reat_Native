import { ItemBaseModel } from "./ItemBaseModel";

export class ItemModel extends ItemBaseModel{
    docId: string;

    constructor(
      docId: string,
      itemName: string,
      category: string,
      quantity: number,
      unitPrice: number,
      brand: string,
      description: string,
      availableAddresses: string,
      latitude: number,
      longitude: number,
      stockKeepingUnits: string,
      imageUrl: string,
    ) {
      super(
        itemName,
        category,
        quantity,
        unitPrice,
        brand,
        description,
        availableAddresses,
        latitude,
        longitude,
        stockKeepingUnits,
        imageUrl
      );
      this.docId = docId;
    }
}