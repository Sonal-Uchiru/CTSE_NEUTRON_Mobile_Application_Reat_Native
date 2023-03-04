const { default: useTheme } = require('./UseTheme');

const useThemedStyles = (styles) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
