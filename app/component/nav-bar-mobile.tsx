"use client";
import React, { useEffect, useState } from "react";
import HamburgerIcon from "./hamburger-icon";
import CloseIcon from "./close-icon";
import { useRouter } from "next/navigation";
const NavBarMobile: React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const navigate = (path: string) => {
        router.push(path);
        setIsOpen(false)

    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-8 right-4 z-50">
                    <CloseIcon onClick={() => setIsOpen(false)} />
                </div>
            )}
            {!isOpen && (
                <div className="fixed top-8 right-4 z-50">
                    <HamburgerIcon onClick={() => setIsOpen(true)} />
                </div>
            )}

            <div
                className={`${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                } fixed top-0 left-0 w-full bg-orange-100 bg-opacity-80 z-40 flex flex-col items-center justify-start space-y-6 py-24 transition-transform duration-300`}
            >
                <button className="text-xl font-semibold font-roboto" onClick={() => navigate("/")}>
                    Hem
                </button>
                <button className="text-xl font-semibold" onClick={() => navigate("/sortiment")}>
                    Sortiment
                </button>
                <button className="text-xl font-semibold" onClick={() => navigate("/om-oss")}>
                    Om oss
                </button>
                <button className="text-xl font-semibold" onClick={() => navigate("/kontakt")}>
                    Kontakt
                </button>
            </div>
        </>
    );
};

export default NavBarMobile;
