export type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  userInfo: any | null;

  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
};
