export type Token = string | null;

export interface IProfile {
  name: string;
}

export interface AuthStates {
  isAuthenticated: boolean;
  token: Token;
  profile?: IProfile;
}
export interface AuthStore extends AuthStates {
  setToken: (token: Token, remember?: boolean) => void;
  clearStore: () => void;
}
