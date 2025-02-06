import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BottomNav {
    title: string;
    url: string;
}

export default function BottomNav({title, url}: BottomNav) {
  return (
    <div className="bg-yellow-300 text-white py-12 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-900 flex items-center justify-center space-x-4">
        <h3 className="text-xl sm:text-4xl font-medium">{title}</h3><Link href={url} className="border-4 group border-gray-900 transition-colors duration-200 hover:border-gray-700 rounded-full p-4"><ChevronRight /></Link>
      </div>
    </div>
  )
}