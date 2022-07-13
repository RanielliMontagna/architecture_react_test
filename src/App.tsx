import { useApp } from 'store';

import { Router } from 'routes';
import GlobalStyle from 'styles/globalStyles';
import { Loading } from 'components';

const App = () => {
  const { loading } = useApp();

  return (
    <>
      <GlobalStyle />
      <Router />
      {loading && <Loading />}
    </>
  );
};

export default App;
