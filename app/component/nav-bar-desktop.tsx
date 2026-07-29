import Link from "next/link";
import React from "react";

const LinkItem = ({ href, linkText }: { href: string; linkText: string }) => {
    return (
        <Link
            href={href}
            className="font-semibold text-[var(--waleza)] text-md px-4 py-2 rounded-xs hover:text-[var(--gullgossen)]  transition-all duration-200  font-merry"
        >
            {linkText}
        </Link>
    );
};

const NavBarDesktop: React.FC = () => {
    return (
        <>
            <nav className="flex justify-between items-center">
                <div>
                    <LinkItem href="/" linkText="Hem" />
                    <LinkItem href="/lunch" linkText="Lunch" />
                    <LinkItem href="/konferens" linkText="Konferens" />
                    <LinkItem href="/catering" linkText="Catering" />
                </div>
                <div>
                    <LinkItem href="/favoriter" linkText="❤︎" />
                    <LinkItem href="/favoriter" linkText="⛔︎" />
                    <LinkItem href="/favoriter" linkText="⌘" />
                    
                </div>
            </nav>
        </>
    );
};

export default NavBarDesktop;
