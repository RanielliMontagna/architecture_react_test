import create from 'zustand';
import { AppStore } from './app.types';

const useApp = create<AppStore>((set) => ({
  loading: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
}));

export default useApp;
