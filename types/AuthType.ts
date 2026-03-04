import { User } from "./UserTypes";


export type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  userInfo: User;

  login: (email: string, pass: string) => Promise<void>;
  googleLogin: (token: string | undefined) => Promise<void>;
  logout: () => void;
  clearError: () => void;
};
