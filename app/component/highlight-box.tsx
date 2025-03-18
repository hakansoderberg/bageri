const HighlightBox = ({ children, className }: { children: React.ReactNode, className?:string }) => {
    return (
        <div className={`inline-block bg-primary p-4 rounded-sm shadow-md ${className ?? ""}`}>
            <div className="border-1 border-gray-900 p-4 rounded-sm ">
                {children}
            </div>
        </div>
    );
};
export default HighlightBox;
