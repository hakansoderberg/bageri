"use client";
import Link from "next/link";
import Image from "next/image";
import NavBarDesktop from "./nav-bar-desktop";
import NavBarMobile from "./nav-bar-mobile";
import Hero from "./hero";

const Header = () => {
    const navItems = [
    { href: "/", text: "Hem" },
    { href: "/lunch", text: "Lunch" },
    { href: "/catering", text: "Catering" },
    { href: "/konferens", text: "Konferens" },
    { href: "/bar", text: "Bar & Evenemang" },
];
    return (
        <header className="bg-navy-deep py-4 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start px-4 md:px-8 py-4 md:py-8">
                <Link href="/">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image className="pl-4" src="/images/ch-logo.png" alt="Haugen baugen logo" width={50} height={50} />
                    <h1 className="inline text-sm md:text-base mb-0 pl-2">Gärdehov Restaurang & Catering</h1>
                </div>
                
                </Link>
                <div className="md:hidden">
                    <NavBarMobile items={navItems} />
                </div>
                <div className="hidden md:flex">
                    <NavBarDesktop items={navItems} />
                </div>
            </div>
        </header>
    );
};
export default Header;
