import { AuthState } from "@/types/AuthType";
import { create } from "zustand";

const defaultState = {
  isLoggedIn: false,
  isLoading: false,
  error: "",
  userInfo: "",
};

export const useAuthStore = create<AuthState>((set) => ({
  ...defaultState,

  login: async (email, password) => {
    set({isLoading: true, error: "" });

    try {
      /*const response = await fetch("https://tu-api.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en las credenciales");
      }
      */

      set({
        isLoggedIn: true,
        userInfo: "", //data.user,
        isLoading: false,
      });
    } catch (error: any) {
      console.error("Login falló:", error);
      set({
        isLoggedIn: false,
        error: error.message || "Ocurrió un error inesperado",
        isLoading: false,
      });
    }
  },

  logout: () => {
    set({ ...defaultState });
  },

  clearError: () => set({ error: "" }),
}));
