import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NumberFlow from '@number-flow/react'

// This would typically come from your CMS
const historyContent = {
  title: "Histoire du Haut-Commissariat",
  subtitle: "Pour la réinsertion des ex-combattants",
  mainImage: "https://images.pexels.com/photos/8851691/pexels-photo-8851691.jpeg",
  sections: [
    {
      title: "Création et Mission",
      content: `
        <p>Le Haut-Commissariat pour la réinsertion des ex-combattants a été créé en réponse aux défis post-conflit de la République du Congo. Cette institution joue un rôle crucial dans le processus de paix et de réconciliation nationale.</p>
        
        <p>Notre mission principale est d'accompagner les ex-combattants dans leur retour à la vie civile, en leur fournissant les outils et le soutien nécessaires pour une réinsertion réussie dans la société.</p>
      `,
    },
    {
      title: "Objectifs et Réalisations",
      content: `
        <h3>Nos objectifs principaux :</h3>
        <ul>
          <li>Faciliter la réinsertion sociale des ex-combattants</li>
          <li>Fournir une formation professionnelle adaptée</li>
          <li>Accompagner la création d'activités génératrices de revenus</li>
          <li>Promouvoir la réconciliation nationale</li>
        </ul>

        <blockquote>
          "La paix n'est pas seulement l'absence de guerre, c'est aussi la création d'un environnement où tous peuvent prospérer."
        </blockquote>

        <p>Depuis sa création, le Haut-Commissariat a accompagné avec succès la réinsertion de nombreux ex-combattants, contribuant ainsi à la stabilité et au développement du pays.</p>
      `,
    },
    {
      title: "Perspectives d'avenir",
      content: `
        <p>Le Haut-Commissariat continue d'évoluer pour répondre aux besoins changeants de notre société. Nos projets futurs incluent :</p>

        <ul>
          <li>Le développement de nouveaux programmes de formation</li>
          <li>Le renforcement des partenariats internationaux</li>
          <li>L'amélioration continue de nos méthodes d'accompagnement</li>
        </ul>
      `,
    },
  ],
  statistics: [
    { label: "Ex-combattants accompagnés", value: "5000+" },
    { label: "Projets réalisés", value: "150+" },
    { label: "Partenaires", value: "25+" },
  ],
  commissaires: [
    {
      name: "Euloge Landry Kolélas",
      period: "2023 - Présent",
      isCurrent: true,
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    },
    {
      name: "Antoinette Kebi",
      period: "2018 - 2023",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    },
    {
      name: "Jean-Claude Gouala",
      period: "2012 - 2018",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    },
    {
      name: "Michel Ngakala",
      period: "2005 - 2012",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    },
  ],
}

export default function HistoriquePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900">
                    Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">Historique</span>
              </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={historyContent.mainImage || "/placeholder.svg"}
            alt="Histoire du Haut-Commissariat"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{historyContent.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{historyContent.subtitle}</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {historyContent.statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2"><NumberFlow value={parseInt(stat.value)} /></div>
                <div className="font-bold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 space-y-12">
              {historyContent.sections.map((section, index) => (
                <section key={index} className="prose prose-gray max-w-none">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="prose prose-gray max-w-none
                      prose-p:text-gray-600 prose-p:leading-relaxed
                      prose-headings:text-gray-900 prose-headings:font-semibold
                      prose-ul:text-gray-600 prose-ul:list-disc prose-ul:pl-5
                      prose-blockquote:border-l-4 prose-blockquote:border-primary 
                      prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700"
                  />
                </section>
              ))}

              {/* Commissaires Section */}
              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-6">Haut-Commissaires</h2>
                <div className="space-y-8">
                  {historyContent.commissaires.map((commissaire, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 rounded-full">
                        <Image
                          src={commissaire.image || "/placeholder.svg"}
                          alt={commissaire.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-1">
                          {commissaire.name}
                          {commissaire.isCurrent && (
                            <span className="ml-2 text-sm font-normal text-green-600 bg-green-100 px-2 py-1 rounded">
                              Actuel
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600">{commissaire.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

