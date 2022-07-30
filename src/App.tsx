import { useApp } from 'store';

import { Router } from 'routes';
import { Loading } from 'components';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from 'styles/globalStyles';
import useSentry from 'hooks/useSentry/useSentry';

const App = () => {
  const { loading } = useApp();

  // Faz configurações para o Sentry
  useSentry();

  return (
    <SnackbarProvider maxSnack={3}>
      <GlobalStyle />
      <Router />
      {loading && <Loading />}
    </SnackbarProvider>
  );
};

export default App;
