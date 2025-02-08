import { PartnerPage } from "@/components/PartnerPage"

export default function PNUDPage() {
  return (
    <PartnerPage
      name="Programme des Nations Unies pour le développement (PNUD)"
      logo="/pnud.png?height=100&width=100"
      description="Le Programme des Nations Unies pour le développement (PNUD) est l'un des principaux organismes multilatéraux de développement contribuant à éradiquer la pauvreté et réduire les inégalités et l'exclusion. Nous aidons les pays à élaborer des politiques, à développer des compétences en leadership et en partenariat, à renforcer leurs capacités institutionnelles et à renforcer leur résilience pour obtenir des résultats en matière de développement durable."
      collaboration="Le PNUD collabore étroitement avec le HCREC pour soutenir les efforts de réinsertion des ex-combattants et de consolidation de la paix en République du Congo. Cette collaboration se concentre sur le renforcement des capacités institutionnelles, la promotion du développement économique local et la mise en œuvre de programmes de réintégration durables."
      projects={[
        {
          title: "Renforcement des capacités institutionnelles",
          description:
            "Ce projet vise à améliorer les compétences et les ressources du HCREC pour mieux gérer les programmes de réinsertion.",
        },
        {
          title: "Développement économique local",
          description:
            "Initiative conjointe pour stimuler l'économie dans les zones touchées par le conflit et créer des opportunités pour les ex-combattants.",
        },
        {
          title: "Programme de formation professionnelle",
          description:
            "Mise en place de programmes de formation adaptés aux besoins du marché du travail pour les ex-combattants.",
        },
      ]}
      websiteUrl="https://www.undp.org/"
    />
  )
}

