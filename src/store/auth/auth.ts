import create from 'zustand';
import { AuthStore } from './auth.types';

const initialState = {
  isAuthenticated: false,
  profile: undefined,
};

const useAuth = create<AuthStore>((set) => ({
  ...initialState,

  setIsAuthenticated: (isAuthenticated) => set((state) => ({ ...state, isAuthenticated })),
  setProfile: (profile) => set((state) => ({ ...state, profile })),
  logout: () => {
    set(() => initialState);
  },
}));

export default useAuth;
