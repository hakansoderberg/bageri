"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
    href: string;
    text: string;
};

type NavBarDesktopProps = {
    items: NavItem[];
};

const LinkItem = ({ href, text }: NavItem) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                font-semibold text-md px-4 py-2 rounded-xs transition-all duration-200 font-merry
                ${
                    isActive
                        ? "text-[var(--gullgossen)] underline underline-offset-4"
                        : "text-[var(--gdansk)] hover:text-[var(--gullgossen)]"
                }
            `}
        >
            {text}
        </Link>
    );
};

const NavBarDesktop = ({ items }: NavBarDesktopProps) => {
    return (
        <nav className="flex justify-between items-center">
            <div>
                {items.map((item) => (
                    <LinkItem
                        key={item.href}
                        href={item.href}
                        text={item.text}
                    />
                ))}
            </div>
        </nav>
    );
};

export default NavBarDesktop;