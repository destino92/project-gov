import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface OrgChartBoxProps {
  title: string
  name?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

export function OrgChartBox({ title, name, image, className, children }: OrgChartBoxProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : ""

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {name && (
          <div className="flex flex-col items-center mb-2">
            <Avatar className="w-16 h-16 border-2 border-gray-200">
              <AvatarImage src={image || "/placeholder.svg"} alt={name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium mt-1 text-gray-900">{name}</span>
          </div>
        )}
        <div className="bg-white border-2 border-gray-800 rounded px-4 py-2 text-center min-w-[150px]">
          <span className="text-sm font-medium whitespace-normal">{title}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

