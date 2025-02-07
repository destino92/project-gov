import { Facebook, Twitter, Youtube, Linkedin, MailIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-4 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Restez Connectés Section */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">RESTEZ CONNECTÉS</h3>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="hover:text-gray-300">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>

              <div>
                <Link href="/contact" className="hover:text-gray-300 flex font-semibold">
                  <MailIcon className="mr-2" /> Contactez-Nous 
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">ADRESSE</h3>
              <p>
                Haut commissariat à la réinsertion des ex-combattants
              </p>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-2 pt-4 border-t border-gray-800 text-sm  flex flex-wrap justify-between items-center">
          <p>Copyright © 2025 Haut commissariat à la réinsertion des ex-combattants</p>
          <div className="flex items-center gap-4">
            <p>
              Développé par{" "}
              <a href="#" >
                FnStack
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}