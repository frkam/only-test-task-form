import { Routing } from '@/pages/routing';
import { withProviders } from './providers';
import { GlobalStyles } from '@/app/styles/global';
import { Header } from '@/widgets/header';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routing />
    </>
  );
};

export default withProviders(App);
