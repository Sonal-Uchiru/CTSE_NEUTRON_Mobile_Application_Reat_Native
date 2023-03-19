import * as yup from 'yup';
import { EditProfileModel } from './EditProfileFormModel';

export const EditProfileValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(EditProfileModel.firstName.requiredErrorMessage),

  lastName: yup
    .string()
    .required(EditProfileModel.lastName.requiredErrorMessage),

  contact: yup
    .string()
    .required(EditProfileModel.contact.requiredErrorMessage),

  address: yup
    .string()
    .required(EditProfileModel.address.requiredErrorMessage),

});
