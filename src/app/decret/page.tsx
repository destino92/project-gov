import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const decrees = [
  {
    id: "2020-134",
    date: "20 mai 2020",
    title: "Décret n° 2020-134",
    description:
      "Décret n° 2020-134 du 20 mai 2020 portant nomination du conseiller du président de la République, chef du département juridique et des droits humains",
    nominee: "M. MOKOKO Antonin",
    pdfSize: "83 Ko",
    pdfUrl: "#",
  },
]

export default function DecreesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <header>
            <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Décret de création</h1>
                <div className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900">
                    Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">Décrets présidentiels</span>
                </div>
            </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 sm:w-1/2">
            {decrees.map((decree) => (
                <div key={decree.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3] bg-white flex items-center justify-center">
                    <Image
                    src="/coat-of-arm-cg.png"
                    alt="République du Congo"
                    width="220"
                    height="216"
                    className="object-contain opacity-10"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">{decree.title}</h2>
                    <div className="space-y-4 text-gray-600 mb-6">
                    <p>{decree.description}</p>
                    <p className="font-medium">{decree.nominee}</p>
                    </div>
                    <Button asChild className="w-full bg-yellow-300 hover:bg-primary text-gray-900 hover:text-white transition-colors duration-300">
                    <a href={decree.pdfUrl}>
                        <FileText className="mr-2 h-4 w-4" />
                        TÉLÉCHARGER LE JOURNAL OFFICIEL (PDF, {decree.pdfSize})
                    </a>
                    </Button>
                </div>
                </div>
            ))}
        </main>
      </div>
    </div>
  )
}

