import BottomNav from "@/components/Bottom-Nav"
import { ArticleCarousel } from "@/components/LatestArticles"
import Partners from "@/components/Partners"

export default function MinisterPage() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-12 py-8">
        {/* Article Carousel */}
        <ArticleCarousel />
        <Partners />
      </div>
      <BottomNav title="Contact" url="/contact" />
    </div>
  )
}