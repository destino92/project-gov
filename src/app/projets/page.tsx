import { ComponentPageLayout } from "@/components/component-page-layout"

export default function ProjetsPage() {
  return (
    <ComponentPageLayout
      title="Composante à l'Exécution des Projets"
      description="Mettre en œuvre des projets concrets pour la réinsertion des ex-combattants"
      imageSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
    >
      <h2>Notre mission</h2>
      <p>
        La Composante à l&apos;Exécution des Projets est chargée de la mise en œuvre concrète des initiatives de réinsertion.
        Nous transformons les stratégies en actions tangibles pour soutenir efficacement les ex-combattants dans leur
        nouvelle vie.
      </p>

      <h2>Nos domaines d&apos;intervention</h2>
      <ul>
        <li>Projets de formation professionnelle</li>
        <li>Initiatives de développement économique local</li>
        <li>Programmes de réhabilitation des infrastructures communautaires</li>
        <li>Projets agricoles et d&apos;élevage</li>
      </ul>

      <h2>Notre méthodologie</h2>
      <p>Notre approche de gestion de projet comprend :</p>
      <ol>
        <li>Évaluation des besoins et consultation des parties prenantes</li>
        <li>Conception participative des projets</li>
        <li>Mobilisation des ressources et partenariats</li>
        <li>Mise en œuvre avec un suivi rigoureux</li>
        <li>Évaluation d&apos;impact et partage des leçons apprises</li>
      </ol>

      <h2>Projets phares</h2>
      <ul>
        <li>Centre de formation professionnelle pour ex-combattants à Brazzaville</li>
        <li>Programme de microcrédits pour les petites entreprises à Pointe-Noire</li>
        <li>Projet de réhabilitation des routes rurales dans la région de la Bouenza</li>
        <li>Initiative d&apos;agriculture durable dans le département du Pool</li>
      </ul>

      <blockquote>&quot;Chaque projet réussi est un pas de plus vers une paix durable et une société inclusive&quot;</blockquote>

      <p>
        Si vous avez des idées de projets ou si vous souhaitez participer à nos initiatives, n&apos;hésitez pas à nous
        contacter. Votre implication peut faire une réelle différence dans la vie des ex-combattants et de leurs
        communautés.
      </p>
    </ComponentPageLayout>
  )
}

