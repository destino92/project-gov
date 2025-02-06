import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PagePagination from "@/components/Pagination"

const communiques = [
  {
    id: 1,
    title:
      "COMMUNIQUE DE PRESSE A L'ISSUE DE LA VISITE DE TRAVAIL DE SON EXCELLENCE MONSIEUR JOÃO MANUEL GONÇALVES LOURENÇO, PRESIDENT DE LA REPUBLIQUE D'ANGOLA, EN REPUBLIQUE DU CONGO",
    date: "2024-01-13",
    image: "/placeholder.svg?height=120&width=120",
    href: "/communiques/1",
  },
  {
    id: 2,
    title: "Communiqué de presse relatif à la signature de l'accord de coopération",
    date: "2024-01-10",
    image: "/placeholder.svg?height=120&width=120",
    href: "/communiques/2",
  },
  {
    id: 3,
    title: "Communiqué de presse sur la réunion du conseil des ministres",
    date: "2024-01-05",
    image: "/placeholder.svg?height=120&width=120",
    href: "/communiques/3",
  },
]

export default function CommuniquesPage() {
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
            <span className="text-gray-900">Communiqués</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Communiqués de presse</h1>
        </div>
      </header>

      {/* Communiques list */}
      <div className="space-y-6">
        {communiques.map((communique) => (
          <article key={communique.id} className="relative pl-8 md:pl-0 group">
            <div className="hidden md:block absolute left-0 w-24 text-sm text-gray-500 pt-4">
              {new Date(communique.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="relative md:ml-32">
              <div className="absolute -left-8 md:-left-4 top-0 mt-5 h-full w-px bg-gray-200 group-last:hidden" />
              <div className="absolute -left-10 md:-left-6 top-5 h-4 w-4 rounded-full border-4 border-yellow-400 bg-white" />
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <time className="text-sm text-gray-500 md:hidden" dateTime={communique.date}>
                    {new Date(communique.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <Link href={communique.href}>
                    <h2 className="mt-2 md:mt-0 text-xl font-bold text-gray-900 hover:text-primary">
                      {communique.title}
                    </h2>
                  </Link>
                  <Link
                    href={communique.href}
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <PagePagination totalPages={1} currentPage={1} />
      </div>
    </>
  )
}

