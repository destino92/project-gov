import { ProgramPage } from "@/components/ProgramPage"

export default function FondsJaponais1Page() {
  return (
    <ProgramPage
      title="Fonds Japonais 1"
      subtitle="Projet de soutien à la réinsertion socio-économique des ex-combattants"
      description="Le Fonds Japonais 1 est un programme de coopération entre la République du Congo et le Japon, visant à soutenir la réinsertion socio-économique des ex-combattants. Ce projet met l'accent sur la formation professionnelle et le développement de micro-entreprises."
      objectives={[
        "Offrir des formations professionnelles adaptées aux besoins du marché local",
        "Fournir un soutien financier et technique pour la création de micro-entreprises",
        "Faciliter l'accès aux marchés locaux pour les produits et services des bénéficiaires",
        "Renforcer les capacités des institutions locales impliquées dans la réinsertion",
      ]}
      impact="Le Fonds Japonais 1 a permis de former et d'accompagner de nombreux ex-combattants dans leur réinsertion économique. Le programme a contribué à la création de plusieurs micro-entreprises viables, générant des emplois et des revenus pour les bénéficiaires et leurs communautés."
      image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      documentLink="/documents/fonds-japonais-1-documentation.pdf"
    />
  )
}

