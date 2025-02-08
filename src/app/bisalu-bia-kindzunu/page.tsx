import { ProgramPage } from "@/components/ProgramPage"

export default function BisaluBiaKindzunuPage() {
  return (
    <ProgramPage
      title="Bisalu Bia Kindzunu"
      subtitle="Programme de réinsertion par l'agriculture et l'artisanat"
      description="Bisalu Bia Kindzunu, qui signifie 'Le travail des mains' en langue locale, est un programme innovant axé sur la réinsertion des ex-combattants à travers l'agriculture et l'artisanat traditionnels. Ce programme vise à valoriser les compétences locales tout en promouvant le développement économique durable."
      objectives={[
        "Former les ex-combattants aux techniques agricoles durables et à l'artisanat local",
        "Créer des coopératives agricoles et artisanales gérées par les bénéficiaires",
        "Promouvoir la commercialisation des produits locaux sur les marchés nationaux et internationaux",
        "Préserver et transmettre les savoir-faire traditionnels",
      ]}
      impact="Bisalu Bia Kindzunu a permis la création de plusieurs coopératives agricoles et artisanales prospères, offrant des moyens de subsistance durables aux ex-combattants et à leurs familles. Le programme a également contribué à la préservation des traditions locales et à la promotion de produits congolais authentiques sur les marchés nationaux et internationaux."
      image="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      documentLink="/documents/bisalu-bia-kindzunu-documentation.pdf"
    />
  )
}

