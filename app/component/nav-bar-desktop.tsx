"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ href, linkText }: { href: string; linkText: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                font-semibold text-md px-4 py-2 rounded-xs transition-all duration-200 font-merry
                ${isActive
                    ? "text-[var(--gullgossen)] underline underline-offset-4"
                    : "text-[var(--gdansk)] hover:text-[var(--gullgossen)]"
                }
            `}
        >
            {linkText}
        </Link>
    );
};

const NavBarDesktop = () => {
    return (
        <nav className="flex justify-between items-center">
            <div>
                <LinkItem href="/" linkText="Hem" />
                <LinkItem href="/lunch" linkText="Lunch" />
                <LinkItem href="/konferens" linkText="Konferens" />
                <LinkItem href="/catering" linkText="Catering" />
            </div>
        </nav>
    );
};

export default NavBarDesktop;