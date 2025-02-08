import { PartnerPage } from "@/components/PartnerPage"

export default function FIGAPage() {
  return (
    <PartnerPage
      name="FIGA (Fonds d'Impulsion, de Garantie et d'Accompagnement)"
      logo="/figa.png?height=100&width=100"
      description="Le FIGA (Fonds d'Impulsion, de Garantie et d'Accompagnement) est une institution financière congolaise créée pour soutenir le développement des petites et moyennes entreprises (PME) et promouvoir l'entrepreneuriat au Congo. Le FIGA joue un rôle crucial dans le financement et l'accompagnement des projets entrepreneuriaux, contribuant ainsi à la diversification de l'économie congolaise."
      collaboration="Le FIGA collabore étroitement avec le HCREC pour soutenir la réinsertion économique des ex-combattants à travers l'entrepreneuriat. Cette collaboration se concentre sur le financement de projets, la formation en gestion d'entreprise, et l'accompagnement des ex-combattants dans la création et le développement de leurs propres entreprises."
      projects={[
        {
          title: "Programme de microcrédits pour ex-combattants",
          description:
            "Mise en place d'un fonds spécial pour financer les projets entrepreneuriaux des ex-combattants, avec des conditions adaptées à leur situation.",
        },
        {
          title: "Formation en gestion d'entreprise",
          description:
            "Organisation de sessions de formation en gestion d'entreprise, comptabilité, et marketing, spécifiquement conçues pour les ex-combattants entrepreneurs.",
        },
        {
          title: "Incubateur d'entreprises sociales",
          description:
            "Création d'un incubateur dédié aux entreprises sociales initiées par les ex-combattants, offrant un espace de travail, du mentorat et un accès aux réseaux professionnels.",
        },
      ]}
      websiteUrl="https://www.figa.cg/"
    />
  )
}

