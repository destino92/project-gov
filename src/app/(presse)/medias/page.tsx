"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { MediaFolder } from "@/components/MediaFolder"
import { MediaCarousel } from "@/components/MediaCaroussel"
import BottomNav from "@/components/Bottom-Nav"

const mediaFolders = [
  {
    id: 1,
    title: "Visite présidentielle à Pointe-Noire",
    date: "15 janvier 2024",
    coverImage: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    itemCount: 12,
    items: [
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
        caption: "Le Président accueilli par les officiels locaux",
      },
      {
        type: "video" as const,
        src: "/placeholder.mp4",
        caption: "Discours du Président lors de l'inauguration du nouveau port",
      },
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg",
        caption: "Rencontre avec les représentants du secteur pétrolier",
      },
      // Add more items as needed
    ],
  },
  {
    id: 2,
    title: "Cérémonie de remise des diplômes",
    date: "10 janvier 2024",
    coverImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    itemCount: 8,
    items: [
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        caption: "Vue d'ensemble de la cérémonie",
      },
      { type: "video" as const, src: "/placeholder.mp4", caption: "Discours du ministre de l'Éducation" },
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
        caption: "Remise des diplômes aux majors de promotion",
      },
      // Add more items as needed
    ],
  },
  {
    id: 3,
    title: "Forum économique international",
    date: "5 janvier 2024",
    coverImage: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    itemCount: 15,
    items: [
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
        caption: "Séance d'ouverture du forum",
      },
      { type: "video" as const, src: "/placeholder.mp4", caption: "Table ronde sur les investissements étrangers" },
      {
        type: "image" as const,
        src: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
        caption: "Signature d'accords de coopération",
      },
      // Add more items as needed
    ],
  },
]

export default function MediaPage() {
  const [selectedFolder, setSelectedFolder] = useState<(typeof mediaFolders)[0] | null>(null)

  return (
    <>
      {/* Page header */}
      <header className="bg-white border-b mb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">Photos/Vidéos</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Galerie média</h1>
        </div>
      </header>

      {/* Media folders grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mediaFolders.map((folder) => (
          <MediaFolder
            key={folder.id}
            title={folder.title}
            date={folder.date}
            coverImage={folder.coverImage}
            itemCount={folder.itemCount}
            onClick={() => setSelectedFolder(folder)}
          />
        ))}
      </div>

      {/* Media Carousel */}
      {selectedFolder && (
        <MediaCarousel isOpen={!!selectedFolder} onClose={() => setSelectedFolder(null)} items={selectedFolder.items} />
      )}

      <BottomNav title="Historique" url="/historique" />
    </>
  )
}

