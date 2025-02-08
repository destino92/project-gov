import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ActivityCard } from "@/components/ActivityCard"

const activities = [
  {
    title: "Évaluation des besoins",
    description: "Analyse approfondie des besoins des ex-combattants et des communautés d'accueil.",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "10 janvier 2024",
    status: "completed" as const,
  },
  {
    title: "Planification logistique",
    description: "Préparation des centres de démobilisation et des ressources nécessaires.",
    image:
      "https://images.pexels.com/photos/7648498/pexels-photo-7648498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "15 février 2024",
    status: "ongoing" as const,
  },
  {
    title: "Formation du personnel",
    description: "Sessions de formation pour le personnel impliqué dans le programme PDDR.",
    image:
      "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "1 mars 2024",
    status: "upcoming" as const,
  },
  {
    title: "Sensibilisation communautaire",
    description: "Campagnes d'information et de sensibilisation dans les communautés cibles.",
    image:
      "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "15 mars 2024",
    status: "upcoming" as const,
  },
]

export default function PDDRPreLaunchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-8">
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <Link href="/" className="hover:text-gray-900">
                Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href="/pddr" className="hover:text-gray-900">
                PDDR
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">Pré-lancement</span>
            </div>
            <h1 className="text-3xl font-bold">Activités de pré-lancement du PDDR</h1>
            </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </main>
    </div>
  )
}

