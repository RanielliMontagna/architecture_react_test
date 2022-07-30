import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import * as Sentry from '@sentry/react';

import { Public, Private, Loading } from 'components';

import useAuth from 'store/auth/auth';

export const Router = () => {
  const Login = lazy(() => import('../containers/login/login'));
  const Home = lazy(() => import('../containers/home/home'));

  const { isAuthenticated } = useAuth();
  const RoutesWithSentry = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RoutesWithSentry>
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
        </RoutesWithSentry>
      </Suspense>
    </BrowserRouter>
  );
};
