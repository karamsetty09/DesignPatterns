import { blue, neutral, yellow, green, red  } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: blue[300],
    primaryHoverColor: blue[200],
    primaryActiveColor: blue[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    // primaryFont: primaryFont
    primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}