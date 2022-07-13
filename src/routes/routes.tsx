import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home, Login } from 'containers';

// Componentes renderizados ao redor das rotas
import { Public, Private } from 'components';
import useAuth from 'store/auth/auth';

export const Router = () => {
  const { isAuthenticated } = useAuth((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: lógica de autenticação */}
        {!isAuthenticated ? (
          <Route path="/" element={<Public />}>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        ) : (
          <Route path="/" element={<Private />}>
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
