"use client";
import React, { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "./hamburger-icon";
import CloseIcon from "./close-icon";
const NavBarMobile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Växlar mellan att öppna och stänga menyn
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-8 right-4 z-50">
                    <CloseIcon onClick={toggleMenu} />
                </div>
            )}
            {!isOpen && (
                <div className="fixed top-8 right-4 z-50">
                    <HamburgerIcon onClick={toggleMenu} />
                </div>
            )}

            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } fixed top-0 left-0 w-full h-full bg-neutral-50 bg-opacity-80 z-40 flex flex-col items-center justify-center space-y-6`}
            >
                <Link
                    href="/"
                    className="text-xl transition-all duration-200"
                    onClick={toggleMenu}
                >
                    Hem
                </Link>
                <Link
                    href="/sortiment"
                    className="text-xl transition-all duration-200"
                    onClick={toggleMenu}
                >
                    Sortiment
                </Link>
                <Link
                    href="/om-oss"
                    className="text-xl transition-all duration-200"
                    onClick={toggleMenu}
                >
                    Om oss
                </Link>
                <Link
                    href="/kontakt"
                    className="text-xl transition-all duration-200"
                    onClick={toggleMenu}
                >
                    Kontakt
                </Link>
            </div>
        </>
    );
};

export default NavBarMobile;
