import { createGlobalStyle } from 'styled-components';
import { breakpoints } from '@/shared/lib/breakpoints';

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
    font-size: 38.5%;
    scroll-behavior: smooth;
    
    ${breakpoints.device.laptop} {
      font-size: 50%;
    }
    
    ${breakpoints.device.laptopL} {
      font-size: 62.5%;
    }
  }
  
  body {
    font-family: 'HelveticaNeueCyr', sans-serif;
    font-weight: 400;
    min-height: 100vh;
  }
`;
