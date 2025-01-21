import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CabinetPage() {
    const director = {
        name: "Athanase NGASSAKI",
        position: "Directeur de Cabinet",
        image: "/athanase-ngassaki.jpg"
    }
    const members = [
        {
            title: "LES CONSEILLERS",
            members: [
                {
                    name: "Audrey MAPITHY-MA-MAPITHY",
                    position: "Conseiller administratif et juridique",
                    image: "/cons-mapithy.jpg"
                },
                {
                    name: "Antoine NKODIA",
                    position: "Conseiller à la coopération monétaire et financière au niveau régional et sous-régional",
                    image: "/antoine-nkodia.jpg"
                },
                {
                    name: "Gatien ONDAYE OBILI",
                    position: "Conseiller à la gestion et au suivi de la trésorerie",
                    image: "/cons-gatien.jpg"
                }
            ]
        },
    ]
    return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Composition du cabinet</h1>
        <div className="flex justify-center mb-8">
            <Card className="group border-primary border hover:bg-primary hover:text-white transition duration-300">
                <CardHeader>
                    <Image src={director.image} alt={director.name} width={300} height={490} className="mb-4" />
                    <CardTitle>{director.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 group-hover:text-white">{director.position}</p>
                </CardContent>
            </Card>
        </div>
        <div>
            {members.map((group, index) => (
            <div key={index}>
                <h2 className="text-2xl font-semibold mb-4 text-primary">{group.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {group.members.map((member, memberIndex) => (
                    <Card key={memberIndex} className=" group border-primary border hover:bg-primary hover:text-white transition duration-300">
                        <CardHeader>
                            <Image src={member.image} alt={member.name} width={360} height={460} className="mb-4" />
                            <CardTitle>{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 group-hover:text-white">{member.position}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

