'use client'

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/date"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
  articles: Array<{
    id: number
    title: string
    date: string
    image: string
    href: string
  }>
}

const quickLinks = [
  { title: "Actualités", href: "/actualites", isActive: (path: string) => path.startsWith("/actualites") },
  { title: "Communiqués", href: "/communiques", isActive: (path: string) => path.startsWith("/communiques") },
  { title: "Discours", href: "/discours", isActive: (path: string) => path.startsWith("/discours") },
  { title: "Photos/Vidéos", href: "/medias", isActive: (path: string) => path.startsWith("/media") },
]

export function Sidebar({ className, articles }: SidebarProps) {
  const pathname = usePathname()
  return (
    <aside className={cn("space-y-8", className)}>
      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold p-4 bg-yellow-400 text-white">Liens rapides</h2>
        <nav className="p-4">
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-2 px-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900",
                    link.isActive(pathname) && "bg-primary text-white hover:bg-primary hover:text-white",
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Recent Articles */}
      <div className="bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold p-4 border-b">Articles récents</h2>
        <div className="divide-y">
          {articles.map((article) => (
            <article key={article.id} className="p-4">
              <Link href={article.href} className="flex gap-4">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{article.title}</h3>
                  <time className="text-sm text-gray-500">{formatDate(article.date)}</time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </aside>
  )
}

