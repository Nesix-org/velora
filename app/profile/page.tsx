// app/profile/page.tsx
"use client"

import { useAuth } from "@/components/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user,router])

  if (!user) return null

  return <div className="p-5 flex flex-col gap-2 items-center justify-center">
    <span>Welcome, {user.name}</span>
    <span>{user.email}</span>
  </div>
}