import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/app/styles/theme';

export const withStyled = (component: () => ReactNode) => () => {
  return <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
};
