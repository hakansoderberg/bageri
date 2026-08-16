const Block = ({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) => {
    return (
        <div className={`${dark ? "bg-navy-deep" : "bg-navy"} text-offwhite p-4 rounded-xs shadow-md ${className ?? ""}`}>
            {children}
        </div>
    );
};
export default Block;
