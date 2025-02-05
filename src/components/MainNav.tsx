"use client"

import Link from "next/link"
import { mainNav } from "@/config/nav"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
export function MainNav() {

  return (
    <div className="hidden md:flex items-center space-x-8">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <NavigationMenu>
            <NavigationMenuList>
                {
                    mainNav.map((navItem, index) => (
                        <NavigationMenuItem key={index}>
                            {navItem.items && navItem.items.length > 0 ? (
                            <>
                                <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                                <NavigationMenuContent className="border-2 border-yellow-300">
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                        {navItem.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="row-span-3">
                                                <Link
                                                    href={navItem.href ?? '#'}
                                                    legacyBehavior passHref
                                                >
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        {item.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                            ) : (
                                <Link
                                    href={navItem.href ?? '#'}
                                    legacyBehavior passHref
                                >
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {navItem.title} 
                                    </NavigationMenuLink>
                                </Link>
                            )}
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}