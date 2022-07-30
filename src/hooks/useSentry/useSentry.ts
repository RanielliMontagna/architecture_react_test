import { useEffect } from 'react';
import { useLocation, useNavigationType, createRoutesFromChildren, matchRoutes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import useAuth from 'store/auth/auth';

const useSentry = () => {
  const { profile } = useAuth();

  // Não enviar erros para o Sentry no ambiente de desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (Sentry && Sentry.init && typeof Sentry.init === 'function') {
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRY_DSN,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.reactRouterV6Instrumentation(
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes
          ),
        }),
      ],
      normalizeDepth: 10,
      environment: process.env.NODE_ENV,
      release: process.env.REACT_APP_SENTRY_RELEASE,

      // To set a uniform sample rate
      tracesSampleRate: 0.2,
    });
  }

  Sentry.configureScope((scope) => {
    scope.setUser({
      username: profile?.name,
      //Outras informações do usuário que podem ser usadas no Sentry
    });
  });
};

export default useSentry;
