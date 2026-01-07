"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Leaf className="w-6 h-6" />
          <span>Smart Crop Advisory</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition">
            Home
          </Link>
          <Link href="/recommend" className="text-foreground hover:text-primary transition">
            Get Recommendation
          </Link>
        </nav>
      </div>
    </header>
  )
}
