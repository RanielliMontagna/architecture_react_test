interface Profile {
  name: string;
  email: string;
}

export interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  setProfile: (profile: Profile) => void;
  profile?: Profile;

  logout: () => void;
}
