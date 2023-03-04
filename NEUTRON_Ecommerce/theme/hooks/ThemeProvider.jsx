import React from 'react';
import { COLORS } from '../styles/Colors';
import { TYPOGRAPHY } from '../styles/Typography';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const theme = {
    COLORS,
    TYPOGRAPHY
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
