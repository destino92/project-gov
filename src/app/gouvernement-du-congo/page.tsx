import { PartnerPage } from "@/components/PartnerPage"

export default function GouvernementDuCongoPage() {
  return (
    <PartnerPage
      name="Gouvernement de la République du Congo"
      logo="/coat-of-arm-cg.png?height=100&width=100"
      description="Le Gouvernement de la République du Congo est l'organe exécutif de l'État congolais. Il est responsable de la mise en œuvre des politiques nationales, du maintien de la sécurité et de la promotion du développement économique et social du pays. Le gouvernement joue un rôle central dans les efforts de paix, de réconciliation et de réinsertion des ex-combattants."
      collaboration="Le Gouvernement de la République du Congo collabore étroitement avec le HCREC, fournissant un soutien politique, financier et logistique essentiel à ses opérations. Cette collaboration implique plusieurs ministères et agences gouvernementales, assurant une approche coordonnée et multisectorielle de la réinsertion des ex-combattants."
      projects={[
        {
          title: "Cadre légal et politique pour la réinsertion",
          description:
            "Élaboration et mise en œuvre de lois et de politiques nationales pour faciliter la réinsertion des ex-combattants et promouvoir la réconciliation nationale.",
        },
        {
          title: "Programme national d'emploi pour les ex-combattants",
          description:
            "Mise en place d'un programme gouvernemental visant à créer des opportunités d'emploi dans le secteur public et à encourager le secteur privé à embaucher des ex-combattants.",
        },
        {
          title: "Initiative de développement communautaire",
          description:
            "Financement et mise en œuvre de projets de développement dans les communautés accueillant des ex-combattants, visant à améliorer les infrastructures locales et à promouvoir la cohésion sociale.",
        },
      ]}
      websiteUrl="https://www.gouvernement.cg/"
    />
  )
}

