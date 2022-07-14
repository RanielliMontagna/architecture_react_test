import { useSnackbar } from 'notistack';
import { useApp, useAuth } from 'store';
import { LoginFormValues } from './login.types';

const useLogin = () => {
  const { setIsAuthenticated, setProfile } = useAuth();
  const { setLoading } = useApp();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = ({ user, password }: LoginFormValues) => {
    setLoading(true);

    setTimeout(() => {
      if (password === '123456') {
        setIsAuthenticated(true);
        setLoading(false);
        setProfile({ name: user });
      } else {
        enqueueSnackbar('Senha incorreta', { variant: 'error', autoHideDuration: 2000 });
        setLoading(false);
      }
    }, 1000);
  };

  return { onSubmit };
};

export default useLogin;
