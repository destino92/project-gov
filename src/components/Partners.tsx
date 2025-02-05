import Image from "next/image"

const partners = [
  { name: "PNUD", logo: "/pnud.png", website: "www.cg.undp.org" },
  { name: "JAPON", logo: "/japan.png", website: "www.japan.cg" },
  { name: "BANQUE MONDIALE", logo: "/logo_worldbank.jpg" },
  { name: "USAID", logo: "/usaid.png" },
  { name: "Gouvernement", logo: "/coat-of-arm-cg.png" },
  { name: "FIGA", logo: "/figa.png" },
]

export default function Partners() {
  return (
    <div className="pt-12 pb-4 mt-12">
        <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">Nos Partenaires</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                    <div key={partner.name} className="flex flex-col items-center space-y-4">
                        <div className="h-24 w-48">
                            <Image
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                width={192}
                                height={96}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    </div>
  )
}