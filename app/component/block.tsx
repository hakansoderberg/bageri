const Block = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`bg-third p-4 rounded-sm shadow-md ${className ?? ""}`}>{children}</div>;
};
export default Block;
