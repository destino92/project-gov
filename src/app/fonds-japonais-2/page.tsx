import { ProgramPage } from "@/components/ProgramPage"

export default function FondsJaponais2Page() {
  return (
    <ProgramPage
      title="Fonds Japonais 2"
      subtitle="Renforcement de la réinsertion et de la cohésion sociale"
      description="Le Fonds Japonais 2 est la continuation et l'expansion du programme initial, visant à renforcer la réinsertion des ex-combattants et à promouvoir la cohésion sociale dans les communautés d'accueil. Ce programme met l'accent sur l'intégration communautaire et le développement économique durable."
      objectives={[
        "Élargir les opportunités de formation professionnelle et d'entrepreneuriat",
        "Promouvoir des projets communautaires impliquant ex-combattants et résidents locaux",
        "Renforcer les mécanismes de résolution des conflits au niveau local",
        "Soutenir les initiatives de développement économique inclusif",
      ]}
      impact="Le Fonds Japonais 2 a approfondi l'impact de son prédécesseur en favorisant une intégration plus complète des ex-combattants dans leurs communautés. Le programme a contribué à réduire les tensions sociales, à améliorer la perception des ex-combattants, et à stimuler le développement économique local de manière inclusive."
      image="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      documentLink="/documents/fonds-japonais-2-documentation.pdf"
    />
  )
}

