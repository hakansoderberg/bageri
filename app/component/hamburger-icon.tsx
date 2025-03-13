import React from "react";

interface Props {
    onClick: () => void;
}

const HamburgerIcon: React.FC<Props> = (props) => {
    return (
        <button
            className={`flex flex-col justify-center items-center space-y-1 w-8 h-8 bg-transparent border-none`}
            onClick={props.onClick}
            aria-label="Toggle menu"
        >
            <span className="w-6 h-1 bg-black" />
            <span className="w-6 h-1 bg-black" />
            <span className="w-6 h-1 bg-black" />
        </button>
    );
};

export default HamburgerIcon;