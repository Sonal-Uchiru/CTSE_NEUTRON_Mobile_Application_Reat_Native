import * as yup from 'yup';
import { ProfileModel } from './ProfileFormModel';

export const ProfileValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(ProfileModel.firstName.requiredErrorMessage),

  lastName: yup
    .string()
    .required(ProfileModel.lastName.requiredErrorMessage),

  contact: yup
    .number()
    .required(ProfileModel.contact.requiredErrorMessage),

  address: yup
    .string()
    .required(ProfileModel.address.requiredErrorMessage),

});
