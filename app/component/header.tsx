import FakeLogo from "./fake-logo";
import NavBarDesktop from "./nav-bar-desktop";
import NavBarMobile from "./nav-bar-mobile";

const Header = () => {
    return (
        <header className="h-[230px] bg-neutral-100 text-black ">
                <div className="hidden md:flex max-w-screen-lg pt-8 mx-auto flex justify-between items-center h-full">
                    <FakeLogo />
                    <NavBarDesktop />
                </div>

                <div className="flex md:hidden justify-center pt-8 items-center">
                    <FakeLogo />
                    <NavBarMobile />
                </div>
        </header>
    );
};
export default Header;
