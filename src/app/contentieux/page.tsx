import { ComponentPageLayout } from "@/components/component-page-layout"

export default function ContentieuxPage() {
  return (
    <ComponentPageLayout
      title="Composante aux Contentieux et Recours"
      description="Assurer un traitement équitable des litiges et des recours"
      imageSrc="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg"
    >
      <h2>Notre mission</h2>
      <p>
        La Composante aux Contentieux et Recours est dédiée à la résolution équitable des litiges et au traitement des
        recours liés au processus de réinsertion des ex-combattants. Nous veillons à ce que les droits de chacun soient
        respectés et que les conflits soient résolus de manière juste et transparente.
      </p>

      <h2>Nos responsabilités</h2>
      <ul>
        <li>Traitement des plaintes et des recours des ex-combattants</li>
        <li>Médiation dans les conflits liés au processus de réinsertion</li>
        <li>Conseil juridique sur les questions de réinsertion</li>
        <li>Suivi des cas de contentieux jusqu&apos;à leur résolution</li>
      </ul>

      <h2>Notre processus</h2>
      <ol>
        <li>Réception et enregistrement des plaintes ou recours</li>
        <li>Évaluation initiale et catégorisation des cas</li>
        <li>Investigation et collecte de preuves</li>
        <li>Médiation ou arbitrage selon la nature du cas</li>
        <li>Prise de décision et communication des résultats</li>
        <li>Suivi de la mise en œuvre des décisions</li>
      </ol>

      <h2>Types de cas traités</h2>
      <ul>
        <li>Litiges liés à l&apos;éligibilité aux programmes de réinsertion</li>
        <li>Conflits sur la distribution des ressources ou des opportunités</li>
        <li>Plaintes concernant la qualité des services de réinsertion</li>
        <li>Cas de discrimination ou de traitement inéquitable</li>
      </ul>

      <blockquote>
        &quot;La justice et l&apos;équité sont les piliers d&apos;une réinsertion réussie et d&apos;une paix durable.&quot;
      </blockquote>

      <p>
        Si vous êtes un ex-combattant et que vous pensez avoir été traité injustement dans le processus de réinsertion,
        nhésitez pas à nous contacter. Notre équipe est là pour vous écouter et vous aider à résoudre votre problème de
        manière équitable et transparente.
      </p>
    </ComponentPageLayout>
  )
}

