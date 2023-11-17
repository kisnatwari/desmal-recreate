'use client'

import React from 'react'
import { Heart, Search, ShoppingCart, Store, User } from "lucide-react"
import { Righteous } from 'next/font/google'
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';

const righteous = Righteous({
    subsets: ['latin'],
    weight: "400"
});

const NavList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Categories
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Products
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const Navbar = () => {
    return (
        <header className='container mx-auto py-5'>
            <div className='flex justify-between items-center'>
                <span className='flex items-center gap-2 text-xs'>
                    <Store className='w-4' />
                    Welcome to Desmel Electronics
                </span>
                <button className='text-xs flex items-center gap-2'>
                    <User className='w-4' /> My Account
                </button>
            </div>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Link href={"/"} className={righteous.className + " text-2xl"}>
                        Desmel
                    </Link>
                    <NavList />
                </div>
                <div className='flex gap-3'>
                    <Search className='w-5' />
                    <Heart className='w-5' />
                    <ShoppingCart className='w-5' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar