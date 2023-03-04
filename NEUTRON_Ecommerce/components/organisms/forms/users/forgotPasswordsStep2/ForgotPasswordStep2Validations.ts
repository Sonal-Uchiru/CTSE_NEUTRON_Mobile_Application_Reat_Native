import * as yup from 'yup';
import { ForgotPasswordModel } from './ForgotPasswordStep2Model';

export const ForgotPasswordValidationSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, ({ min }) => ForgotPasswordModel.code.validationErrorMessage)
    .required(ForgotPasswordModel.code.requiredErrorMessage)
});
