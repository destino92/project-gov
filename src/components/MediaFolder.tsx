import Image from "next/image"
import { Folder } from "lucide-react"

interface MediaFolderProps {
  title: string
  date: string
  coverImage: string
  itemCount: number
  onClick: () => void
}

export function MediaFolder({ title, date, coverImage, itemCount, onClick }: MediaFolderProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Folder className="text-white w-12 h-12" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-sm text-gray-600">{itemCount} éléments</p>
      </div>
    </div>
  )
}

