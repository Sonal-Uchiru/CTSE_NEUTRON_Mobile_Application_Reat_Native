import * as yup from 'yup';
import { EditCardModel } from './EditCardFormModel';

export const EditCardValidationSchema = yup.object().shape({
    displayName: yup
        .string()
        .required(EditCardModel.displayName.requiredErrorMessage),

    cardNumber: yup
        .number()
        .required(EditCardModel.cardNumber.requiredErrorMessage),

    name: yup
        .string()
        .required(EditCardModel.name.requiredErrorMessage),

    date: yup
        .string()
        .required(EditCardModel.date.requiredErrorMessage),
});
