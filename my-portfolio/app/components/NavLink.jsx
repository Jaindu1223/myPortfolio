"use client";

import Link from "next/link";

const NavLink = ({ href, title }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = document.querySelector('nav').offsetHeight; // Get navbar height
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    }
    return (
        <Link
            href={href} onClick={handleClick}
            className="block py-2 pl-3 pr-4 text-gray-500 sm:text-xl rounded md:p-0 hover:text-gray-900"
        >
            {title}
        </Link>
    );
};

export default NavLink;
