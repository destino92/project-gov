import Link from "next/link"
import { ChevronRight } from "lucide-react"

import PagePagination from "@/components/Pagination"
import { ArticleCard } from "@/components/ArticleCard"
import { articles } from "@/config/articles"

export default function ActualitesPage() {
  return (
    <>
      {/* Page header */}
      <header className="bg-white border-b mb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">Actualités</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Actualités</h1>
        </div>
      </header>

      {/* Articles list */}
      <div className="grid gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="mt-8">
        <PagePagination totalPages={10} currentPage={1} />
      </div>
    </>
  )
}

