import { Routing } from '@/pages/routing';
import { GlobalStyles } from '@/components/styled/global';
import { Header } from '@/components/header/header';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routing />
    </>
  );
};
