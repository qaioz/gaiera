import { create } from "zustand"

interface UIState {
  isLoginModalOpen: boolean
  isRegisterModalOpen: boolean
  isCreateProjectModalOpen: boolean
  isUserMenuOpen: boolean
  isAccountModalOpen: boolean
  currentSection: number
  isScrolling: boolean
  setLoginModalOpen: (open: boolean) => void
  setRegisterModalOpen: (open: boolean) => void
  setCreateProjectModalOpen: (open: boolean) => void
  setUserMenuOpen: (open: boolean) => void
  setAccountModalOpen: (open: boolean) => void
  setCurrentSection: (section: number) => void
  setIsScrolling: (scrolling: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isCreateProjectModalOpen: false,
  isUserMenuOpen: false,
  isAccountModalOpen: false,
  currentSection: 0,
  isScrolling: false,

  setLoginModalOpen: (open) => set({ isLoginModalOpen: open }),
  setRegisterModalOpen: (open) => set({ isRegisterModalOpen: open }),
  setCreateProjectModalOpen: (open) => set({ isCreateProjectModalOpen: open }),
  setUserMenuOpen: (open) => set({ isUserMenuOpen: open }),
  setAccountModalOpen: (open) => set({ isAccountModalOpen: open }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setIsScrolling: (scrolling) => set({ isScrolling: scrolling }),
}))
