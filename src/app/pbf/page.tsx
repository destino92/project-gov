import { ProgramPage } from "@/components/ProgramPage"

export default function PBFPage() {
  return (
    <ProgramPage
      title="Programme de Biens Fongibles (PBF)"
      subtitle="Soutien à la réinsertion socio-économique"
      description="Le Programme de Biens Fongibles (PBF) est une initiative visant à soutenir la réinsertion socio-économique des ex-combattants et des communautés affectées par les conflits. Ce programme fournit des ressources et des opportunités pour faciliter la transition vers une vie civile productive."
      objectives={[
        "Fournir des biens et services essentiels aux ex-combattants pour leur réinsertion",
        "Soutenir le développement de compétences professionnelles",
        "Faciliter l'accès aux opportunités économiques locales",
        "Promouvoir la cohésion sociale dans les communautés d'accueil",
      ]}
      impact="Le PBF a contribué à la réinsertion réussie de nombreux ex-combattants, améliorant leurs conditions de vie et renforçant la stabilité dans les zones post-conflit. Le programme a également stimulé l'économie locale en encourageant l'entrepreneuriat et la création d'emplois."
      image="https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      documentLink="/documents/pbf-documentation.pdf"
    />
  )
}