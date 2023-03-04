import * as yup from 'yup';
import { DemoFormModel } from './DemoFormModel';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(DemoFormModel.email.validationErrorMessage)
    .required(DemoFormModel.email.requiredErrorMessage),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be atleast ${min} characters long`)
    .required('Password is required')
});
