'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className={`sticky top-0 z-50 bg-white w-full transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 text-lg">
        <div className="flex items-center justify-between py-4 w-full">
          <Link href="/" className="flex text-2xl font-bold items-center space-x-2 text-primary">
            <div className='flex items-center space-x-4'>
                <Image src="/coat-of-arm-cg.png" alt="Répulique du CONGO" width="68" height="68" />
                <hr className="border-r-2 border-primary h-12" />
                <div className="text-sm">
                    <span className='font-semibold text-black'>République du CONGO</span> <br />
                    MINISTERE A LA REINSERTION <br />
                    DES EX COMBATTANTS
                </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive("/") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Le Ministre</Link>
            <Link href="/cabinet" className={`${isActive("/cabinet") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Cabinet</Link>
            <Link href="/projet" className={`${isActive("/projet") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Le projet</Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-primary transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <Link href="/" className={`${isActive("/") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Le Ministre</Link>
              <Link href="/cabinet" className={`${isActive("/cabinet") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Cabinet</Link>
              <Link href="/projet" className={`${isActive("/projet") ? 'border-b-2 border-primary text-primary' : ''} hover:text-primary`}>Le projet</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
