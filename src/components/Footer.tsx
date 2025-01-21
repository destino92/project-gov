import { Facebook, Twitter, Youtube, Rss } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-12 pb-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Raccourcis Section */}
          <div className="text-center">
            <div className="mt-6">
              <Image
                src="/white_logo_cg.png"
                alt="République du Congo Logo"
                width={196}
                height={190}
                className="mb-2 mx-auto"
              />
              <p className="text-lg font-bold mx-auto">République du Congo</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="mt-1">📍</div>
                <p>
                  blvd Dénis Sassou Nguesso &<br />
                  ave Cardinal Emile Biayenda,
                  <br />
                  BP 2083, Brazzaville, Congo
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div>✉️</div>
                <a href="mailto:contact@finances.gouv.cg" className="hover:text-gray-300">
                  contact@finances.gouv.cg
                </a>
              </div>
            </div>
          </div>

          {/* Liens Utiles Section */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">LIENS UTILES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  gouvernement.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  sgg.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  douanes.gouv.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  www.impots.gouv.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  grands-travaux.gouv.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  ecofin.assemblee-nationale.cg
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  ecofin.senat.cg
                </Link>
              </li>
            </ul>
          </div>

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
            {/* <div>
              <h4 className="text-sm mb-3">Inscrivez-vous à notre liste de diffusion</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="adresse e-mail"
                  className="bg-white/10 border-0 text-white placeholder:text-gray-400"
                />
                <Button variant="secondary" className="bg-[#5B8C34] hover:bg-[#4A7128] text-white">
                  S&apos;INSCRIRE
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between items-center">
          <p>Copyright © 2025 Ministère de l&apos;Économie & des Finances</p>
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