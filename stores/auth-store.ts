import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  birthday?: string
  gender?: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: { username: string; password: string }) => Promise<void>
  register: (userData: any) => Promise<void>
  loginWithSocial: (provider: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
  updateUser: (updates: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true })
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const user: User = {
            id: "1",
            firstName: "Tabatadze",
            lastName: "Gaioz",
            email: "tabatadzegaga@gmail.com",
            phone: "+1 (555) 987-6543",
            birthday: "April 7, 1994",
            gender: "Male",
            avatar: "G",
          }

          set({ user, isAuthenticated: true, isLoading: false })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      register: async (userData) => {
        set({ isLoading: true })
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const user: User = {
            id: "1",
            firstName: userData.firstName || "New",
            lastName: userData.lastName || "User",
            email: userData.email || "user@example.com",
            phone: userData.phone || "",
            birthday: userData.birthdate || "",
            gender: userData.gender || "",
            avatar: userData.firstName?.charAt(0) || "N",
          }

          set({ user, isAuthenticated: true, isLoading: false })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      loginWithSocial: async (provider) => {
        set({ isLoading: true })
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const user: User = {
            id: "1",
            firstName: "Tabatadze",
            lastName: "Gaioz",
            email: "tabatadzegaga@gmail.com",
            phone: "+1 (555) 987-6543",
            birthday: "April 7, 1994",
            gender: "Male",
            avatar: "G",
          }

          set({ user, isAuthenticated: true, isLoading: false })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
        // Force redirect to landing page
        setTimeout(() => {
          window.location.href = "/"
        }, 100)
      },

      setUser: (user) => {
        set({ user, isAuthenticated: true })
      },

      updateUser: (updates) => {
        const currentUser = get().user
        if (currentUser) {
          set({ user: { ...currentUser, ...updates } })
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
