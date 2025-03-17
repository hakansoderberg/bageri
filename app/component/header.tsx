import Image from "next/image";
import NavBarDesktop from "./nav-bar-desktop";
import NavBarMobile from "./nav-bar-mobile";

const Header = () => {
    return (
        <header className="min-h-[230px] bg-orange-200  ">
            <div className="hidden md:flex max-w-screen-lg pt-8 mx-auto flex-col justify-center items-center h-full">
                <Image src="/images/logo-transparent.png" alt="Haugen baugen logo" width={200} height={200} />
                <div className="my-8">
                    <NavBarDesktop />
                </div>
            </div>

            <div className="flex md:hidden justify-center pt-8 items-center">
                <Image src="/images/logo-transparent.png" alt="Haugen baugen logo" width={150} height={150} />
                <NavBarMobile />
            </div>
        </header>
    );
};
export default Header;
