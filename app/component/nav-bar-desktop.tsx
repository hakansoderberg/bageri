import Link from "next/link";
import React from "react";

const NavBarDesktop: React.FC = () => {
    return (
        <>
            <nav className="flex items-center justify-center space-x-6">
                <Link
                    href="/"
                    className="font-semibold text-xl px-4 py-2 rounded-sm hover:text-amber-500 transition-all duration-200 text-gray-900"

                >
                    Hem
                </Link>
                <Link
                    href="/sortiment"
                    className="font-semibold text-xl px-4 py-2 rounded-sm hover:text-amber-500 transition-all duration-200 text-gray-900"
                >
                    Sortiment
                </Link>

                <Link
                    href="/om-oss"
                    className="font-semibold text-xl px-4 py-2 rounded-sm hover:text-amber-500 transition-all duration-200 text-gray-900"
                >
                    Om oss
                </Link>
                <Link
                    href="/kontakt"
                    className="font-semibold text-xl px-4 py-2 rounded-sm hover:text-amber-500 transition-all duration-200 text-gray-900"
                >
                    Kontakt
                </Link>
            </nav>
        </>
    );
};

export default NavBarDesktop;
