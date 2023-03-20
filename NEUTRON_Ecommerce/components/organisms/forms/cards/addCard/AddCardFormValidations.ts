import * as yup from 'yup';
import { AddCardModel} from './AddCardFormModel';

export const AddCardValidationSchema = yup.object().shape({
  displayName: yup
    .string()
    .required(AddCardModel.displayName.requiredErrorMessage),

  cardNumber: yup
    .number()
    .max(16)
    .min(14)
    .required(AddCardModel.cardNumber.requiredErrorMessage),

  name: yup
    .string()
    .required(AddCardModel.name.requiredErrorMessage),

  date: yup
    .string()
    .required(AddCardModel.date.requiredErrorMessage),
});
