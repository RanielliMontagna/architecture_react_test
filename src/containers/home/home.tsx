import { useAuth } from 'store';
import { Button } from './home.styles';

const Home = () => {
  const { profile, logout } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h2>Olá</h2>
      <h1>{profile?.name}</h1>

      <Button onClick={logout}>Sair</Button>
    </div>
  );
};

export default Home;
