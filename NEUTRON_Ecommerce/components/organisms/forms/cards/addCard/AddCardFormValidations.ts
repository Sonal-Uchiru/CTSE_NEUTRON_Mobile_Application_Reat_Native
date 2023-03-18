import * as yup from 'yup';
import { AddCardModel} from './AddCardFormModel';

export const AddCardValidationSchema = yup.object().shape({
  displayName: yup
    .string()
    .required(AddCardModel.displayName.requiredErrorMessage),

  cardNumber: yup
    .number()
    .required(AddCardModel.cardNumber.requiredErrorMessage),

  name: yup
    .string()
    .required(AddCardModel.name.requiredErrorMessage),

  date: yup
    .string()
    .required(AddCardModel.date.requiredErrorMessage),
});
