import Layout from './layout/layout';
import * as styled from './login.styles';

import useLogin from './useLogin';

const Login = () => {
  const { handleSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <styled.DivLogin>
          <h1>Entre por aqui :)</h1>

          <styled.Input type="text" placeholder="Usuário" />
          <styled.Input type="password" placeholder="Senha" />

          <styled.ButtonEnter type="submit">Entrar</styled.ButtonEnter>
        </styled.DivLogin>
        <Layout />
      </div>
    </form>
  );
};

export default Login;
