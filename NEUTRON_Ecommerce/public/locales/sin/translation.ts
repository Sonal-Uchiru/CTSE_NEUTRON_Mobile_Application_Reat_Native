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

    contact: 'ඇමතුම් අංකය',
    contactRequiredError: 'ඇමතුම් අංකය අවශ්ය වේ',
    contactPlaceholder: 'ඇමතුම් අංකය ඇතුලත් කරන්න',

    lastName: 'අවසන් නම',
    lastNameRequiredError: 'අවසාන නම අවශ්ය වේ',
    lastNamePlaceholder: 'අවසාන නම ඇතුලත් කරන්න',

    reEnterPassword: 'මුරපදය යළි ඇතුළු කරන්න',
    misMatchErrorMessage: 'මුරපද නොගැලපීම',
    reEnterPasswordRequiredError: 'මුරපදය නැවත ඇතුළත් කිරීම අවශ්‍ය වේ',
    reEnterPasswordPlaceholder: 'මුරපදය යළි ඇතුළු කරන්න',

    displayName: 'ප්රදර්ශන නාමය',
    displayNameRequiredError: 'ප්රදර්ශන නාමය අවශ්‍ය වේ',
    displayNamePlaceholder: 'ප්රදර්ශන නාමය',

    cardNumber: 'කාඩ්පත් අංකය',
    cardNumberRequiredError: 'කාඩ්පත් අංකය අවශ්‍ය වේ',
    cardNumberPlaceholder: 'කාඩ්පත් අංකය',

    name: "කාඩ්පත් ලාභියාගේ නම",
    nameRequiredError: "කාඩ්පත් ලාභියාගේ නම අවශ්‍ය වේ",
    namePlaceholder: "කාඩ්පත් ලාභියාගේ නම",

    date: "කල්පිරෙන දිනය",
    dateRequiredError: "කල්පිරෙන දිනය අවශ්‍ය වේ",
    datePlaceholder: "කල්පිරෙන දිනය",
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
    deleteMyAccount: 'මගේ ගිණුම මකන්න',
    addToCart: 'කරත්තයට එකතු කරන්න'
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
    title: 'Neutron වෙත සාදරයෙන් පිළිගනිමු',
    login: 'ඇතුල් වන්න',
    signUp: 'ලියාපදිංචි වන්න',
    createAccountLink: "ගිණුමක් නැද්ද?"
  },
  registerPage: {
    registerBtnTitle: 'ගිණුම තනන්න',
    termsAndConditions:
      'ගිණුම සාදන්න බොත්තම ක්ලික් කිරීමෙන් ඔබ නියම සහ කොන්දේසි වලට එකඟ වේ.',
    alreadyHaveAccount: 'දැනටමත් ගිණුමක් තිබේද?',
    loginHere: 'මෙතනින් ලොග් වෙන්න',
    terms:'නියම සහ කොන්දේසි',
    back: 'ආපසු'
  },
  helpPage: {
    help: 'උදව්',
    subTopic: 'ඔබට උදව් අවශ්‍ය ප්‍රදේශයක් තෝරන්න',
    profileTopic: 'ඔබගේ පැතිකඩ කළමනාකරණය කරන්න',
    cartTopic: 'කරත්තයට අයිතම එකතු කරන්න',
    cardTopic: 'ඔබගේ කාඩ්පත් කළමනාකරණය කරන්න',
    cardStep01: 'සංචාලන පටිත්තෙහි කාඩ්පත් නිරූපකය තෝරන්න',
    cardStep02:
      '"නව කාඩ්පත එක් කරන්න" බොත්තම ක්ලික් කිරීමෙන් නව කාඩ්පත එක් කරන්න',
    cardStep03:
      '"කාඩ්පත් සංස්කරණය කරන්න" ක්ලික් කිරීමෙන් කාඩ්පත් සංස්කරණය කරන්න',
    cartStep01:
      'ඔබගේ කරත්තයට අයිතම එක් කිරීමට "කරත්තයට එකතු කරන්න" බොත්තම ඔබන්න',
    cartStep02: '"+" සහ "-" බොත්තම එබීමෙන් කරත්ත ප්‍රමාණය යාවත්කාලීන කරන්න',
    cartStep03: '"පරීක්ෂා කිරීම වෙත යන්න" බොත්තම එබීමෙන් ගෙවීම සම්පූර්ණ කරන්න',
    profileStep01: 'ශීර්ෂයේ "පැතිකඩ" එබීමෙන් පැතිකඩ වෙත යන්න',
    profileStep02: '"Edit" බොත්තම එබීමෙන් පැතිකඩ විස්තර සංස්කරණය කරන්න',
    profileStep03: '"මකන්න" බොත්තම එබීමෙන් පැතිකඩ මකන්න',
    step01: 'පියවර 01',
    step02: 'පියවර 02',
    step03: 'පියවර 03'
  },
  aboutUsPage: {
    aboutUs: 'අපි ගැන',
    back: 'ආපසු යන්න',
    para1:
      'Neutron වලදී, අපි හැමෝම හැමදාම වැඩට එන්නේ මොබයිල් එකේ තියෙන ලොකුම ප්‍රශ්නය විසඳන්න ඕන නිසා. හැමෝම අනුමාන කරනවා. ප්‍රකාශකයින් කුමන යෙදුම් ගොඩනඟන්නේද, ඒවායින් මුදල් ඉපැයීම කරන්නේ කෙසේද, හෝ ඒවායේ මිල කුමක් දැයි නොදනී. ප්‍රචාරකයින් සහ සන්නාමයන් ඉලක්කගත පරිශීලකයින් සිටින්නේ කොතැනද, ඔවුන් වෙත ළඟා වන්නේ කෙසේද, හෝ එසේ කිරීමට කොපමණ මුදලක් වැය කළ යුතුද යන්න පවා නොදනී. කුමන යෙදුම් සහ ප්‍රභේද වේගවත්ම ඔප්පු කරන්නේ දැයි ආයෝජකයින්ට විශ්වාස නැත, සහ පරිශීලකයින් සැබවින්ම එහි කාලය (සහ මුදල්) වැය කරන්නේ කොතැනද යන්නයි.',
    para2:
      'ව්‍යාපාර ඉතිහාසය පුරාවටම, මිනිසුන් වඩාත් දැනුවත් තීරණ ගැනීමට දත්ත භාවිතා කරයි. Neutron හි අපගේ මෙහෙවර වන්නේ යෙදුම් ආර්ථිකය වඩාත් විනිවිද පෙනෙන බවට පත් කිරීමයි. අද අපි කර්මාන්තයේ වඩාත්ම ක්‍රියාකාරී ජංගම යෙදුම් දත්ත සහ තීක්ෂ්ණ බුද්ධිය සපයන්නෙමු. අපට මෙම දත්ත හැකිතාක් පිරිසකට ලබා දීමට අවශ්‍යයි.(ඉහළම %5 පමණක් නොවේ)'
  },
  savedCardsPage: {
    title: 'ඔබේ කාඩ්පත්',
    subTitle: 'ඔබගේ සියලුම කාඩ්පත්',
    buttonAddCard: 'නව කාඩ්පත එක් කරන්න',
    buttonEditCard: 'කාඩ්පත සංස්කරණය කරන්න',
    searchLabel: 'කාඩ්පත් සොයන්න....',
    searchPlaceHolder: 'කාඩ්පත් සොයන්න'
  },
  addItemsForm: {
    title: 'නව අයිතමයක් එක් කරන්න',
    subTitle: 'ඔබේ අයිතම එකතු කරන්න',
    addItem: 'අයිතමය එකතු කරන්න',
    locationText: 'අයිතමයේ සැබෑ ස්ථානය සකසන්න',
    next: 'ඊළඟ',
    back: 'ආපසු යන්න',
    searchItems: 'අයිතම සොයන්න...',

    itemCategory: 'අයිතම කාණ්ඩය',
    itemCategoryRequiredError: 'අයිතම කාණ්ඩය අවශ්ය වේ',
    itemCategoryPlaceholder: 'අයිතම කාණ්ඩය තෝරන්න',

    itemName: 'භාණ්ඩයෙ නම',
    itemNameRequiredError: 'අයිතමයේ නම අවශ්‍ය වේ',
    itemNamePlaceholder: 'අයිතමයේ නම ඇතුළත් කරන්න',

    brand: 'වෙළඳ නාමය',
    brandRequiredError: 'වෙළඳ නාමය අවශ්ය වේ',
    brandPlaceholder: 'වෙළඳ නාමය ඇතුළත් කරන්න',

    quantity: 'ප්රමාණය',
    quantityRequiredError: 'ප්‍රමාණය අවශ්‍ය වේ',
    quantityPlaceholder: 'ප්‍රමාණය ඇතුලත් කරන්න',

    unitPrice: 'ඒකක මිල (LKR.)',
    unitPriceRequiredError: 'ඒකක මිල අවශ්ය වේ',
    unitPricePlaceholder: 'ඒකක මිල ඇතුලත් කරන්න',

    skuNumber: 'SKU අංකය',
    skuNumberRequiredError: 'SKU අංකය අවශ්‍යයි',
    skuNumberPlaceholder: 'SKU අංකය ඇතුලත් කරන්න',

    description: 'විස්තර',
    descriptionRequiredError: 'විස්තරය අවශ්ය වේ',
    descriptionPlaceholder: 'විස්තරය ඇතුලත් කරන්න',

    itemAddress: 'අයිතමය ලබා ගත හැකි ලිපිනය',
    itemAddressRequiredError: 'අයිතමයේ ලිපිනය අවශ්‍ය වේ',
    itemAddressPlaceholder: 'අයිතමයේ ලිපිනය ඇතුළත් කරන්න',

    longtitude: 'දේශාංශ',
    longtitudeRequiredError: 'දේශාංශ අවශ්ය වේ',
    longtitudePlaceholder: 'දේශාංශ ඇතුලත් කරන්න',

    latitude: 'අක්ෂාංශ',
    latitudeRequiredError: 'අක්ෂාංශ අවශ්ය වේ',
    latitudePlaceholder: 'අක්ෂාංශ ඇතුලත් කරන්න'
  },
  uploadPhotoModal: {
    title: 'ඡායාරූපය උඩුගත කරන්න',
    subTitle: 'ඔබගේ පැතිකඩ ආකෘතිය තෝරන්න',
    buttonAddCard: 'පින්තුරයක් ගන්න',
    buttonEditCard: 'ගැලරියෙන් තෝරන්න'
  },
  viewCartPage: {
    title: 'මගේ කරත්තය',
    subTotal: 'උප එකතුව',
    totalAmount: 'මුලු වටිනාකම',
    items: 'අයිතම',
    checkoutBtn: 'පරීක්ෂා කිරීම වෙත යන්න',
    removeBtn: 'ඉවත් කරන්න'
  },

  viewItemPage:{
    title: 'සියලු අයිතම',
    subTitle: 'ඔබේ අයිතම සොයා ගන්න',
    searchLabel: 'අයිතම සොයන්න',
    searchPlaceHolder: 'අයිතම සොයන්න....',
    removeBtn: 'ඉවත් කරන්න',
    editBtn: 'සංස්කරණය කරන්න'
  },

  adminViewCustomersPage:{
    title: 'වත්මන් පාරිභෝගිකයින්',
    subTitle: 'සියලුම වත්මන් පාරිභෝගිකයින්',
    searchLabel: 'ගනුදෙනුකරුවන් සොයන්න',
    searchPlaceHolder: 'ගනුදෙනුකරුවන් සොයන්න....',
    name: 'නම',
    email: 'විද්යුත් තැපෑල',
    contact: 'ඇමතුම් අංකය'
  },

  termsAndConditionsPage: {
    terms: 'නියුට්‍රෝන යෙදුමේ නියම සහ කොන්දේසි',
    back: 'ආපසු යන්න',
    topic1: 'ගිණුම් ලියාපදිංචිය',
    topic2: 'ගෙවීම් ක්රම',
    topic3: 'මිල',
    topic4: 'සේවා නැවත විකිණීම',
    topic5: 'රහස්යතා ප්රතිපත්තිය',
    para1:
      "නියුට්‍රෝන යෙදුම වෙත සාදරයෙන් පිළිගනිමු. මෙම නියමයන් සහ කොන්දේසි නියුට්‍රෝන යෙදුම භාවිතය සඳහා නීති රීති ගෙනහැර දක්වයි. මෙම වෙබ් අඩවියට පිවිසීමෙන් ඔබ මෙම නියමයන් සහ කොන්දේසි සම්පූර්ණයෙන්ම පිළිගන්නා බව අපි උපකල්පනය කරමු. ඔබ මෙම පිටුවේ දක්වා ඇති සියලුම නියමයන් සහ කොන්දේසි පිළි නොගන්නේ නම්, Neutron's යෙදුම දිගටම භාවිතා නොකරන්න.",
    para2:
      'සේවාව භාවිතා කිරීම සඳහා පරිශීලකයන් ලියාපදිංචි කිරීම හෝ පරිශීලක ගිණුමක් නිර්මාණය කළ යුතුය, අවශ්ය සියලු දත්ත හෝ තොරතුරු සම්පූර්ණ සහ සත්යවාදී ආකාරයෙන් ලබා දීම. එසේ කිරීමට අපොහොසත් වීම සේවාව ලබා ගැනීමට නොහැකි වීමට හේතු වේ.\n\nඔවුන්ගේ පිවිසුම් අක්තපත්‍ර රහසිගතව සහ ආරක්ෂිතව තබාගැනීම සඳහා පරිශීලකයන් වගකිව යුතුය. මෙම හේතුව නිසා, මෙම යෙදුම මඟින් අවසර දී ඇති ඉහළම ප්‍රමිතීන්ට අනුකූල වන මුරපද තෝරා ගැනීමට පරිශීලකයින්ට අවශ්‍ය වේ.\n\nලියාපදිංචි වීමෙන්, පරිශීලකයන් තම පරිශීලක නාමය සහ මුරපදය යටතේ සිදුවන සියලුම ක්‍රියාකාරකම් සඳහා පූර්ණ වගකීමක් දැරීමට එකඟ වේ. පරිශීලක ගිණුම්, ප්‍රවේශ අක්තපත්‍ර හෝ පුද්ගලික දත්ත ඇතුළුව නමුත් ඒවාට පමණක් සීමා නොවන ඔවුන්ගේ පුද්ගලික තොරතුරු උල්ලංඝනය වී, අනවශ්‍ය ලෙස හෙළිදරව් කර හෝ සොරකම් කර ඇතැයි සිතන්නේ නම්, පරිශීලකයන් මෙම ලේඛනයේ දක්වා ඇති සම්බන්ධතා තොරතුරු හරහා හිමිකරුට වහාම සහ නිසැක ලෙස දැනුම් දිය යුතුය.',
    para3:
      'මිලදී ගැනීමේ ක්‍රියාවලියේදී පිළිගත් ගෙවීම් ක්‍රමවලට අදාළ තොරතුරු ලබා ගත හැක.\n\nසමහර ගෙවීම් ක්‍රම ලබා ගත හැක්කේ අමතර කොන්දේසි හෝ ගාස්තුවලට යටත්ව පමණි. එවැනි අවස්ථාවන්හිදී අදාළ තොරතුරු මෙම යෙදුමේ කැපවූ කොටසෙහි සොයාගත හැකිය.',  
    para4:
      'මිලදී ගැනීමේ ක්‍රියාවලියේදී සහ ඇණවුම ඉදිරිපත් කිරීමට පෙර, ඔවුන්ගෙන් අය කරනු ලබන ඕනෑම ගාස්තු, බදු සහ පිරිවැය (ඇත්නම්, බෙදාහැරීමේ පිරිවැය ඇතුළුව) ගැන පරිශීලකයින්ට දැනුම් දෙනු ලැබේ.\n\nමෙම යෙදුමේ මිල ගණන් ප්‍රදර්ශනය කෙරේ: ඕනෑම එකක් හැර හෝ ඇතුළත් පරිශීලකයා බ්‍රවුස් කරන කොටස අනුව අදාළ ගාස්තු, බදු සහ වියදම්.',
    para5:
      'පරිශීලකයින්ට සෘජුව හෝ නීත්‍යානුකූල නැවත විකුණුම් වැඩසටහනක් හරහා ලබා දී ඇති හිමිකරුගේ ලිඛිත පූර්ව අවසරයකින් තොරව මෙම යෙදුමේ සහ එහි සේවාවේ කිසිදු කොටසක් ප්‍රතිනිෂ්පාදනය කිරීම, අනුපිටපත් කිරීම, පිටපත් කිරීම, විකිණීම, නැවත විකිණීම හෝ සූරාකෑම නොකළ හැකිය.',  
    para6:
      'ඔවුන්ගේ පුද්ගලික දත්ත භාවිතය පිළිබඳ වැඩිදුර දැන ගැනීමට, පරිශීලකයන් මෙම යෙදුමේ රහස්‍යතා ප්‍රතිපත්තිය වෙත යොමු විය හැක.'
  },

  addCardPage:{
    title: 'කාඩ්පත එක් කරන්න',
    subTitle: 'ඔබගේ හර/ක්‍රෙඩිට් කාඩ්පත එක් කරන්න',
    buttonTitle: 'කාඩ්පතක් එක් කරන්න'
  },

  editCardPage:{
    title: 'කාඩ්පත සංස්කරණය කරන්න',
    subTitle: 'ඔබගේ හර/ක්‍රෙඩිට් කාඩ්පත සංස්කරණය කරන්න',
    cancelButtonTitle:'අවලංගු කරන්න',
    saveButtonTitle:'සුරකින්න',
    deleteButtonTitle:'මකා දමන්න',

  }

};

export default sin;
