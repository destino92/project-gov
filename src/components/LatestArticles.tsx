"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Example articles data - replace with your actual data
const articles = [
  {
    id: 1,
    title: "Lancement du nouveau programme de réinsertion",
    subtitle: "Faciliter la réinsertion sociale et économique",
    snippet: "Un nouveau programme visant à faciliter la réinsertion sociale et économique des ex-combattants...",
    date: "2024-02-05",
    image: "https://images.pexels.com/photos/30517382/pexels-photo-30517382/free-photo-of-african-photographer-holding-camera-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/actualites/1",
  },
  {
    id: 2,
    title: "Signature d'un accord de partenariat",
    subtitle: "Renforcement des actions du HCREC",
    snippet: "Le HCREC a signé un important accord de partenariat pour renforcer ses actions...",
    date: "2024-02-04",
    image: "https://images.pexels.com/photos/9792865/pexels-photo-9792865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/actualites/2",
  },
  {
    id: 3,
    title: "Bilan des activités 2023",
    subtitle: "Résultats et avancées majeures",
    snippet: "Présentation des résultats et des avancées majeures réalisées au cours de l'année...",
    date: "2024-02-03",
    image: "https://images.pexels.com/photos/4955754/pexels-photo-4955754.jpeg",
    href: "/actualites/3",
  },
  {
    id: 4,
    title: "Formation professionnelle",
    subtitle: "Nouveau programme pour les jeunes",
    snippet: "Lancement d'un nouveau programme de formation professionnelle pour les jeunes...",
    date: "2024-02-02",
    image: "https://images.pexels.com/photos/6444492/pexels-photo-6444492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/actualites/4",
  },
]

const animatedUnderline =
  "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"

export function ArticleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [animationKey, setAnimationKey] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setAnimationKey((prev) => prev + 1) // Trigger animation on slide change

  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-primary">Actualités Récentes</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {articles.map((article) => (
                <div key={article.id} className="relative flex-[0_0_100%] min-w-0">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <AnimatedTextContent key={animationKey} article={article} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Article précédent"
              className="bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Article suivant"
              className="bg-white/80 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {articles.map((article, index) => (
            <button
              key={article.id}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`p-4 text-left transition-colors ${
                index === selectedIndex ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              <h4 className="font-semibold line-clamp-1">{article.title}</h4>
              <p className="mt-1 text-sm line-clamp-2">{article.subtitle}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/actualites" passHref>
            <Button variant="outline" size="lg" className="font-semibold">
              Voir plus d&apos;articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function AnimatedTextContent({ article }: { article: (typeof articles)[0] }) {
    return (
      <>
        <time
          className="text-sm font-medium text-gray-300 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards]"
          dateTime={article.date}
        >
          {new Date(article.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight opacity-0 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm md:text-base text-gray-200 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards]">
          {article.snippet}
        </p>
        <Link
          href={article.href}
          className={cn(
            "mt-3 inline-block font-medium text-primary-foreground hover:text-yellow-300 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards]",
            animatedUnderline,
          )}
        >
          Lire la suite →
        </Link>
      </>
    )
}