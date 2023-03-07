import { ICordinationsModel } from './ICordinationsModel';
export interface ICreateItem {
    itemName: string
    category: string
    quantity: number
    unitPrice: number
    brand: string
    description: string
    availableAddresses: string
    cordinations: ICordinationsModel
    stockKeepingUnits: string
}