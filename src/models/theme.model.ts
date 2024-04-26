export interface Theme {
  shades: {
    white: string;
    black: string;
    grey: string;
    bg: string;
    lightGrey: string;
  };
  primary: {
    default: string;
    mute: string;
  };
  secondary: {
    default: string;
  };
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}