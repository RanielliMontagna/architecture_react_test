import { useForm } from 'react-hook-form';

import { LoginFormValues } from './login.types';
import * as styled from './login.styles';

import Layout from './layout/layout';

import useLogin from './useLogin';
import { composeRules, minLength, required } from 'utils/rules';

const Login = () => {
  const { onSubmit } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <styled.DivLogin>
          <h1>Entre por aqui :)</h1>

          <styled.Input type="text" placeholder="Usuário" {...register('user', required)} />
          {errors.user && <styled.Error>{errors.user.message}</styled.Error>}

          <styled.Input
            type="password"
            placeholder="Senha"
            autoComplete="off"
            {...register('password', composeRules([required, minLength(6)]))}
          />
          {errors.password && <styled.Error>{errors.password.message}</styled.Error>}

          <styled.ButtonEnter type="submit">Entrar</styled.ButtonEnter>
        </styled.DivLogin>
        <Layout />
      </div>
    </form>
  );
};

export default Login;
