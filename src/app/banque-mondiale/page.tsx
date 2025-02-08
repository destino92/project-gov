import { PartnerPage } from "@/components/PartnerPage"

export default function BanqueMondialePage() {
  return (
    <PartnerPage
      name="Banque Mondiale"
      logo="/logo_worldbank.jpg?height=100&width=100"
      description="La Banque mondiale est une institution financière internationale qui fournit des prêts et des subventions aux pays en développement pour des projets d'investissement dans divers secteurs. Son objectif principal est de réduire la pauvreté et de promouvoir une prospérité partagée dans les pays en développement."
      collaboration="La Banque mondiale collabore avec le HCREC pour soutenir les efforts de réinsertion et de développement en République du Congo. Cette collaboration se concentre sur le financement de projets d'infrastructure, le développement du capital humain et la promotion de la gouvernance et des institutions efficaces."
      projects={[
        {
          title: "Projet de réintégration socio-économique",
          description:
            "Financement de programmes visant à faciliter la réintégration des ex-combattants dans leurs communautés et dans l'économie locale.",
        },
        {
          title: "Programme de développement des compétences",
          description:
            "Soutien à la mise en place de programmes de formation professionnelle et d'apprentissage pour les jeunes et les ex-combattants.",
        },
        {
          title: "Projet d'infrastructure communautaire",
          description:
            "Financement de petits projets d'infrastructure dans les communautés affectées pour améliorer les conditions de vie et créer des emplois.",
        },
      ]}
      websiteUrl="https://www.worldbank.org/"
    />
  )
}