export interface Theme {
  shades: {
    white: string;
    black: string;
    bg: string;
  };
  tbPrimary: {
    default: string;
    mute: string;
  };
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}