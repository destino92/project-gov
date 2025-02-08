import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PartnerPageProps {
  name: string
  logo: string
  description: string
  collaboration: string
  projects: Array<{
    title: string
    description: string
  }>
  websiteUrl: string
}

export function PartnerPage({ name, logo, description, collaboration, projects, websiteUrl }: PartnerPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/partenaires" className="hover:text-gray-900">
              Partenaires
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 space-y-8">
              {/* Partner Logo and Name */}
              <div className="flex items-center space-x-6">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`${name} logo`}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h1 className="text-3xl font-bold">{name}</h1>
              </div>

              {/* About the Partner */}
              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">À propos du partenaire</h2>
                <p className="text-gray-600">{description}</p>
              </section>

              {/* Collaboration with HCREC */}
              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Collaboration avec le HCREC</h2>
                <p className="text-gray-600">{collaboration}</p>
              </section>

              {/* Projects */}
              <section className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Projets en collaboration</h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Visit Website Button */}
              <div className="flex justify-center">
                <Button asChild className="bg-yellow-300 hover:bg-primary text-gray-900 hover:text-white transition-colors duration-300">
                  <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    Visiter le site web officiel
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

