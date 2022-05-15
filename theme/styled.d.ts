import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    headerHeight: number;
    headingSize: number;
    titleSize: number;
    bubbleShadow: string;

    colors: {
      header: string;
      primary: string;
      secondary: string;
      text: string;
      textLight: string;
      backgroundLight: string;
      error: string;
      blue: string;
      confirmBackground: string;
      backgroundDark: string;
      input: string;
      inputLabel: string;
      iconLight: string;
    };
  }
}
