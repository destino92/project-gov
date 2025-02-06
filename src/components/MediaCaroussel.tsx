'use client';

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  caption: string
}

interface MediaCarouselProps {
  isOpen: boolean
  onClose: () => void
  items: MediaItem[]
}

export function MediaCarousel({ isOpen, onClose, items }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  const currentItem = items[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black">
        <div className="relative h-[80vh]">
          {currentItem.type === 'image' ? (
            <Image
              src={currentItem.src || "/placeholder.svg"}
              alt={currentItem.caption}
              fill
              className="object-contain"
            />
          ) : (
            <video
              src={currentItem.src}
              className="w-full h-full object-contain"
              controls
            />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="bg-white p-4">
          <p className="text-sm text-gray-600">{currentItem.caption}</p>
          <p className="text-sm text-gray-500 mt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
