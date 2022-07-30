import { useSnackbar } from 'notistack';
import { useApp, useAuth } from 'store';
import { LoginFormValues } from './login.types';

const useLogin = () => {
  const { setToken } = useAuth();
  const { setLoading } = useApp();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = ({ password }: LoginFormValues) => {
    setLoading(true);

    setTimeout(() => {
      if (password === '123456') {
        setToken(
          'eyJuYW1lIjoiUmFubmkiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.yHb_4ULIqAbLjYpu7C06b86bQp7Tnuh4puD9po1pY58'
        );
        setLoading(false);
      } else {
        enqueueSnackbar('Senha incorreta', { variant: 'error', autoHideDuration: 2000 });
        setLoading(false);
      }
    }, 1000);
  };

  return { onSubmit };
};

export default useLogin;
