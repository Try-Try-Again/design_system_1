import {
  blue, neutral, yellow, green, red,
} from './colors';
import { monotones } from './newColors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const lightTheme = {
  backgroundPrimary: monotones.base3,
  backgroundSecondary: monotones.base2,
  textPrimary: monotones.base00,
  textSecondary: monotones.base1,
};

export const darkTheme = {
  backgroundPrimary: monotones.base03,
  backgroundSecondary: monotones.base02,
  textPrimary: monotones.base0,
  textSecondary: monotones.base01,
};
