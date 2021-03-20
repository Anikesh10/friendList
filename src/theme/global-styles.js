import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.TEXT};
  }
`;
