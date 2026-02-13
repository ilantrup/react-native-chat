import { AuthState, User } from "@/types/AuthType";
import { getUserInfo } from "@/utils/GoogleUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";



const defaultState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userInfo: {
    email: "",
    name: "",
    familyName: "",
    picture: "",
    fullName: "",
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...defaultState,

      login: async (email, password) => {
        set({ isLoading: true, error: "" });
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
            userInfo: {
              email,
              name: "Ilan",
              familyName: "Trupkin",
              picture: "",
              fullName: "Ilan Trupkin",
            }, //data.user,
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
      googleLogin: async (token: string | undefined) => {
        const userInfo = await getUserInfo(token);
        set({
          isLoggedIn: true,
          userInfo,
          isLoading: false,
        });
      },

      logout: () => {
        set({ ...defaultState });
      },

      clearError: () => set({ error: "" }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo,
      }),
    },
  ),
);
