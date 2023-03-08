import { ICordinationsModel } from './CordinationsModel';

export interface IItemModel {
  docId: string;
  itemName: string;
  category: string;
  quantity: number;
  unitPrice: number;
  brand: string;
  description: string;
  availableAddresses: string;
  cordinations: ICordinationsModel;
  stockKeepingUnits: string;
}
