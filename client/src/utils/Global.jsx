import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, typeScale } from './typography';
import { lightTheme } from './themes';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textSecondary};
  }

  h1 {
    font-size: ${typeScale.header1};
  }
  h2 {
    font-size: ${typeScale.header2};
  }
  h3 {
    font-size: ${typeScale.header3};
  }
  h4 {
    font-size: ${typeScale.header4};
  }
  h5 {
    font-size: ${typeScale.header5};
  }
`;
