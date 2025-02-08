import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type React from "react" // Added import for React

interface ComponentPageLayoutProps {
  title: string
  description: string
  imageSrc: string
  children: React.ReactNode
}

export function ComponentPageLayout({ title, description, imageSrc, children }: ComponentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900">
                    Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">{title}</span>
              </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 prose prose-gray max-w-none">{children}</div>
          </article>
        </div>
      </main>
    </div>
  )
}

