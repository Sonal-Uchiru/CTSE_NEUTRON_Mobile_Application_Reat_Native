import * as yup from 'yup';
import { ForgotPasswordModel } from './ForgotPasswordStep1Model';

export const ForgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(ForgotPasswordModel.email.validationErrorMessage)
    .required(ForgotPasswordModel.email.requiredErrorMessage)
});
