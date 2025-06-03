"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LoginModal } from "@/components/modals/login-modal"
import { RegisterModal } from "@/components/modals/register-modal"
import { UserMenu } from "@/components/ui/user-menu"
import { AccountModal } from "@/components/modals/account-modal"
import { Logo } from "@/components/ui/logo"
import { useScrollEffect } from "@/hooks/use-scroll-effect"
import { useUIStore } from "@/stores/ui-store"
import { useAuthStore } from "@/stores/auth-store"

export function Header() {
  const isScrolled = useScrollEffect()
  const {
    isLoginModalOpen,
    setLoginModalOpen,
    isRegisterModalOpen,
    setRegisterModalOpen,
    isAccountModalOpen,
    setAccountModalOpen,
  } = useUIStore()
  const { isAuthenticated } = useAuthStore()

  const handleRegisterClick = () => {
    setRegisterModalOpen(true)
  }

  if (isAuthenticated) {
    return (
      <>
        <header
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserMenu />
            </div>
          </div>
        </header>

        <Dialog open={isAccountModalOpen} onOpenChange={setAccountModalOpen}>
          <DialogContent className="sm:max-w-4xl" style={{ zIndex: 10000 }}>
            <AccountModal />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setLoginModalOpen(true)}>
              Sign In
            </Button>
            <Button variant="default" onClick={handleRegisterClick}>
              Register
            </Button>
          </div>
        </div>
      </header>

      <Dialog open={isLoginModalOpen} onOpenChange={setLoginModalOpen}>
        <DialogContent className="sm:max-w-md">
          <LoginModal />
        </DialogContent>
      </Dialog>

      <Dialog open={isRegisterModalOpen} onOpenChange={setRegisterModalOpen}>
        <DialogContent className="sm:max-w-md">
          <RegisterModal />
        </DialogContent>
      </Dialog>
    </>
  )
}
