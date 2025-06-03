"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { useAuthStore } from "@/stores/auth-store"

export default function Dashboard() {
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return <DashboardPage />
}
