import Link from "next/link";
import React from "react";

const NavBarDesktop: React.FC = () => {
    return (
        <>
            <nav className="flex items-center justify-center space-x-6">
                <Link
                    href="/"
                    className="font-medium text-xl px-4 py-2 rounded-lg hover:text-amber-500 transition-all duration-200 text-gray-700"

                >
                    Hem
                </Link>
                <Link
                    href="/sortiment"
                    className="font-medium text-xl px-4 py-2 rounded-lg hover:text-amber-500 transition-all duration-200 text-gray-700"
                >
                    Sortiment
                </Link>

                <Link
                    href="/om-oss"
                    className="font-medium text-xl px-4 py-2 rounded-lg hover:text-amber-500 transition-all duration-200 text-gray-700"
                >
                    Om oss
                </Link>
                <Link
                    href="/kontakt"
                    className="font-medium text-xl px-4 py-2 rounded-lg hover:text-amber-500 transition-all duration-200 text-gray-700"
                >
                    Kontakt
                </Link>
            </nav>
        </>
    );
};

export default NavBarDesktop;
