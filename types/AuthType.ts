type User = {
  email: string;
  name: string;
};

export type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  userInfo: User;

  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
};
