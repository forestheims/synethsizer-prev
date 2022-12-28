import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    modulo: 2,
    multiplier: 90,
    displayed: 'Wave Frequency',
    toneClicked: false,
  });

  const contextValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      'Error: useTheme needs to be called within a ThemeProvider'
    );
  }
  return context;
};
