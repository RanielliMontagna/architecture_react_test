import create from 'zustand';
import decode from 'jwt-decode';

import type { AuthStates, AuthStore } from './auth.types';

import { getLocalToken, setLocalToken, removeLocalToken } from 'helpers';
import { getSessionToken, setSessionToken, removeSessionToken } from 'helpers';

const defaultState: AuthStates = {
  token: null,
  isAuthenticated: false,
  profile: undefined,
};
let initialState = defaultState;

const token = getSessionToken() ?? getLocalToken();

if (token) {
  initialState = {
    token: token,
    isAuthenticated: true,
    profile: decode(token),
  };
}

const useAuth = create<AuthStore>((set) => ({
  ...initialState,
  setToken: (token, remember) => {
    if (remember) setLocalToken(token);
    if (token) setSessionToken(token);

    set(() => {
      if (!token) return defaultState;
      return {
        token: token,
        isAuthenticated: true,
        profile: decode(token),
      };
    });
  },
  clearStore: () => {
    removeSessionToken();
    removeLocalToken();
    set(defaultState);
  },
}));

export default useAuth;
