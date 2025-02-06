import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import PagePagination from "@/components/Pagination"
import { formatDate } from "@/lib/date"
import BottomNav from "@/components/Bottom-Nav"

const speeches = [
  {
    id: 1,
    title: "Discours du Président de la République à l'occasion de la fête de l'indépendance",
    event: "Fête de l'indépendance",
    date: "2024-01-15",
    location: "Brazzaville",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/discours/1",
    excerpt:
      "Mes chers compatriotes, C'est avec une profonde émotion que je m'adresse à vous en ce jour solennel de notre fête nationale...",
  },
  {
    id: 2,
    title: "Allocution lors de la cérémonie d'ouverture du forum économique",
    event: "Forum Économique International",
    date: "2024-01-10",
    location: "Pointe-Noire",
    image:
      "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/discours/2",
    excerpt:
      "Distingués invités, Mesdames et Messieurs, C'est un honneur pour moi d'ouvrir ce forum économique qui marque une étape importante...",
  },
  {
    id: 3,
    title: "Discours à l'Assemblée nationale sur les réformes économiques",
    event: "Session parlementaire",
    date: "2024-01-05",
    location: "Brazzaville",
    image:
      "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/discours/3",
    excerpt:
      "Honorables députés, Chers membres du gouvernement, Les réformes que nous proposons aujourd'hui sont essentielles pour l'avenir...",
  },
]

export default function DiscoursPage() {
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
            <span className="text-gray-900">Discours</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Discours officiels</h1>
        </div>
      </header>

      {/* Speeches list */}
      <div className="space-y-8">
        {speeches.map((speech) => (
          <article key={speech.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="aspect-[16/9] md:aspect-auto md:h-full relative">
                  <Image src={speech.image || "/placeholder.svg"} alt={speech.title} fill className="object-cover" />
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                  <time dateTime={speech.date}>{formatDate(speech.date)}</time>
                  <span>•</span>
                  <span>{speech.location}</span>
                </div>
                <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded mb-4">
                  {speech.event}
                </div>
                <Link href={speech.href}>
                  <h2 className="text-xl font-bold text-gray-900 hover:text-primary mb-3">{speech.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{speech.excerpt}</p>
                <Link
                  href={speech.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Lire le discours complet →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <PagePagination totalPages={1} currentPage={1} />
      </div>

      <BottomNav title="Média" url="/medias" />
    </>
  )
}

