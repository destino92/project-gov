"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { articles } from "@/config/articles"

// Example articles data - replace with your actual data

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
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8">
          <div className="lg:col-span-2 bg-gray-50 p-4">
            <h2 className="mb-8 text-3xl font-bold text-primary">Actualités Récentes</h2>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {articles.map((article) => (
                    <div key={article.id} className="relative flex-[0_0_100%] min-w-0">
                      <div className="w-full h-64 md:h-96 md:aspect-[16/9] relative overflow-hidden">
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
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-primary text-primary-foreground p-4">
            <h2 className="mb-8 text-3xl font-bold text-yellow-300">Mot du ministre</h2>
            <div>
              <Image
                src="/euloge-landry-kolelas.jpg"
                alt="EULOGE LANDRY KOLELAS"
                width={400}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">EULOGE LANDRY KOLELAS</h2>
            <p className="text-xl mb-8">
              Ministre-Haut commissaire à la réinsertion des ex combattants
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae sit sed ex amet. Amet perspiciatis obcaecati maiores voluptatibus quasi. Veniam unde delectus perspiciatis ea molestias! Modi, dicta nam. Quis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi officiis odio ex quis ipsum sunt, voluptatibus sit nulla aspernatur ullam, recusandae, corporis dicta porro rerum cum quo aliquam pariatur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore iure quis deserunt in quibusdam ab reprehenderit, distinctio, vero pariatur facilis consectetur voluptate, incidunt iusto autem quasi fuga provident.
            </p>
          </div>
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