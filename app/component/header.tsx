import Image from "next/image";
import NavBarDesktop from "./nav-bar-desktop";

const Header = () => {
    return (
    <header className="bg-dark py-4 md:mb-16 border-b border-[var(--waleza)]">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start px-4 md:px-8 py-4 md:py-8">
        <div className="flex items-center mb-4 md:mb-0">
            <Image
                className="pl-4"
                src="/images/ch-logo.png"
                alt="Haugen baugen logo"
                width={50}
                height={50}
            />
            <h1 className="inline text-base mb-0 pl-2">
                Gärdehov Restaurang & Catering
            </h1>
        </div>

        <NavBarDesktop />
    </div>
</header>
    );
};
export default Header;
