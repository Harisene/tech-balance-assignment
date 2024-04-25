import React, { PropsWithChildren } from "react";
import lightTheme from "@themes/lightTheme";
import { ThemeMode } from "@models/theme";
import { Theme } from "@models/theme";

const initialState = {
  theme: ThemeMode.LIGHT,
  colors: lightTheme,
};

type ThemeContextType = {
  theme: ThemeMode;
  colors: Theme;
}

const ThemeContext = React.createContext<ThemeContextType>(initialState);

interface Props extends PropsWithChildren {}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: ThemeMode.LIGHT, colors: lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};