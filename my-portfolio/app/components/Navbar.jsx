"use client"; 

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./NavLink";
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

const NavLinks = [
    {
        title: "About Us",
        path: "#",
    },
    {
        title: "Our Services",
        path: "#",
    },
    {
        title: "Contact Us",
        path: "#",
    },
];

export const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent opacity-100 ">
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'}>
                    <Image
                        src='/logo/mylogo.png'
                        alt="hero image"
                        className="w-12 h-12 rounded-full"
                        width={52}
                        height={52}
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!NavbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-gray-600 text-gray-600 hover:text-gray-800 hover:border-gray-800">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-gray-600 text-gray-600 hover:text-gray-800 hover:border-gray-800">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {NavbarOpen ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
    );
};
