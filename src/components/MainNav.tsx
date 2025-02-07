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
import { ChevronDown } from "lucide-react"
export function MainNav() {

  return (
    <div className="hidden md:flex items-center space-x-8 justify-end w-full">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <NavigationMenu>
            <NavigationMenuList>
                {
                    mainNav.map((navItem, index) => (
                        <NavigationMenuItem key={index}>
                            {navItem.items && navItem.items.length > 0 ? (
                            <>
                                <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-yellow-300 ">
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                        {navItem.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="row-span-3">
                                                {item.items && item.items.length > 0 ? (
                                                    <details>
                                                        <summary className="flex items-center cursor-pointer">
                                                            <span className={navigationMenuTriggerStyle()}>{item.title}</span>
                                                            <ChevronDown
                                                                className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                                                aria-hidden="true"
                                                            />
                                                        </summary>
                                                        <ul className="pl-4">
                                                            {item.items.map((subItem, subItemIndex) => (
                                                                <li key={subItemIndex}>
                                                                    {'href' in subItem ? (
                                                                        <Link href={subItem.href ?? '#'} legacyBehavior passHref>
                                                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                                                {subItem.title}
                                                                            </NavigationMenuLink>
                                                                        </Link>
                                                                    ) : (
                                                                        <details>
                                                                            <summary className="flex items-center cursor-pointer">
                                                                                <span className={navigationMenuTriggerStyle()}>{subItem.title}</span>
                                                                                <ChevronDown
                                                                                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </summary>
                                                                            <ul className="pl-4">
                                                                                {subItem.items.map((nestedItem, nestedItemIndex) => (
                                                                                    <li key={nestedItemIndex}>
                                                                                        <Link href={nestedItem.href ?? '#'} legacyBehavior passHref>
                                                                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                                                                {nestedItem.title}
                                                                                            </NavigationMenuLink>
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </details>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </details>
                                                ) : (
                                                    <Link href={item.href ?? '#'} legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            {item.title}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                            ) : (
                                <Link
                                    href={navItem?.href ?? '#'}
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