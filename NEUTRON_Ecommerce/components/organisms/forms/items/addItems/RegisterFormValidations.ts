import * as yup from 'yup';
import { RegisterModel } from './RegisterFormModel';

export const RegisterValidationSchema = yup.object().shape({
  itemCategory: yup
    .string()
    .required(RegisterModel.itemCategory.requiredErrorMessage),
  itemName: yup.string().required(RegisterModel.itemName.requiredErrorMessage),
  brand: yup.string().required(RegisterModel.brand.requiredErrorMessage),
  quantity: yup.string().required(RegisterModel.quantity.requiredErrorMessage),
  unitPrice: yup
    .string()
    .required(RegisterModel.unitPrice.requiredErrorMessage),
  skuNumber: yup
    .string()
    .required(RegisterModel.skuNumber.requiredErrorMessage),
  description: yup
    .string()
    .required(RegisterModel.description.requiredErrorMessage),
  itemAddress: yup
    .string()
    .required(RegisterModel.itemAddress.requiredErrorMessage),
  longtitude: yup
    .string()
    .required(RegisterModel.longtitude.requiredErrorMessage),
  latitude: yup.string().required(RegisterModel.latitude.requiredErrorMessage)
});
