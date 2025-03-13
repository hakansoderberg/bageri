import FakeLogo from "./fake-logo";
import NavBar from "./nav-bar";

const Header = () => {
    return (
        <header className="h-[230px] bg-neutral-100 text-black ">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center h-full">
                <FakeLogo />
                <NavBar />
            </div>
        </header>
    );
};
export default Header;
