import { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../assets/library';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [displayed, setDisplayed] = useState('Harmony');
  const [theme, setTheme] = useState(themes[displayed]);
  const [themesKeys, setThemesKeys] = useState(Object.keys(themes));

  const next = () => {
    const indexOfDisplayed = themesKeys.indexOf(displayed);
    if (displayed !== themesKeys[themesKeys.length - 1])
      setDisplayed(themesKeys[indexOfDisplayed + 1]);
  };
  const prev = () => {
    const indexOfDisplayed = themesKeys.indexOf(displayed);
    if (displayed !== themesKeys[0])
      setDisplayed(themesKeys[indexOfDisplayed - 1]);
  };

  useEffect(() => {
    setTheme(themes[displayed]);
  }, [displayed]);

  const contextValue = { theme, setTheme, displayed, next, prev };

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
