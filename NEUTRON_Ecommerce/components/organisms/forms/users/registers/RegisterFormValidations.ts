import * as yup from 'yup';
import { RegisterModel } from './RegisterFormModel';

export const RegisterValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(RegisterModel.firstName.requiredErrorMessage),

  lastName: yup
    .string()
    .required(RegisterModel.lastName.requiredErrorMessage),

  contact: yup
    .string()
    .required(RegisterModel.contact.requiredErrorMessage),

  email: yup
    .string()
    .email(RegisterModel.email.validationErrorMessage)
    .required(RegisterModel.email.requiredErrorMessage),

  password: yup
    .string()
    .required(RegisterModel.password.requiredErrorMessage),

  reEnterPassword: yup
    .string()
    .required(RegisterModel.reEnterPassword.requiredErrorMessage)
});
