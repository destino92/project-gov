import { PartnerPage } from "@/components/PartnerPage"

export default function PeupleDuJaponPage() {
  return (
    <PartnerPage
      name="Peuple du Japon"
      logo="/japan.png?height=100&width=100"
      description="Le peuple du Japon, à travers l'Agence japonaise de coopération internationale (JICA), est un partenaire important dans les efforts de développement et de paix à travers le monde. Le Japon s'engage à promouvoir la sécurité humaine, la croissance de qualité et la réduction de la pauvreté dans les pays en développement."
      collaboration="La collaboration entre le peuple du Japon et le HCREC se manifeste principalement à travers les Fonds Japonais, qui soutiennent les efforts de réinsertion des ex-combattants en République du Congo. Cette coopération met l'accent sur la formation professionnelle, le développement des micro-entreprises et la promotion de la cohésion sociale."
      projects={[
        {
          title: "Fonds Japonais pour le développement social",
          description:
            "Ce fonds soutient des projets visant à améliorer les conditions de vie des ex-combattants et de leurs communautés.",
        },
        {
          title: "Programme de formation technique et professionnelle",
          description:
            "Mise en place de centres de formation pour les ex-combattants, offrant des compétences adaptées au marché du travail local.",
        },
        {
          title: "Projet de soutien aux micro-entreprises",
          description:
            "Fourniture de microcrédits et de formation en gestion pour aider les ex-combattants à démarrer leurs propres entreprises.",
        },
      ]}
      websiteUrl="https://www.jica.go.jp/english/"
    />
  )
}