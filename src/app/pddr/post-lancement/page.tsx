import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PDDRPostLaunchPage() {
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
                <span className="text-gray-900">Post-lancement</span>
            </div>
            <h1 className="text-3xl font-bold">Activités post-lancement du PDDR</h1>
            </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-800">Aucune activité en cours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700">
              Les activités post-lancement du programme PDDR n&apos;ont pas encore commencé. Veuillez consulter cette page
              ultérieurement pour les mises à jour sur les activités de lancement.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

