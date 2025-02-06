'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <nav className={`sticky top-0 z-50 bg-yellow-300 w-full transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 text-lg">
        <div className="flex items-center justify-between py-4 w-full">
          <Link href="/" className="flex text-2xl font-bold items-center space-x-2 text-primary">
          <div className='flex items-center space-x-4'>
            <Image src="/coat-of-arm-cg.png" alt="Répulique du CONGO" width="68" height="68" />
            <hr className="border-r-2 border-primary h-12" />
            <div className="text-sm">
              PRÉSIDENCE DE LA RÉPUBLIQUE<br />
              CABINET DU CHEF L&apos;ÉTAT<br />
              <span className='md:text-2xl text-gray-900'>HAUT COMMISSARIAT À LA RÉINSERTION DES EX-COMBATTANTS</span>
            </div>
          </div>
          </Link>

          <MobileNav />
        </div>
      </div>
      <MainNav />
      <div className='hidden md:block w-full h-2 bg-cover sm:bg-center' style={{ backgroundImage: 'url(/Republic_of_Congo_header.png)' }}></div>
    </nav>
  )
}

export default NavBar
