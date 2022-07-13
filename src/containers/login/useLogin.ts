import { FormEvent } from 'react';
import { useApp, useAuth } from 'store';

const useLogin = () => {
  const { setIsAuthenticated, setProfile } = useAuth();
  const { setLoading } = useApp();

  const handleSubmit = (e: FormEvent) => {
    setLoading(true);

    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
      setProfile({ name: 'John Doe', email: 'johndoe@gmail.com' });
    }, 2000);

    e.preventDefault();
  };

  return { handleSubmit };
};

export default useLogin;
