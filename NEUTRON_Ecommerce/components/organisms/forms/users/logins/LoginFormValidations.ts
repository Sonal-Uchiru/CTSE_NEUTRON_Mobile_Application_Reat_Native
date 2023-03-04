import * as yup from 'yup';
import { LoginModel } from './LoginFormModel';

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(LoginModel.email.validationErrorMessage)
    .required(LoginModel.email.requiredErrorMessage),
  password: yup
    .string()
    .required(LoginModel.password.requiredErrorMessage)
});
