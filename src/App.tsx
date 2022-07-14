import { useApp } from 'store';

import { Router } from 'routes';
import { Loading } from 'components';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from 'styles/globalStyles';

const App = () => {
  const { loading } = useApp();

  return (
    <SnackbarProvider maxSnack={3}>
      <GlobalStyle />
      <Router />
      {loading && <Loading />}
    </SnackbarProvider>
  );
};

export default App;
