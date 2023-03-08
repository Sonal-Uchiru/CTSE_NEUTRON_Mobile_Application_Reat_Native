
export class CreateItemData {
  itemName: string;
  category: string;
  quantity: number;
  unitPrice: number;
  brand: string;
  description: string;
  availableAddresses: string;
  latitude: number;
  longitude: number;
  stockKeepingUnits: string;

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
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.brand = brand;
    this.description = description;
    this.availableAddresses = availableAddresses;
    this.latitude = latitude;
    this.longitude = longitude;
    this.stockKeepingUnits = stockKeepingUnits;
  }
}
