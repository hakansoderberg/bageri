import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SlimWidth = ({ children, className = "" }: Props) => {
  return (
    <div className="flex justify-center">
      <div
        className={`w-full max-w-[800px] flex flex-col items-center text-center ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlimWidth;