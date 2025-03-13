import React from "react";

interface Props {
    onClick: () => void;
}

const CloseIcon: React.FC<Props> = (props) => {
    return (
        <button
            className="relative flex items-center justify-center w-10 h-10 bg-transparent border-none"
            onClick={props.onClick}
            aria-label="Close menu"
        >
            {/* Översta linjen */}
            <span
                className="absolute w-6 h-1 bg-black rotate-45 transform transition-all duration-300"
            />
            {/* Undre linjen */}
            <span
                className="absolute w-6 h-1 bg-black -rotate-45 transform transition-all duration-300"
            />
        </button>
    );
};

export default CloseIcon;