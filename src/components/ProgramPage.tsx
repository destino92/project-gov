import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProgramPageProps {
  title: string
  subtitle: string
  description: string
  objectives: string[]
  impact: string
  image: string
  documentLink?: string
}

export function ProgramPage({
  title,
  subtitle,
  description,
  objectives,
  impact,
  image,
  documentLink,
}: ProgramPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">

      <header>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900">
                    Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href="/#" className="hover:text-gray-900">
                    Programmes
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">{title}</span>
              </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 space-y-8">
              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">À propos du programme</h2>
                <p className="text-gray-600">{description}</p>
              </section>

              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Objectifs</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </section>

              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Impact</h2>
                <p className="text-gray-600">{impact}</p>
              </section>

              {documentLink && (
                <section className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Documentation</h2>
                  <p className="text-gray-600 mb-4">
                    Pour plus d&apos;informations sur ce programme, veuillez consulter la documentation complète.
                  </p>
                  <Button asChild className="bg-yellow-300 hover:bg-primary text-gray-900 hover:text-white transition-colors duration-300">
                    <Link href={documentLink} target="_blank" rel="noopener noreferrer">
                      Télécharger la documentation
                    </Link>
                  </Button>
                </section>
              )}
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

