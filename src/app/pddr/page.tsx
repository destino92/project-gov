import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from your CMS
const pddrContent = {
  title: "Programme de Désarmement, Démobilisation et Réinsertion (PDDR)",
  subtitle: "Vers une paix durable et une société inclusive",
  mainImage:
    "https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  sections: [
    {
      title: "Qu'est-ce que le PDDR ?",
      content: `
        <p>Le Programme de Désarmement, Démobilisation et Réinsertion (PDDR) est une initiative cruciale dans le processus de paix et de réconciliation nationale en République du Congo. Ce programme vise à faciliter la transition des ex-combattants vers une vie civile productive et pacifique.</p>
        
        <p>Le PDDR s'articule autour de trois phases principales :</p>
        <ul>
          <li><strong>Désarmement</strong> : Collecte, documentation, contrôle et élimination des armes.</li>
          <li><strong>Démobilisation</strong> : Libération officielle et contrôlée des combattants actifs de groupes armés.</li>
          <li><strong>Réinsertion</strong> : Assistance aux ex-combattants pour s'intégrer économiquement et socialement dans la société civile.</li>
        </ul>
      `,
    },
    {
      title: "Objectifs du PDDR",
      content: `
        <p>Les principaux objectifs du PDDR sont :</p>
        <ul>
          <li>Contribuer à la sécurité et à la stabilité du pays</li>
          <li>Faciliter la réconciliation nationale</li>
          <li>Prévenir la reprise des conflits armés</li>
          <li>Soutenir le développement économique et social des communautés</li>
        </ul>
      `,
    },
    {
      title: "Composantes du programme",
      content: `
        <h3>1. Formation professionnelle</h3>
        <p>Nous offrons une variété de formations adaptées aux besoins du marché du travail et aux compétences des ex-combattants.</p>

        <h3>2. Soutien psychosocial</h3>
        <p>Un accompagnement psychologique est fourni pour aider les ex-combattants à surmonter les traumatismes et à s'adapter à la vie civile.</p>

        <h3>3. Appui à l'entrepreneuriat</h3>
        <p>Nous proposons des formations en gestion d'entreprise et un soutien financier pour le démarrage de petites entreprises.</p>

        <h3>4. Éducation civique</h3>
        <p>Des sessions d'éducation civique sont organisées pour promouvoir la citoyenneté responsable et la cohésion sociale.</p>
      `,
    },
    {
      title: "Impact et résultats",
      content: `
        <p>Depuis son lancement, le PDDR a contribué de manière significative à la stabilité et au développement du pays :</p>
        <ul>
          <li>Plus de 5000 ex-combattants réinsérés avec succès</li>
          <li>Réduction notable des incidents de sécurité liés aux groupes armés</li>
          <li>Création de plus de 1000 micro-entreprises par d'anciens combattants</li>
          <li>Amélioration de la cohésion sociale dans les communautés d'accueil</li>
        </ul>
      `,
    },
  ],
  callToAction: {
    title: "Participez au PDDR",
    description:
      "Vous êtes un ex-combattant ou connaissez quelqu'un qui pourrait bénéficier du programme ? Contactez-nous pour plus d'informations sur le processus d'inscription.",
    buttonText: "Nous contacter",
    buttonLink: "/contact",
    document: {
        buttonText: "Télécharger le document complet",
        fileLink: "/pddr-document.pdf", // This should be updated with the actual file path
    },
  },
}

export default function PDDRPage() {
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
                <span className="text-gray-900">PDDR</span>
              </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={pddrContent.mainImage || "/placeholder.svg"}
            alt="Programme de Désarmement, Démobilisation et Réinsertion"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pddrContent.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{pddrContent.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 space-y-12">
              {pddrContent.sections.map((section, index) => (
                <section key={index} className="prose prose-gray max-w-none">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="prose prose-gray max-w-none
                      prose-p:text-gray-600 prose-p:leading-relaxed
                      prose-headings:text-gray-900 prose-headings:font-semibold
                      prose-ul:text-gray-600 prose-ul:list-disc prose-ul:pl-5
                      prose-strong:font-semibold prose-strong:text-gray-900"
                  />
                </section>
              ))}

              {/* Call to Action Section */}
              <section className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">{pddrContent.callToAction.title}</h2>
                <p className="text-gray-600 mb-6">{pddrContent.callToAction.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-yellow-300 hover:bg-primary text-gray-900 hover:text-white transition-colors duration-300">
                    <Link href={pddrContent.callToAction.buttonLink}>{pddrContent.callToAction.buttonText}</Link>
                  </Button>
                  <Button asChild className="border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    <Link href={pddrContent.callToAction.document.fileLink} download>
                      {pddrContent.callToAction.document.buttonText}
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}