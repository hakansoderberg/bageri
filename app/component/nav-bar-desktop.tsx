import Link from "next/link";
import React from "react";

const NavBarDesktop: React.FC = () => {
    return (
        <>
            <nav className="flex items-center justify-center space-x-6">
                <Link
                    href="/"
                    className="font-semibold text-xl px-4 py-2 rounded-xs hover:underline  transition-all duration-200  font-merry"
                >
                    Hem
                </Link>
                <Link
                    href="/sortiment"
                    className="font-semibold text-xl px-4 py-2 rounded-xs hover:underline transition-all duration-200  font-merry"
                >
                    Sortiment
                </Link>

                <Link
                    href="/om-oss"
                    className="font-semibold text-xl px-4 py-2 rounded-xs hover:underline transition-all duration-200  font-merry"
                >
                    Om oss
                </Link>
                <Link
                    href="/kontakt"
                    className="font-semibold text-xl px-4 py-2 rounded-xs hover:underline transition-all duration-200  font-merry"
                >
                    Kontakt
                </Link>
            </nav>
        </>
    );
};

export default NavBarDesktop;
