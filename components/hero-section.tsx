"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cloud, Droplet, Sprout } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex-1 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
                Smart Crop Advisory System
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                AI-powered crop recommendation based on soil and weather conditions
              </p>
              <p className="text-base text-muted-foreground">
                Get personalized crop suggestions tailored to your soil nutrients, weather patterns, and environmental
                factors.
              </p>
            </div>

            <Link href="/recommend">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Crop Recommendation
              </Button>
            </Link>
          </div>

          {/* Right Visual Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Soil Analysis</h3>
              <p className="text-sm text-muted-foreground">Track nitrogen, phosphorus, and potassium levels</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Weather Insights</h3>
              <p className="text-sm text-muted-foreground">Monitor temperature, humidity, and rainfall data</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition col-span-2">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Recommendations</h3>
              <p className="text-sm text-muted-foreground">Get AI-powered crop suggestions with confidence scores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
