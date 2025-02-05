import { ArticleCarousel } from "@/components/LatestArticles"
import { MotDuMinistre } from "@/components/MotDuMinistre"

export default function MinisterPage() {
  return (
    <div className="container mx-auto px-4 md:px-12 py-8">
      {/* Article Carousel */}
      <ArticleCarousel />

      {/* Mot du ministre */}
      <MotDuMinistre />
    </div>
  )
}