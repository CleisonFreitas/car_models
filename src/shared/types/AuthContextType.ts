export type AuthContextType = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
};
