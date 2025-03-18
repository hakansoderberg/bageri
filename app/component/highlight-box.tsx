const HighlightBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="inline-block bg-dark-2 p-4 rounded-sm shadow-md">
            <div className="border-1 border-gray-900 p-4 rounded-sm text-light">
                {children}
            </div>
        </div>
    );
};
export default HighlightBox;
