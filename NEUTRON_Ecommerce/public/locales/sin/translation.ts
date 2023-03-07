const sin = {
  title: 'ආපසු සාදරයෙන් පිළිගනිමු',
  description: 'සුභ උදෑසනක්',
  test: {
    part1:
      'ආරම්භ කිරීමට, <1>src/App.js</1> සංස්කරණය කර නැවත පූරණය කිරීමට සුරකින්න.',
    part2: 'ඉහත බොත්තම් භාවිතයෙන් ඉංග්‍රීසි සහ ජර්මානු අතර භාෂාව මාරු කරන්න.'
  },
  userDemo: {
    email: 'විද්යුත් තැපෑල',
    emailPlaceholder: 'විද්යුත් තැපැල් ලිපිනය',
    password: 'මුරපදය',
    passwordPlaceholder: 'මුරපදය ඇතුළත් කරන්න'
  },
  formFields: {
    passwordValidationError: `මෙය දුර්වල මුරපදයකි`,
    passwordRequiredError: 'මුරපදය අවශ්යයි',
    password: 'මුරපදය',
    passwordPlaceholder: 'මුරපදය ඇතුළත් කරන්න',

    emailValidationError: `කරුණාකර ඊමේල් ලිපිනයෙහි '@' සහ '.com' ඇතුළත් කරන්න`,
    emailRequiredError: 'විද්‍යුත් තැපෑල අවශ්‍යයි.',
    email: 'විද්යුත් තැපෑල',
    emailPlaceholder: 'විද්යුත් තැපැල් ලිපිනය',

    firstName: 'මුල් නම',
    firstNameRequiredError: 'පළමු නම අවශ්ය වේ',
    firstNamePlaceholder: 'මුල් නම ඇතුලත් කරන්න',

    lastName: 'අවසන් නම',
    lastNameRequiredError: 'අවසාන නම අවශ්ය වේ',
    lastNamePlaceholder: 'අවසාන නම ඇතුලත් කරන්න',

    reEnterPassword: 'මුරපදය යළි ඇතුළු කරන්න',
    misMatchErrorMessage: 'මුරපද නොගැලපීම',
    reEnterPasswordRequiredError: 'මුරපදය නැවත ඇතුළත් කිරීම අවශ්‍ය වේ',
    reEnterPasswordPlaceholder: 'මුරපදය යළි ඇතුළු කරන්න'
  },
  confirmDialog: {
    confirm: 'තහවුරු කරන්න',
    confirmDescription: 'ඔබට වෙනස්කම් සුරැකීමට අවශ්‍යද?'
  },
  deleteconfirmDialog: {
    confirm: 'අවවාදයයි!',
    confirmDescription:
      'ඔබට ඇත්තටම එහි වාර්තා මකා දැමීමට අවශ්‍යද? මෙම ක්රියාවලිය ආපසු හැරවිය නොහැක.'
  },
  errorDialog: {
    error: 'දෝෂයකි!',
    errorDescription: 'මොකක්හරි වැරැද්දක් වෙලා. නැවත උත්සහ කරමු.'
  },
  unsavedLeaveDialog: {
    confirm: 'නොසුරකින ලදී!',
    confirmDescription:
      'ඔබ සුරැකීමකින් තොරව ඉවත් වුවහොත්, සියලු වෙනස්කම් නැති වනු ඇත.'
  },
  successSnackbar: {
    successDescription: 'ශාඛාව සාර්ථකව සුරැකී ඇත.'
  },
  errorSnackbar: {
    errorDescription: 'මොකක්හරි වැරැද්දක් වෙලා. නැවත උත්සහ කරමු.'
  },
  buttons: {
    save: 'සුරකින්න',
    cancel: 'අවලංගු කරන්න',
    tryAgain: 'නැවත උත්සාහ කරන්න',
    deleteConfirm: 'ඔව්, එය මකන්න!',
    leave: 'ආපසු යන්න',
    stay: 'ඉන්න',
    sendcode: 'කේතය යවන්න',
    verifyCode: 'තහවුරු කිරීමේ කේතය',
    deleteMyAccount: 'මගේ ගිණුම මකන්න'
  },
  forgotPasswordFormCommon: {
    title: 'මුරපදය අමතක වුණා ද?',
    emailValidationError: `කරුණාකර ඊමේල් ලිපිනයෙහි '@' සහ '.com' ඇතුළත් කරන්න`,
    emailRequiredError: 'විද්‍යුත් තැපෑල අවශ්‍යයි.',
    goHome: 'ගෙදර යන්න'
  },
  forgotPasswordFormStep1: {
    email: 'විද්යුත් තැපෑල',
    emailplaceholder: 'විද්යුත් තැපැල් ලිපිනය',
    info: 'අපි ඔබේ විද්‍යුත් තැපෑල වෙන කිසිවෙකු සමඟ බෙදා නොගනිමු.',
    emailValidationError: `කරුණාකර ඊමේල් ලිපිනයෙහි '@' සහ '.com' ඇතුළත් කරන්න`,
    emailRequiredError: 'විද්‍යුත් තැපෑල අවශ්‍යයි.'
  },
  forgotPasswordFormStep2: {
    code: 'කේතය ',
    codePlaceholder: 'කේතය ඇතුලත් කරන්න',
    info: 'අකුරු 6ක කේතය සඳහා ඔබට එන ලිපි පරීක්ෂා කරන්න****@gmail.com',
    codeValidationError: `කේතය අකුරු 6ක් දිග විය යුතුය`,
    codeRequiredError: 'කේතය අවශ්ය වේ'
  },
  deleteAccountConfirmDialog: {
    title: 'ඔබගේ ගිණුම මකන්න',
    subTitle: 'ඔබ යනවා දැකීම ගැන අපට කණගාටුයි',
    informaton:
      'ගිණුම මකා දැමීම අවසන් වේ. ඔබගේ ගිණුම ප්‍රතිසාධනය කිරීමට ක්‍රමයක් නොමැත.'
  },
  loginPage: {
    title: 'Agrivo වෙත සාදරයෙන් පිළිගනිමු!',
    login: 'ඇතුල් වන්න',
    register: 'ලියාපදිංචි කරන්න',
    forgotPassword: 'මුරපදය අමතක වුණා ද?'
  },
  registerPage: {
    registerBtnTitle: 'ගිණුම තනන්න',
    termsAndConditions:
      'ගිණුම සාදන්න බොත්තම ක්ලික් කිරීමෙන් ඔබ නියම සහ කොන්දේසි වලට එකඟ වේ.'
  },
  helpPage: {
    help: 'උදව්',
    subTopic: 'ඔබට උදව් අවශ්‍ය ප්‍රදේශයක් තෝරන්න',
    profileTopic: 'ඔබගේ පැතිකඩ කළමනාකරණය කරන්න',
    cartTopic: 'කරත්තයට අයිතම එකතු කරන්න',
    manageYourCart: 'ඔබගේ කාඩ්පත් කළමනාකරණය කරන්න',
    step01: 'පියවර 01'
  }
};

export default sin;
