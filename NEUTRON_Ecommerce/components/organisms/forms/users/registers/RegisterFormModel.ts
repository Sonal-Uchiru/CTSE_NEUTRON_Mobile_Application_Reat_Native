export const RegisterModel = {
  firstName: {
    initialValue: '',
    firstNamePlaceholder: 'formFields.firstNamePlaceholder',
    requiredErrorMessage: 'formFields.firstNameRequiredError'
  },
  lastName: {
    initialValue: '',
    lastNamePlaceholder: 'formFields.lastNamePlaceholder',
    requiredErrorMessage: 'formFields.lastNameRequiredError'
  },
  email: {
    initialValue: '',
    emailPlaceholder: 'formFields.emailPlaceholder',
    validationErrorMessage: 'formFields.emailValidationError',
    requiredErrorMessage: 'formFields.emailRequiredError'

  },

  contact: {
    initialValue: '',
    contactPlaceholder: 'formFields.contactPlaceholder',
    validationErrorMessage: 'formFields.contactValidationError',
    requiredErrorMessage: 'formFields.contactRequiredError'

  },
  password: {
    initialValue: '',
    passwordPlaceholder: 'formFields.passwordPlaceholder',
    validationPasswordMessage: 'formFields.passwordValidationError',
    requiredErrorMessage: 'formFields.passwordRequiredError'
  },
  reEnterPassword: {
    initialValue: '',
    reEnterPasswordPlaceholder: 'formFields.reEnterPasswordPlaceholder',
    misMatchErrorMessage: 'formFields.reEnterPasswordMisMatchError',
    requiredErrorMessage: 'formFields.reEnterPasswordRequiredError'
  }
};
