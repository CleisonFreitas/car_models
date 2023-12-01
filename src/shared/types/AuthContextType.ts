export type AuthContextType = {
  user: string;
  isLogged: boolean;
  login: (name:string) => void;
  logout: () => void;
};
