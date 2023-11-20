'use client'

import React from 'react'
import { Heart, Search, ShoppingCart, Store, User } from "lucide-react"
import { Righteous } from 'next/font/google'
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';

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
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent focus:bg-transparent hover:bg-secondary/90`}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent focus:bg-transparent hover:bg-secondary/90`}>
                            Categories
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent focus:bg-transparent hover:bg-secondary/90`}>
                            Products
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent focus:bg-transparent hover:bg-secondary/90`}>
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
        <header className='container mx-auto py-1 relative z-10 overflow-hidden'>
            <div className='flex justify-between items-center py-1 text-primary/70'>
                <span className='flex items-center gap-2 text-xs'>
                    <Store className='w-4' />
                    Welcome to Desmel Electronics
                </span>
                <button className='text-xs flex items-center gap-2'>
                    <User className='w-4' /> My Account
                </button>
            </div>
            <div className='flex justify-between items-center py-1'>
                <div className='flex items-center gap-2'>
                    <Link href={"/"} className={righteous.className + " text-2xl"}>
                        <Image src={'/logo.png'} width={150} height={100} alt='logo' />
                    </Link>
                </div>
                <div className='flex gap-3'>
                    <NavList />
                    <span className='border border-primary/25'></span>
                    <div className='flex gap-3 text-primary/50'>
                        <ModeToggle />
                        <Button variant={'ghost'} className='bg-transparent hover:bg-transparent focus-visible:ring-0 ring-offset-0 p-0'>
                            <Search className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                        <Button variant={'ghost'} className='bg-transparent hover:bg-transparent focus-visible:ring-0 ring-offset-0 p-0'>
                            <Heart className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                        <Button variant={'ghost'} className='bg-transparent hover:bg-transparent focus-visible:ring-0 ring-offset-0 p-0'>
                            <ShoppingCart className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar