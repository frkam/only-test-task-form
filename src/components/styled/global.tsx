import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'HelveticaNeueCyr', sans-serif;
    font-weight: 400;
    min-height: 100vh;
  }
`;
