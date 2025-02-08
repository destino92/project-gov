import { PartnerPage } from "@/components/PartnerPage"

export default function USAIDPage() {
  return (
    <PartnerPage
      name="USAID"
      logo="/usaid.png?height=100&width=100"
      description="L'Agence des États-Unis pour le développement international (USAID) est l'agence gouvernementale américaine chargée de l'aide au développement à l'étranger. Elle œuvre pour promouvoir la démocratie, réduire la pauvreté, améliorer la santé et l'éducation, et fournir une assistance humanitaire dans le monde entier."
      collaboration="USAID collabore avec le HCREC pour soutenir les efforts de stabilisation et de développement en République du Congo. Cette collaboration se concentre sur la promotion de la gouvernance démocratique, le renforcement de la société civile, et le soutien aux programmes de réintégration des ex-combattants."
      projects={[
        {
          title: "Programme de renforcement de la société civile",
          description:
            "Soutien aux organisations locales travaillant sur la réintégration des ex-combattants et la consolidation de la paix.",
        },
        {
          title: "Initiative pour l'emploi des jeunes",
          description:
            "Création d'opportunités d'emploi et de formation pour les jeunes, y compris les ex-combattants, dans les secteurs émergents.",
        },
        {
          title: "Projet de réconciliation communautaire",
          description:
            "Mise en œuvre de programmes visant à promouvoir le dialogue et la réconciliation entre les ex-combattants et leurs communautés d'accueil.",
        },
      ]}
      websiteUrl="https://www.usaid.gov/"
    />
  )
}