"use client"

import { InitializeSync } from "@/components/portal/initialize-sync"
import { useRouter } from "next/navigation"

export default function SyncPage() {
  const router = useRouter()

  return (
    <InitializeSync 
      onComplete={() => router.push("/portal")} 
    />
  )
}
