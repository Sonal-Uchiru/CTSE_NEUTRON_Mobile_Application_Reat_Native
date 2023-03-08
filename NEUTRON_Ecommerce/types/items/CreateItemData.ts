import { ItemBaseModel } from './ItemBaseModel';

export class CreateItemData extends ItemBaseModel {
  constructor(
    itemName: string,
    category: string,
    quantity: number,
    unitPrice: number,
    brand: string,
    description: string,
    availableAddresses: string,
    latitude: number,
    longitude: number,
    stockKeepingUnits: string
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
      stockKeepingUnits
    );
  }
}
