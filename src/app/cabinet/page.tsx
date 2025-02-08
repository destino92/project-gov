import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Official {
  name: string
  title: string
  image: string
}

interface Section {
  id: string
  title: string
  officials: Official[]
}

const director: Official = {
    name: "Dir. CAB",
    title: "Directeur général du Cabinet",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
}

const sections: Section[] = [
  {
    id: "services",
    title: "Services rattachés au Cabinet",
    officials: [
      {
        name: "Marie Okemba",
        title: "Assistante au Directeur de Cabinet",
        image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
      },
    ],
  },
  {
    id: "conseillers",
    title: "Conseillers",
    officials: [
        {
            title: "Conseiller Administratif et Juridique",
            name: "François Ibara",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Responsable de la Logistique et de l’Intendance",
            name: "Yvette Moungali",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Conseiller au Désarmement et à la Démobilisation",
            name: "Robert Malonga",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Conseiller à la Réinsertion Socioéconomique",
            name: "Sylvie Kamba",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Conseiller à la Coopération, à l’Exécution des Projets, aux Contentieux et Recours",
            name: "Michel Bouanga",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Conseiller au Suivi/Evaluation et à l’Audit Interne",
            name: "Patricia Mongo",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
    ],
  },
  {
    id: "services",
    title: "Services rattachés au Cabinet",
    officials: [
        {
            title: "Secrétariat Central",
            name: "Yvette Moungali",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Service Informatique",
            name: "Robert Malonga",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
        {
            title: "Service des Finances et du Matériel",
            name: "Sylvie Kamba",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        },
    ],
  },
]

export default function CabinetPage() {
    
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-primary">Composition du cabinet</h1>
                <div className="flex justify-center mb-8">
                    <Card className="group border-primary border hover:bg-primary hover:text-white transition duration-300">
                        <CardHeader>
                            <Image src={director.image} alt={director.name} width={300} height={490} className="mb-4" />
                            <CardTitle>{director.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 group-hover:text-white">{director.title}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
                {sections.map((section, sectionIndex) => (
                    <div key={section.id} id={section.id} className={`py-4 ${sectionIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <div className="container mx-auto px-4 py-8">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">{section.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {section.officials.map((official, officialIndex) => (
                                    <Card key={officialIndex} className="group border-primary border hover:bg-primary hover:text-white transition duration-300">
                                        <CardHeader>
                                            <Image src={official.image} alt={official.name} width={360} height={460} className="mb-4" />
                                            <CardTitle>{official.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 group-hover:text-white">{official.title}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
  )
}

