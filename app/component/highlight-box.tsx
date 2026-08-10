const HighlightBox = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`inline-block bg-light p-4 rounded-xs shadow-md ${className ?? ""}`}>{children}</div>;
};
export default HighlightBox;
