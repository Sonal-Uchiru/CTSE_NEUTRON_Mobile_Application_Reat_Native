import * as yup from 'yup';
import { DeleteAccountConfirmModel } from './DeleteAccountConfirmModel';

export const DeleteAccountConfirmValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({ min }) => DeleteAccountConfirmModel.password.validationErrorMessage)
    .required(DeleteAccountConfirmModel.password.requiredErrorMessage)
});
