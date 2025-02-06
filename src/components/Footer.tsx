import { Facebook, Twitter, Youtube, Rss } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { mainNav } from "@/config/nav"


export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="text-center">
            <div className="mt-6">
              <Image
                src="/white_logo_cg.png"
                alt="République du Congo Logo"
                width={98}
                height={95}
                className="mb-2 mx-auto"
              />
              <p className="text-lg font-bold mx-auto">République du Congo</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Raccourcis Section */}

            {mainNav.map((navItem) => (
              <div key={navItem.title}>
                <h3 className="text-gray-400 font-semibold mb-4">{navItem.title}</h3>
                {navItem.items && navItem.items.length > 0 && (
                  <ul className="space-y-2">
                    {navItem.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link href={subItem.href ?? '#'} className="hover:text-gray-300">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Restez Connectés Section */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">RESTEZ CONNECTÉS</h3>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Rss className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between items-center">
          <p>Copyright © 2025 Haut commissariat à la réinsertion des ex-combattants</p>
          <div className="flex items-center gap-4">
            <p>
              Développé par{" "}
              <a href="#" className="text-white">
                FnStack
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}