import type React from "react"
import { Sidebar } from "@/components/PressSidebar"
import { articles } from "@/config/articles"

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">{children}</main>
          <Sidebar className="w-full lg:w-80 lg:top-4" articles={articles} />
        </div>
      </div>
    </div>
  )
}

