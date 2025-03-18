const Block = ({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) => {
    return (
        <div className={`${dark ? "bg-dark" : "bg-third"}  text-white p-4 rounded-sm shadow-md ${className ?? ""}`}>
            {children}
        </div>
    );
};
export default Block;
