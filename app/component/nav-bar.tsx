import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="flex items-center justify-center space-x-6">
            <Link
                href="/"
                className="text-black text-lg  px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
                Hem
            </Link>
            <Link
                href="/sortiment"
                className="text-black text-lg  px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
                Sortiment
            </Link>

            <Link
                href="/om-oss"
                className="text-black text-lg  px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
                Om oss
            </Link>
            <Link
                href="/kontakt"
                className="text-black text-lg  px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
                Kontakt
            </Link>
        </nav>
    );
};

export default NavBar;
