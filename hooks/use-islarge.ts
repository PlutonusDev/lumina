"use client"
import { useState, useEffect } from "react"

export function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1024) // 1024px is Tailwind's 'lg'
    checkSize() // Initial check
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return isLarge
}