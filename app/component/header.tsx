import Image from "next/image";
import NavBarDesktop from "./nav-bar-desktop";
import NavBarMobile from "./nav-bar-mobile";
import Icon from "./Icon";

const Header = () => {
    return (
        <header className="min-h-[230px] bg-primary mb-8 md:mb-16">
            <div className="hidden md:flex pt-8 flex-col h-full">
                <Image
                    className="mx-auto mb-16"
                    src="/images/gardet-logo.png"
                    alt="Haugen baugen logo"
                    width={200}
                    height={200}
                />
                <Icon>

                </Icon>
                <div className="divider"></div>
                <div className="max-w-screen-lg mx-auto w-full px-4 py-2">
                    <NavBarDesktop />
                </div>
                <div className="divider"></div>
            </div>
            <div className="flex md:hidden justify-center pt-8 items-center ">
                <Image src="/images/gardet-logo.png" alt="Haugen baugen logo" width={150} height={150} />
                <NavBarMobile />
            </div>
        </header>
    );
};
export default Header;
