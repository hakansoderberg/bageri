import { ReactNode } from "react";

const Paragraph = ({ children, className }: { children: ReactNode; className?: string }) => (
    <p className={`text-xl text-gray-700 mb-4 ${className ?? ""}`}>{children}</p>
);
export default Paragraph;
