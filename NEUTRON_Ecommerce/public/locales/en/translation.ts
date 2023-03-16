const en = {
  title: 'Welcome back',
  description: 'Good morning',
  test: {
    part1: 'To get started, edit <1>src/App.js</1> and save to reload.',
    part2: 'Switch language between english and german using buttons above.'
  },
  userDemo: {
    email: 'Email',
    emailPlaceholder: 'Enter Email',
    password: 'Password',
    passwordPlaceholder: 'Enter Password'
  },
  formFields: {
    passwordValidationError: 'This is a weak password',
    passwordRequiredError: 'Password is required',
    password: 'Password',
    passwordPlaceholder: 'Password',

    emailValidationError: `Please include '@' and '.com' in the email address`,
    emailRequiredError: 'Email is required',
    email: 'Email',
    emailPlaceholder: 'Email',

    firstName: 'First Name',
    firstNameRequiredError: 'First Name is required',
    firstNamePlaceholder: 'First Name',

    contact: 'Contact Number',
    contactRequiredError: 'Contact Number is required',
    contactPlaceholder: 'Contact Number',

    lastName: 'Last Name',
    lastNameRequiredError: 'Last Name is required',
    lastNamePlaceholder: 'Last Name',

    reEnterPassword: 'Re-Enter Password',
    misMatchErrorMessage: 'Passwords mismatch',
    reEnterPasswordRequiredError: 'Re-Enter Password is required',
    reEnterPasswordPlaceholder: 'Re-Enter Password'
  },
  deleteconfirmDialog: {
    confirm: 'Cautions!',
    confirmDescription:
      'do you really want to delete theres records? this process cannot be undone.'
  },
  confirmDialog: {
    confirm: 'Confirm',
    confirmDescription: 'Do you want to save the changes?'
  },
  errorDialog: {
    error: 'Error!',
    errorDescription: 'Something went wrong. Let’s try again.'
  },
  unsavedLeaveDialog: {
    confirm: 'Unsaved!',
    confirmDescription:
      'All the changes will be lost, if you leave without saving.'
  },
  successSnackbar: {
    successDescription: 'Branch has been saved successfully.'
  },
  errorSnackbar: {
    errorDescription: 'Something Went Wrong. Let’s Try Again.'
  },
  buttons: {
    save: 'Save',
    cancel: 'Cancel',
    tryAgain: 'Try Again',
    deleteConfirm: 'Yes, Delete it!',
    leave: 'Leave',
    stay: 'Stay',
    sendcode: 'Send code',
    verifyCode: 'Verify code',
    deleteMyAccount: 'Delete My Account',
    addToCart: 'Add To Cart'
  },
  forgotPasswordFormCommon: {
    title: 'Forgot Password?',
    emailValidationError: `Please include '@' and '.com' in the email address`,
    emailRequiredError: 'Email is required',
    goHome: 'Go Home'
  },
  forgotPasswordFormStep1: {
    email: 'Email',
    emailplaceholder: 'Enter Email',
    info: 'We Will Not Share Your Email With Anyone Else.',
    emailValidationError: `Please include '@' and '.com' in the email address`,
    emailRequiredError: 'Email is required'
  },
  forgotPasswordFormStep2: {
    code: 'Code',
    codePlaceholder: 'Enter Code',
    info: 'Check you inbox for 6 letters code tooby****@gmail.com',
    codeValidationError: `Code must be 6 letters long`,
    codeRequiredError: 'Code is required'
  },
  deleteAccountConfirmDialog: {
    title: 'Delete Your Account',
    subTitle: `We're Sorry To See You Go`,
    informaton:
      'Account deletion is final. There will be no way to restore your account.'
  },
  loginPage: {
    title: 'Welcome To Neutron',
    login: 'Login',
    signUp: 'Sign up',
    createAccountLink: "Don't have an account"
  },
  registerPage: {
    registerBtnTitle: 'Create Account',
    termsAndConditions:
      'By clicking on create account button you agree to the terms and conditions.',
    alreadyHaveAccount: 'Already Have an account?',
    loginHere: 'Login Here',
    terms: 'Terms & Conditions',
    back: 'Back'
  },
  helpPage: {
    help: 'Help',
    subTopic: 'Choose an area you need help',
    profileTopic: 'Manage your profile',
    cartTopic: 'Add Items To Cart',
    cardTopic: 'Manage your Cards',
    cardStep01: 'Select the card icon in the navigation tab',
    cardStep02: 'Add new card by pressing the "Add New Card button"',
    cardStep03: 'Edit cards by pressing "Edit Card button"',
    cartStep01: 'Press "Add to cart" button to add items to your cart',
    cartStep02: 'Update cart quantity by pressing "+" and "-" button',
    cartStep03: 'Complete the payment by pressing "Proceed to checkout" button',
    profileStep01: 'Go to profile by pressing "Profile" in headet',
    profileStep02: 'Edit the profile details by pressing the "Edit" button',
    profileStep03: 'Delete the profile by pressing the "Delete" button',
    step01: 'Step 01',
    step02: 'Step 02',
    step03: 'Step 03'
  },
  aboutUsPage: {
    aboutUs: 'About Us',
    back: 'Back',
    para1:
      "At Neutron, we all come to work everyday because we want to solve the biggest problem in mobile. Everyone is guessing. Publishers don't know what apps to build, how to monetize them, or given what to price them at. Advertizers and brands don't know where there target users are, how to reach them, or even how much they need to spend in order to do so. Investors aren't sure which apps and genres are proving the quickest, and where users are really spending there time(and money).",
    para2:
      'Throughout the history of buisness, people use data to make more informed decisions. Our mission at Neutron is to make the app economy more transparent. Today we provide the most actionable mobile app data and insights in the industry. We want to make this data available to as many people as possible.(not just the top %5)'
  },
  savedCardsPage: {
    title: 'Your Cards',
    subTitle: 'All your cards',
    buttonAddCard: 'Add New Card',
    buttonEditCard: 'Edit Card',
    searchLabel: 'Search Cards',
    searchPlaceHolder: 'Search Cards....'
  },
  addItemsForm: {
    title: 'Add New Item',
    subTitle: 'Add your items',
    addItem: 'Add Item',
    locationText: 'Set Item’s Actual location',
    next: 'Next',
    back: 'Back',
    searchItems: 'Search Items...',
    cancel: 'Cancel',

    itemCategory: 'Item Category',
    itemCategoryRequiredError: 'Item Category is required',
    itemCategoryPlaceholder: 'Select Item Category',

    itemName: 'Item Name',
    itemNameRequiredError: 'Item Name is required',
    itemNamePlaceholder: 'Enter Item Name',

    brand: 'Brand',
    brandRequiredError: 'Brand is required',
    brandPlaceholder: 'Enter Brand',

    quantity: 'Quantity',
    quantityRequiredError: 'Quantity is required',
    quantityPlaceholder: 'Enter Quantity',

    unitPrice: 'Unit Price (LKR.)',
    unitPriceRequiredError: 'Unit Price is required',
    unitPricePlaceholder: 'Enter Unit Price',

    skuNumber: 'SKU Number',
    skuNumberRequiredError: 'SKU Number is required',
    skuNumberPlaceholder: 'Enter SKU Number',

    description: 'Description',
    descriptionRequiredError: 'Description is required',
    descriptionPlaceholder: 'Enter Description',

    itemAddress: 'Item available Address',
    itemAddressRequiredError: 'Item Address is required',
    itemAddressPlaceholder: 'Enter Item Address',

    longtitude: 'Longitude ',
    longtitudeRequiredError: 'Longtitude is required',
    longtitudePlaceholder: 'Enter Longtitude',

    latitude: 'Latitude',
    latitudeRequiredError: 'Latitude is required',
    latitudePlaceholder: 'Enter Latitude'
  },
  uploadPhotoModal: {
    title: 'Upload Photo',
    subTitle: 'Choose your profile piture',
    buttonTakePhoto: 'Take a photo',
    buttonChooseFromLibrary: 'Choose from library'
  },
  viewCartPage: {
    title: 'My Cart',
    subTotal: 'Subtotal',
    totalAmount: 'Total Amount',
    items: 'items',
    checkoutBtn: 'Proceed to checkout',
    removeBtn: 'Remove'
  },
  viewItemPage: {
    title: 'All Items',
    subTitle: 'Find your items',
    searchLabel: 'Search Items',
    searchPlaceHolder: 'Search Items....',
    removeBtn: 'Remove',
    editBtn: 'Edit',
    addBtn: 'Add'
  }
};

export default en;
