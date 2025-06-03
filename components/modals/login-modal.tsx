"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SocialLoginButton } from "@/components/ui/social-login-button"
import { Eye, EyeOff, User, Lock } from "lucide-react"
import Link from "next/link"
import { useAuthStore } from "@/stores/auth-store"
import { useUIStore } from "@/stores/ui-store"
import { useRouter } from "next/navigation"

export function LoginModal() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const { login, loginWithSocial, isLoading } = useAuthStore()
  const { setLoginModalOpen, setRegisterModalOpen } = useUIStore()
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSocialLogin = async (provider: string) => {
    try {
      await loginWithSocial(provider)
      setLoginModalOpen(false)
      router.push("/dashboard")
    } catch (error) {
      console.error("Social login failed:", error)
    }
  }

  const handleLogin = async () => {
    try {
      await login(formData)
      setLoginModalOpen(false)
      // Force a page refresh to ensure proper state update
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const handleRegisterClick = () => {
    setLoginModalOpen(false)
    setRegisterModalOpen(true)
  }

  const socialProviders = [
    { name: "apple", label: "Apple" },
    { name: "google", label: "Google" },
    { name: "microsoft", label: "Microsoft" },
  ]

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-center">Login to your account</DialogTitle>
      </DialogHeader>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-3 gap-3">
        {socialProviders.map((provider) => (
          <SocialLoginButton
            key={provider.name}
            provider={provider.name}
            onClick={() => handleSocialLogin(provider.name)}
            disabled={isLoading}
          />
        ))}
      </div>

      {/* Username Field */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="User"
          className="pl-10 h-12"
          value={formData.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Password Field */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="pl-10 pr-10 h-12"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          disabled={isLoading}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="text-left">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      {/* Login Button */}
      <Button
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
        onClick={handleLogin}
        disabled={isLoading || !formData.username || !formData.password}
      >
        {isLoading ? "Logging in..." : "Log in"}
      </Button>

      {/* Register Link */}
      <div className="text-center text-sm text-gray-600">
        Do not have an account?{" "}
        <button onClick={handleRegisterClick} className="text-blue-600 hover:underline">
          Register
        </button>
      </div>
    </div>
  )
}
