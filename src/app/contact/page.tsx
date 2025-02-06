"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/coat-of-arm-cg.png?height=120&width=120"
              alt="République du Congo"
              width={120}
              height={120}
              className="mb-6"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Haut commissariat à la réinsertion des ex-combattants</h2>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 via-yellow-400 to-red-600"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-8">Contactez-nous par e-mail</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nom" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input id="nom" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="prenom" className="text-sm font-medium">
                    Prénom
                  </label>
                  <Input id="prenom" placeholder="Votre prénom" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telephone" className="text-sm font-medium">
                    Téléphone
                  </label>
                  <Input id="telephone" type="tel" placeholder="Votre numéro" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Votre message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-yellow-300 hover:bg-primary text-gray-900 hover:text-white transition-colors duration-200">Envoyer votre message</Button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold mb-6">PALAIS DU PEUPLE</h3>
              <div className="space-y-4 text-gray-600">
                <p>B.P.: 2087 RP, Brazzaville</p>
                <p>République du Congo</p>
                <p>Téléphone : +242 06 444 2848</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-sm p-2 h-[400px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.6744703007707!2d15.262359373754462!3d-4.283313246244175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a32555d158381%3A0xc6eea0543400c8bb!2sPalais%20Pr%C3%A9sidentiel!5e0!3m2!1sfr!2scg!4v1738847418447!5m2!1sfr!2scg" 
                    width="100%"
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

