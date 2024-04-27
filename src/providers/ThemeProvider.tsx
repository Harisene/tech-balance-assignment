import React, { PropsWithChildren } from "react";
import lightTheme from "@themes/lightTheme";
import darkTheme from "@themes/darkTheme";
import { ThemeMode } from "@models/theme.model";
import { Theme } from "@models/theme.model";

const initialState = {
  theme: ThemeMode.LIGHT,
  colors: lightTheme,
  toggleTheme: () => {},
};

type ThemeContextType = {
  theme: ThemeMode;
  colors: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>(initialState);

interface Props extends PropsWithChildren {}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeMode>(ThemeMode.LIGHT);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme === ThemeMode.LIGHT ? lightTheme : darkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
