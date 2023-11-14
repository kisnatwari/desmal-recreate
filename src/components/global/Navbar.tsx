import React from 'react'
import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import Logo from './Logo';

const righteous = Righteous({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

type Props = {}

const Navbar = (props: Props) => {
    const linksClass = "hover:text-[#66BD8F] dark:hover:text-cyan-600 after:w-full after:scale-0 after:h-0.5 relative after:absolute after:bg-[#66BD8F] dark:after:bg-cyan-600 after:-bottom-1 after:left-0 px-1 hover:after:scale-100 duration-300 after:duration-300";
    return (
        <>
            {/* Desktop devices navbar */}
            <div className={`container hidden sm:flex justify-between items-center py-3  ${righteous.className}`}>
                <div className='flex items-center gap-2'>
                    <Link href={"/"} className='text-lg'>
                        {/* <Image src="/logo.png" alt='Logo' width={200} height={20} /> */}
                        <Logo />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-3'>
                            <li className={linksClass}>
                                <Link href={"/projects"}>Projects</Link>
                            </li>
                            <li className={linksClass}>
                                <Link href={"/proficiency"}>Proficiency</Link>
                            </li>
                            <li className={linksClass}>
                                <Link href={"/message"}>Message</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex gap-4 items-center'>
                    <ModeToggle />
                    <Link href={"/"}>Blogs</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;