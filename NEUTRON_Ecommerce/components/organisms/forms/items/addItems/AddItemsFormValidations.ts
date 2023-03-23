import * as yup from 'yup';
import { AddItemsFormModel } from './AddItemsFormModel';

export const AddItemsValidationSchema = yup.object().shape({
  itemCategory: yup
    .string()
    .required(AddItemsFormModel.itemCategory.requiredErrorMessage),
  itemName: yup.string().required(AddItemsFormModel.itemName.requiredErrorMessage),
  brand: yup.string().required(AddItemsFormModel.brand.requiredErrorMessage),
  quantity: yup.number().required(AddItemsFormModel.quantity.requiredErrorMessage),
  unitPrice: yup
    .number()
    .required(AddItemsFormModel.unitPrice.requiredErrorMessage),
  skuNumber: yup
    .string()
    .required(AddItemsFormModel.skuNumber.requiredErrorMessage),
  description: yup
    .string()
    .required(AddItemsFormModel.description.requiredErrorMessage),
  itemAddress: yup
    .string()
    .required(AddItemsFormModel.itemAddress.requiredErrorMessage)
});
