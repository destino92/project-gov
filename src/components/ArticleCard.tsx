import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/date"

interface ArticleCardProps {
  article: {
    title: string
    subtitle: string
    snippet: string
    date: string
    image: string
    href: string
  }
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link href={article.href} className="block">
        <div className="aspect-[16/9] relative">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-6">
        <time dateTime={article.date} className="text-sm text-gray-500">
          {formatDate(article.date)}
        </time>
        <Link href={article.href}>
          <h2 className="mt-2 text-xl font-bold text-gray-900 hover:text-primary">{article.title}</h2>
        </Link>
        <p className="mt-1 text-sm text-gray-600">{article.subtitle}</p>
        <p className="mt-3 text-gray-600 line-clamp-3">{article.snippet}</p>
        <Link
          href={article.href}
          className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          Lire la suite →
        </Link>
      </div>
    </article>
  )
}