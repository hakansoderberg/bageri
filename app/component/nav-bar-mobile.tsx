"use client";

import React, { useState } from "react";
import HamburgerIcon from "./hamburger-icon";
import CloseIcon from "./close-icon";
import { useRouter, usePathname } from "next/navigation";

type NavItem = {
    href: string;
    text: string;
};

type NavBarMobileProps = {
    items: NavItem[];
};

const NavBarMobile: React.FC<NavBarMobileProps> = ({ items }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navigate = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    const LinkItem = ({ href, text }: NavItem) => {
        const isActive = pathname === href;

        return (
            <button
                onClick={() => navigate(href)}
                className={`
                    text-xl font-semibold font-merry transition-all duration-200
                    ${
                        isActive
                            ? "text-[var(--gullgossen)] underline underline-offset-4"
                            : "text-[var(--gdansk)] hover:text-[var(--gullgossen)]"
                    }
                `}
            >
                {text}
            </button>
        );
    };

    return (
        <>
            {isOpen ? (
                <div className="fixed top-4 right-4 z-50">
                    <CloseIcon onClick={() => setIsOpen(false)} />
                </div>
            ) : (
                <div className="fixed top-4 right-4 z-50">
                    <HamburgerIcon onClick={() => setIsOpen(true)} />
                </div>
            )}

            <div
                className={`${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                } fixed top-0 left-0 w-full bg-primary bg-opacity-80 z-40 flex flex-col items-center justify-start space-y-6 py-24 transition-transform duration-300`}
            >
                {items.map((item) => (
                    <LinkItem
                        key={item.href}
                        href={item.href}
                        text={item.text}
                    />
                ))}
            </div>
        </>
    );
};

export default NavBarMobile;